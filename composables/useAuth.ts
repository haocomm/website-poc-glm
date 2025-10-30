interface User {
  id: string
  username: string
  email: string
  avatar?: string
  isOnline: boolean
  lastSeen: string
}

// Import API configuration
import { API_BASE_URL } from '~/config/api'

export const useAuth = () => {
  // Initialize auth state from localStorage
  const token = ref<string | null>(process.client ? localStorage.getItem('auth_token') : null)
  const user = ref<User | null>(process.client ? JSON.parse(localStorage.getItem('user') || 'null') : null)
  const loading = ref(false)

  // Computed properties
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // Watch for token changes and update localStorage
  watch(token, (newToken) => {
    if (process.client) {
      if (newToken) {
        localStorage.setItem('auth_token', newToken)
      } else {
        localStorage.removeItem('auth_token')
      }
    }
  })

  // Watch for user changes and update localStorage
  watch(user, (newUser) => {
    if (process.client) {
      if (newUser) {
        localStorage.setItem('user', JSON.stringify(newUser))
      } else {
        localStorage.removeItem('user')
      }
    }
  })

  // Login function
  const login = async (email: string, password: string) => {
    loading.value = true
    try {
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: { email, password },
        baseURL: API_BASE_URL
      })

      token.value = response.token
      user.value = response.user

      return response
    } catch (error: any) {
      throw new Error(error?.data?.error || 'Login failed')
    } finally {
      loading.value = false
    }
  }

  // Register function
  const register = async (username: string, email: string, password: string) => {
    loading.value = true
    try {
      const response = await $fetch('/api/auth/register', {
        method: 'POST',
        body: { username, email, password },
        baseURL: API_BASE_URL
      })

      token.value = response.token
      user.value = response.user

      return response
    } catch (error: any) {
      throw new Error(error?.data?.error || 'Registration failed')
    } finally {
      loading.value = false
    }
  }

  // Logout function
  const logout = async () => {
    loading.value = true
    try {
      if (token.value) {
        await $fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token.value}`
          },
          baseURL: API_BASE_URL
        })
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local state regardless of API call success
      token.value = null
      user.value = null
      loading.value = false
    }
  }

  // Get current user
  const fetchUser = async () => {
    if (!token.value) return

    loading.value = true
    try {
      const response = await $fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token.value}`
        },
        baseURL: API_BASE_URL
      })

      user.value = response.user
    } catch (error: any) {
      // Token might be invalid, clear auth state
      token.value = null
      user.value = null
      throw new Error(error?.data?.error || 'Failed to fetch user')
    } finally {
      loading.value = false
    }
  }

  // Initialize auth state on app start
  const initAuth = async () => {
    if (token.value && !user.value) {
      try {
        await fetchUser()
      } catch (error) {
        console.error('Auth initialization failed:', error)
      }
    }
  }

  return {
    token: readonly(token),
    user: readonly(user),
    loading: readonly(loading),
    isAuthenticated,
    login,
    register,
    logout,
    fetchUser,
    initAuth
  }
}