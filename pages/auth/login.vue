<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-md w-full space-y-8 p-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Or
          <NuxtLink to="/auth/register" class="text-primary-600 hover:text-primary-500">
            create a new account
          </NuxtLink>
        </p>
      </div>

      <UForm
        :state="form"
        @submit="handleLogin"
        class="space-y-6"
      >
        <UFormGroup label="Email" name="email">
          <UInput
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </UFormGroup>

        <UButton
          type="submit"
          color="primary"
          variant="solid"
          size="lg"
          :loading="loading"
          class="w-full"
        >
          Sign in
        </UButton>
      </UForm>

      <div v-if="error" class="text-red-500 text-sm text-center">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { $client } = useNuxtApp()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

async function handleLogin() {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: form,
      baseURL: 'http://localhost:3001'
    })

    // Store token and user info
    localStorage.setItem('auth_token', response.token)
    localStorage.setItem('user', JSON.stringify(response.user))

    // Redirect to chat
    await router.push('/chat')
  } catch (err) {
    error.value = err?.data?.error || 'Login failed'
  } finally {
    loading.value = false
  }
}

// SEO Meta
useHead({
  title: 'Login - Chat App',
  meta: [
    { name: 'description', content: 'Sign in to your Chat App account' }
  ]
})
</script>