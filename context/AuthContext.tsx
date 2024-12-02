'use client'

import { auth, db } from 'firebase'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useState, useEffect, ReactNode } from 'react'

// Define the shape of the Auth context value
interface AuthContextValue {
    currentUser: User | null
    userDataObj: Record<string, any> | null
    setUserDataObj: React.Dispatch<React.SetStateAction<Record<string, any> | null>>
    signup: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    loading: boolean
}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)

// Custom hook to use the AuthContext
export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

// AuthProvider component
interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [userDataObj, setUserDataObj] = useState<Record<string, any> | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    // AUTH HANDLERS
    async function signup(email: string, password: string): Promise<void> {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    async function login(email: string, password: string): Promise<void> {
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function logout(): Promise<void> {
        setUserDataObj(null)
        setCurrentUser(null)
        await signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                setLoading(true)
                setCurrentUser(user)
                if (!user) {
                    console.log('No User Found')
                    return
                }

                // Fetch user data from Firestore
                console.log('Fetching User Data')
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                let firebaseData: Record<string, any> = {}
                if (docSnap.exists()) {
                    console.log('Found User Data')
                    firebaseData = docSnap.data()
                }
                setUserDataObj(firebaseData)
            } catch (err: any) {
                console.error(err.message)
            } finally {
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const value: AuthContextValue = {
        currentUser,
        userDataObj,
        setUserDataObj,
        signup,
        login,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
