<template>
  <div class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tighter">Espace Admin</h1>
      <p class="text-muted-foreground">
        Bienvenue dans votre espace administrateur. Cette page n'est accessible qu'aux utilisateurs connectés.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="p-6 flex flex-col space-y-2">
          <h3 class="text-lg font-semibold">Statistiques</h3>
          <p class="text-sm text-muted-foreground">Consultez les statistiques de votre portfolio</p>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Visiteurs</span>
              <span class="text-sm font-medium">1,234</span>
            </div>
            <div class="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div class="bg-primary h-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="p-6 flex flex-col space-y-2">
          <h3 class="text-lg font-semibold">Projets</h3>
          <p class="text-sm text-muted-foreground">Gérez vos projets et stages</p>
          <div class="mt-4">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-10 px-4 py-2 w-full">
              Ajouter un projet
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="p-6 flex flex-col space-y-2">
          <h3 class="text-lg font-semibold">Paramètres</h3>
          <p class="text-sm text-muted-foreground">Configurez votre portfolio</p>
          <div class="mt-4">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-muted text-foreground h-10 px-4 py-2 w-full">
              Modifier les paramètres
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-4">Activité récente</h2>
      <div class="rounded-lg border">
        <div class="p-4 border-b">
          <div class="flex items-center">
            <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Projet mis à jour</p>
              <p class="text-xs text-muted-foreground">Il y a 2 heures</p>
            </div>
          </div>
        </div>
        <div class="p-4 border-b">
          <div class="flex items-center">
            <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Nouvel utilisateur</p>
              <p class="text-xs text-muted-foreground">Il y a 1 jour</p>
            </div>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center">
            <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium">Contenu modifié</p>
              <p class="text-xs text-muted-foreground">Il y a 3 jours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Apply auth middleware to this page
definePageMeta({
  middleware: ['auth']
});

// Get user info from auth composable
const { user } = useAuth();
</script> 