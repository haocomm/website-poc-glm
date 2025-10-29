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
const router = useRouter()
const { login, loading } = useAuth()

const form = reactive({
  email: '',
  password: ''
})

const error = ref('')

async function handleLogin() {
  error.value = ''

  try {
    await login(form.email, form.password)

    // Redirect to chat
    await router.push('/chat')
  } catch (err) {
    error.value = err.message
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