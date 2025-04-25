<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-12 px-4">
    <div class="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl">
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="relative">
              <Icon name="mdi:email-outline" class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                v-model="email"
                type="email"
                required
                class="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <div class="relative">
              <Icon name="mdi:lock-outline" class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                v-model="password"
                type="password"
                required
                class="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <p v-if="error" class="text-sm text-red-600 mt-2">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          {{ loading ? 'Connexion...' : 'Se connecter' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const client = useSupabaseClient()
const user = useSupabaseUser()
async function handleLogin() {
  if (loading.value) return
  
  loading.value = true
  error.value = ''

  try {
    const { error: err } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })

    if (err) throw err
    navigateTo('/')
  } catch (e) {
    error.value = 'Email ou mot de passe incorrect'
  }

  loading.value = false
}
</script> 