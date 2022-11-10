import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();


    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, []);

    //Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Password Authentication
    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google SignIn
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    //Logout
    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        googleSignIn,
        logout,
        createUser,
        passwordLogin,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;