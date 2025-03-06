"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

// API base URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// Types
type User = {
  id: string
  username: string
  email: string
  avatar: string
  level: number
  xp: number
  nextLevelXp: number
  role: string
  streak?: number
}

type AuthContextType = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
  error: string | null
  clearError: () => void
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Initialize auth state from localStorage (only on client)
  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      try {
        // Check if token is expired
        const decodedToken = jwtDecode(storedToken)
        const currentTime = Date.now() / 1000

        if (decodedToken.exp && decodedToken.exp < currentTime) {
          // Token expired, clear storage
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          setIsLoading(false)
          return
        }

        // Token valid, set auth state
        setToken(storedToken)
        setUser(JSON.parse(localStorage.getItem("user") || "null"))
        setIsAuthenticated(true)

        // Set axios default header
        axios.defaults.headers.common["x-auth-token"] = storedToken
      } catch (err) {
        // Invalid token, clear storage
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      }
    }

    setIsLoading(false)
  }, [])

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await axios.post(`${API_URL}/auth/login`, { email, password })

      // Set auth state
      setToken(res.data.token)
      setUser(res.data.user)
      setIsAuthenticated(true)

      // Set axios default header
      axios.defaults.headers.common["x-auth-token"] = res.data.token

      // Store in localStorage
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  // Register function
  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await axios.post(`${API_URL}/auth/register`, { username, email, password })

      // Set auth state
      setToken(res.data.token)
      setUser(res.data.user)
      setIsAuthenticated(true)

      // Set axios default header
      axios.defaults.headers.common["x-auth-token"] = res.data.token

      // Store in localStorage
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during registration")
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    // Clear auth state
    setToken(null)
    setUser(null)
    setIsAuthenticated(false)

    // Clear axios default header
    delete axios.defaults.headers.common["x-auth-token"]

    // Clear localStorage
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    // Redirect to home
    router.push("/")
  }

  // Clear error
  const clearError = () => setError(null)

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        error,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

