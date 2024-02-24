import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ref, set, update, onValue } from "firebase/database";
import { auth, database } from "./firebase";
import moment from 'moment';

const defaultImg = 'https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Fuser-200.png?alt=media&token=9d3a5b25-6552-422b-887b-860c22df8529'

export const register = async (form) => {

    try {
        const userData = await createUserWithEmailAndPassword(auth, form.email, form.password)
        const data = userData.user
        console.log(data)
        let time = moment().format('L HH:MM')
       
        await set(ref(database, 'users/' + data.uid), {
            name: form.username,
            email: form.email,
            number: "+91"+form.number,
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

        let time = moment().format('L HH:MM')

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
        let time = moment().format('L HH:MM')

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
                    is_download: false,
                    number:""
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