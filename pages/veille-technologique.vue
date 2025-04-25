<template>
  <div class="container mx-auto px-4 space-y-16 mt-10">
    <div class="relative">
      <h1 class="text-4xl font-bold mb-4">Veille Technologique</h1>
      <p class="text-muted-foreground max-w-2xl">
        Suivi des dernières avancées et tendances dans l'écosystème Vue.js et Nuxt.js.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Vue 3 Section -->
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-card rounded-lg shadow-sm p-8 border border-border">
          <div class="flex items-center gap-4 mb-6">
            <Icon name="logos:vue" class="w-12 h-12" />
            <div>
              <h2 class="text-2xl font-semibold">Vue 3 & Composition API</h2>
              <p class="text-sm text-muted-foreground">Framework progressif pour la création d'interfaces utilisateur</p>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex-1">
                <h3 class="font-medium mb-2">Nouvelles Fonctionnalités</h3>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Composition API et <code>setup</code> script
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Teleport pour le rendu conditionnel
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Suspense pour la gestion asynchrone
                  </li>
                </ul>
              </div>
              <div class="flex-1">
                <h3 class="font-medium mb-2">Optimisations</h3>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Tree-shaking amélioré
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Virtual DOM optimisé
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Support TypeScript natif
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="pt-4 border-t border-border">
              <h3 class="font-medium mb-2">Écosystème</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-muted rounded-full text-sm">Vue Router 4</span>
                <span class="px-3 py-1 bg-muted rounded-full text-sm">Pinia</span>
                <span class="px-3 py-1 bg-muted rounded-full text-sm">Vite</span>
                <span class="px-3 py-1 bg-muted rounded-full text-sm">DevTools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Nuxt 3 Section -->
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative bg-card rounded-lg shadow-sm p-8 border border-border">
          <div class="flex items-center gap-4 mb-6">
            <Icon name="logos:nuxt-icon" class="w-12 h-12" />
            <div>
              <h2 class="text-2xl font-semibold">Nuxt 3</h2>
              <p class="text-sm text-muted-foreground">Framework Vue.js pour des applications web modernes</p>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex-1">
                <h3 class="font-medium mb-2">Nouveautés</h3>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Moteur Nitro
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Composables et auto-imports
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Hybrid rendering
                  </li>
                </ul>
              </div>
              <div class="flex-1">
                <h3 class="font-medium mb-2">Fonctionnalités</h3>
                <ul class="space-y-2 text-sm text-muted-foreground">
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    Server Routes
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    State management
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon name="ph:check-circle" class="w-4 h-4 text-primary" />
                    SEO dynamique
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="pt-4 border-t border-border">
              <h3 class="font-medium mb-2">Modules</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-muted rounded-full text-sm">Nuxt UI</span>
                <span class="px-3 py-1 bg-muted rounded-full text-sm">Nuxt Content</span>
                <span class="px-3 py-1 bg-muted rounded-full text-sm">Nuxt Image</span>
                <span class="px-3 py-1 bg-muted rounded-full text-sm">DevTools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Articles Section -->
    <div class="space-y-8">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">Articles Récents</h2>
        <div class="flex gap-2">
          <button 
            @click="activeFilter = 'all'" 
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            :class="activeFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'"
          >
            <Icon name="ph:newspaper" class="w-4 h-4" />
            <span>Tous</span>
          </button>
          <button 
            @click="activeFilter = 'vue'" 
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            :class="activeFilter === 'vue' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'"
          >
            <Icon name="logos:vue" class="w-4 h-4" />
            <span>Vue 3</span>
          </button>
          <button 
            @click="activeFilter = 'nuxt'" 
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            :class="activeFilter === 'nuxt' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'"
          >
            <Icon name="logos:nuxt-icon" class="w-4 h-4" />
            <span>Nuxt 3</span>
          </button>
        </div>
      </div>
      
      <div v-if="loading" class="flex justify-center py-12">
        <Icon name="svg-spinners:180-ring" class="w-12 h-12 text-primary" />
      </div>
      
      <div v-else-if="error" class="bg-destructive/10 text-destructive p-4 rounded-md">
        <Icon name="ph:warning" class="w-5 h-5 inline-block mr-2" />
        {{ error }}
      </div>
      
      <div v-else-if="filteredArticles.length === 0" class="text-center py-12 text-muted-foreground">
        <Icon name="ph:folder-open" class="w-8 h-8 mx-auto mb-2" />
        Aucun article trouvé pour cette catégorie.
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a 
          v-for="article in filteredArticles" 
          :key="article.link" 
          :href="article.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors flex flex-col h-full"
        >
          <div class="h-48 bg-muted relative">
            <img 
              v-if="article.imageUrl" 
              :src="article.imageUrl" 
              :alt="article.title" 
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-muted">
              <Icon name="ph:newspaper" class="w-12 h-12 text-muted-foreground" />
            </div>
            <div class="absolute top-2 right-2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
              {{ article.topic === 'vue' ? 'Vue 3' : 'Nuxt 3' }}
            </div>
          </div>
          
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-2">
              <Icon name="ph:calendar" class="w-4 h-4 text-muted-foreground" />
              <span class="text-xs text-muted-foreground">{{ formatDate(article.pubDate) }}</span>
              <span class="text-xs px-2 py-0.5 bg-muted rounded-full">{{ article.source }}</span>
            </div>
            
            <h3 class="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{{ article.title }}</h3>
            
            <p v-if="article.contentSnippet" class="text-sm text-muted-foreground mb-4 line-clamp-3">
              {{ article.contentSnippet }}
            </p>
            
            <div class="mt-auto pt-2 flex items-center text-sm text-primary font-medium">
              Lire l'article
              <Icon name="ph:arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      </div>
    </div>
    
    <div class="bg-muted/50 p-8 rounded-lg">
      <h3 class="text-xl font-semibold mb-6">Ressources pour Approfondir</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="https://vuejs.org/guide/introduction.html" target="_blank" class="group flex items-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <Icon name="ph:book" class="w-6 h-6 mr-3 text-primary" />
          <div>
            <div class="font-medium group-hover:text-primary transition-colors">Documentation Vue 3</div>
            <div class="text-sm text-muted-foreground">Guide complet et API reference</div>
          </div>
        </a>
        <a href="https://nuxt.com/docs" target="_blank" class="group flex items-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <Icon name="ph:book" class="w-6 h-6 mr-3 text-primary" />
          <div>
            <div class="font-medium group-hover:text-primary transition-colors">Documentation Nuxt 3</div>
            <div class="text-sm text-muted-foreground">Guide complet et API reference</div>
          </div>
        </a>
        <a href="https://github.com/vuejs/core" target="_blank" class="group flex items-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <Icon name="ph:github-logo" class="w-6 h-6 mr-3 text-primary" />
          <div>
            <div class="font-medium group-hover:text-primary transition-colors">GitHub Vue.js</div>
            <div class="text-sm text-muted-foreground">Code source et contributions</div>
          </div>
        </a>
        <a href="https://github.com/nuxt/nuxt" target="_blank" class="group flex items-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
          <Icon name="ph:github-logo" class="w-6 h-6 mr-3 text-primary" />
          <div>
            <div class="font-medium group-hover:text-primary transition-colors">GitHub Nuxt</div>
            <div class="text-sm text-muted-foreground">Code source et contributions</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the composable
import { useArticles } from '~/composables/useArticles';

// Set up page metadata
useHead({
  title: 'Veille Technologique - Vue 3 et Nuxt 3',
  meta: [
    { name: 'description', content: 'Veille technologique sur Vue 3 et Nuxt 3, leurs avancées récentes et bonnes pratiques.' }
  ]
});

// Get articles using the composable
const { articles, loading, error, fetchArticles, formatDate } = useArticles();

// Set up reactive filter
const activeFilter = ref('all');

// Computed property for filtered articles
const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') {
    return articles.value;
  }
  return articles.value.filter(article => article.topic === activeFilter.value);
});

// Watch for filter changes to update articles
watch(activeFilter, (newFilter) => {
  fetchArticles(newFilter);
});

// Fetch articles when component is mounted
onMounted(() => {
  fetchArticles();
});
</script> 