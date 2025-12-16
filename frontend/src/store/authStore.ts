import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  roleId: number
  roleName: string
}

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setTokens: (accessToken: string, refreshToken: string) => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Static login: no backend required. Accept a single demo user.
        if (email !== 'admin@koreanwithus.com' || password !== 'admin123') {
          throw new Error('Invalid credentials')
        }

        const user: User = {
          id: 1,
          email,
          firstName: 'Admin',
          lastName: 'User',
          roleId: 1,
          roleName: 'Super Admin'
        }

        // Fake tokens for client-side-only auth
        const accessToken = 'static-access-token'
        const refreshToken = 'static-refresh-token'

        set({
          user,
          accessToken,
          refreshToken,
          isAuthenticated: true
        })
      },
      logout: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false
        })
      },
      setTokens: (accessToken: string, refreshToken: string) => {
        set({ accessToken, refreshToken })
      },
      setUser: (user: User) => {
        set({ user })
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)

