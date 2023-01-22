import React from 'react'
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export default function useSignup() {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
  
    const signup = async (email,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch()

    }
}
