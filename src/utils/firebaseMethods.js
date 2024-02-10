import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ref, set, update, onValue } from "firebase/database";
import { ref as sRef, listAll } from "firebase/storage";
import { auth, database, storage } from "./firebase";

const defaultImg = 'https://e7.pngegg.com/pngimages/1004/160/png-clipart-computer-icons-user-profile-social-web-others-blue-social-media.png'

export const register = async (form) => {
    console.log("register")

    let google = null;
    let userData = null
    try {
        if (auth.currentUser && auth.currentUser.providerData[0].providerId === "google.com") {
            console.log("google")
            google = auth.currentUser
        }
        else {
            console.log("user")
            userData = await createUserWithEmailAndPassword(auth, form.email, form.password)

            await sendEmailVerification(userData.user)
        }
        const data = google ? auth.currentUser : userData.user
        let time = new Date(data.metadata.lastSignInTime).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });

        await set(ref(database, 'users/' + data.uid), {
            name: form.username,
            email: form.email,
            number: form.number,
            profile_picture: google ? auth.currentUser.photoURL : defaultImg,
            last_login: time,
            is_download: false
        });


        return "success"
        // await updateProfile(auth.currentUser, {
        //     displayName: fname + " " + lname,
        //     photoURL: defaultImg
        // })

    } catch (error) {
        console.log(error.message)
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            throw "Email already in use"
        }
        else if (error.message === 'Firebase: Error (auth/invalid-email).') {
            throw "Invalid email"
        }
        else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            throw "Password should be at least 6 characters (weak-password)"
        }
        else {
            throw error.message
        }
    }

}

export const login = async (form) => {
    try {
        const userData = await signInWithEmailAndPassword(auth, form.email, form.password)
        const data = userData.user

        let time = new Date(data.metadata.lastSignInTime).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });

        await update(ref(database, 'users/' + data.uid), {
            last_login: time
        });
        return 'success'

    } catch (error) {
        if (error.message === 'Firebase: Error (auth/invalid-credential).')
            throw 'Incorrect email or password'
        else {
            throw error.message
        }
    }

}

export const logout = async () => {
    try {
        await signOut(auth)
        return;
    } catch (error) {

        return error.message
    }

}

export const EmailVerify = async () => {
    console.log(auth.currentUser)
    try {
        await sendEmailVerification(auth.currentUser)
        return 'success'

    } catch (error) {

        return error.message
    }

}

export const google = async () => {
    let isUserExistBefore = false
    const provider = new GoogleAuthProvider()
    const userData = await signInWithPopup(auth, provider)

    const data = userData.user

    const dbRef = ref(database, 'users/' + data.uid);
    onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
            console.log("User already Exist")
            isUserExistBefore = true;
        }
        else {
            console.log("new login")

        }
    });
    return isUserExistBefore
}

export const saveDownloader = async (user) => {
    await update(ref(database, 'users/' + user.uid), {
        is_download: true
    });
}

// export const ReadData = async (i) => {
//     console.log("i", i)
//     let index = i === '' ? '' : i;
//     console.log("index", index)
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, `items/${index}`)).then((snapshot) => {

//         if (snapshot.exists()) {
//             console.log("helo", snapshot.val());

//         } else {
//             console.log("No data available");
//         }
//         return snapshot.val()
//     }).catch((error) => {
//         console.error(error);
//     });

// }
// export const showFiles = (folder) => {
//     const filesRef = sRef(storage, `${folder}/`);

//     // Find all the prefixes and items.
//     listAll(filesRef)
//         .then((res) => {
//             res.prefixes.forEach((folderRef) => {
//                 // All the prefixes under listRef.
//                 // You may call listAll() recursively on them.
//             });
//             console.log(res.items)
//             res.items.forEach((itemRef) => {

//             });
//         }).catch((error) => {
//             console.log(error.message)
//         });
// }