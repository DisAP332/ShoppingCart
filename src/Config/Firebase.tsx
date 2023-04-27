import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword ,
    signOut,
} from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBy3Vp3L1l_HtsztZMdLXBuVlL99yXvA4M",
  authDomain: "draken-jewelry.firebaseapp.com",
  databaseURL: "https://draken-jewelry-default-rtdb.firebaseio.com",
  projectId: "draken-jewelry",
  storageBucket: "draken-jewelry.appspot.com",
  messagingSenderId: "969793291765",
  appId: "1:969793291765:web:1a903433e10977644e8cbc",
  measurementId: "G-4N64TQWJSX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)




//authentication functionality

const userInfoRef = collection(db, 'users')

export const addUserInfo = async (usersName, userEmail, phoneNumber) => {
    try{
        await addDoc(userInfoRef, {
            name: usersName,
            email: userEmail,
            phone: phoneNumber
        })
    } catch (err) {
        console.error(err)
    }
}


export const signInwithGoogle = async () => {
    try{
        await signInWithPopup(auth, googleProvider);
    } catch(err) {
        console.error(err)
    }
}

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const signInWithEmailandPass = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const logOut = async () => {
    try{
        await signOut(auth);
    } catch(err) {
        console.error(err)
    }
}