import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    function googleSignin() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    function logout() {
        return signOut(auth)
    } 

    useEffect(() => {
        const unsubscribe  = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{user, googleSignin, logout}}>
            { !loading && children }
        </AuthContext.Provider>
    )
}

export default AuthContext