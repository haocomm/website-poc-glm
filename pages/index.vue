<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Chat App
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Connect with others in real-time conversations
        </p>

        <div class="space-y-4">
          <UButton
            size="xl"
            color="primary"
            variant="solid"
            @click="navigateTo('/auth/login')"
          >
            Get Started
          </UButton>

          <div class="text-sm text-gray-500 dark:text-gray-400">
            Already have an account?
            <NuxtLink to="/auth/login" class="text-primary-600 hover:text-primary-500">
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Chat App - Real-time Conversations',
  meta: [
    { name: 'description', content: 'Connect with others in real-time conversations' }
  ]
})
</script>