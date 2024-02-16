import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ref, set, update, onValue } from "firebase/database";
import { ref as sRef, listAll } from "firebase/storage";
import { auth, database, storage } from "./firebase";

const defaultImg = 'https://e7.pngegg.com/pngimages/1004/160/png-clipart-computer-icons-user-profile-social-web-others-blue-social-media.png'

export const register = async (form) => {



    try {
        const userData = await createUserWithEmailAndPassword(auth, form.email, form.password)
        const data = userData.user

        let time = new Date(data.metadata.lastSignInTime).toDateString(undefined, { timeZone: 'Asia/Kolkata' });

        await set(ref(database, 'users/' + data.uid), {
            name: form.username,
            email: form.email,
            number: form.number,
            role: "user",
            profile_picture: defaultImg,
            last_login: time,
            is_download: false
        });
        await sendEmailVerification(userData.user)

        return "success"

    } catch (error) {

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

        let time = new Date(data.metadata.lastSignInTime)

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

    try {
        await sendEmailVerification(auth.currentUser)
        return 'success'

    } catch (error) {

        return error.message
    }

}

export const google = async () => {
    const provider = new GoogleAuthProvider()
    try {
        const userData = await signInWithPopup(auth, provider)

        const data = userData.user

        const dbref = ref(database, "users/" + data.uid);
        let time = new Date(data.metadata.lastSignInTime).toDateString(undefined, { timeZone: 'Asia/Kolkata' });

        onValue(dbref, (snapshot) => {
            if (snapshot.exists()) {

                update(dbref, {
                    last_login: time
                });
            }
            else {
                set(dbref, {
                    name: data.displayName,
                    email: data.email,
                    role: "user",
                    profile_picture: data.photoURL,
                    is_download: false
                });
            }
        })




    } catch (error) {
        throw error.message
    }

    return "success"
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