<template>
  <div class="max-w-4xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="space-y-4">
      <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Web App</div>
      <h1 class="text-4xl font-bold tracking-tighter">Site Quinconces</h1>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">Framer</span>
        <span class="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">CMS</span>
      </div>
    </div>

    <!-- Project Image -->
    <div class="aspect-video overflow-hidden rounded-lg border">
      <img
        src="/quiconces.png"
        alt="Site Portfolio"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Project Description -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Aperçu du Projet</h2>
      <div class="text-muted-foreground">
        <p>Ce projet, réalisé lors d'un atelier professionnel au cours de ma première année de BTS SIO, avait pour but de recréer un site web à l'aide du CMS de notre choix. Le site a été développé avec le CMS Framer.</p>
      </div>
    </div>

    <!-- Key Features -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Outils Travaillés</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Framer</h3>
          </div>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="font-semibold">Figma</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Acquired -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Compétences Travaillées</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Développer la présence en ligne</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Participation à la gestion d'un projet de présence en ligne à travers la création de maquettes et l'utilisation d'outils CMS.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Travailler en mode projet</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Participation à un projet informatique en équipe en utilisant la méthode Agile pour une gestion efficace du temps et des ressources.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Mettre à disposition un service</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Participation à la qualification des besoins et à la mise en œuvre d'une solution technique adaptée aux exigences du projet.
          </p>
        </div>
        <div class="rounded-lg border p-4">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3 class="font-semibold">Organiser son développement professionnel</h3>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Développement de compétences techniques et collaboratives à travers l'apprentissage de nouveaux outils et méthodologies.
          </p>
        </div>
      </div>
    </div>

    <!-- Mode de Travail -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Mode de Travail</h2>
      <div class="text-muted-foreground">
        <p>Méthode Agile</p>
      </div>
    </div>

    <!-- CMS Comparison Table -->
    
    <div class="my-10">
      <h2 class="text-2xl font-bold mb-4">Tableau Comparatif des CMS</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-muted">
              <th class="border p-2 text-left">Critères</th>
              <th class="border p-2 text-left">Framer</th>
              <th class="border p-2 text-left">WordPress</th>
              <th class="border p-2 text-left">Webflow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-medium">Facilité d'utilisation</td>
              <td class="border p-2">Très intuitif</td>
              <td class="border p-2">Nécessite des plugins</td>
              <td class="border p-2">Complexe pour les débutants</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Personnalisation</td>
              <td class="border p-2">Haute flexibilité</td>
              <td class="border p-2">Limité sans extensions</td>
              <td class="border p-2">Bonne mais avec des contraintes</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Performances</td>
              <td class="border p-2">Optimisées pour la vitesse</td>
              <td class="border p-2">Dépend des plugins</td>
              <td class="border p-2">Correctes</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Apprentissage</td>
              <td class="border p-2">Rapide</td>
              <td class="border p-2">Intermédiaire</td>
              <td class="border p-2">Long</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Technical Details -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Détails Techniques</h2>
      <div class="text-muted-foreground">
        <p>Le site vitrine des Quinconces a été développé en utilisant les technologies et approches suivantes :</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Framer :</strong> Utilisation de cette plateforme no-code pour la conception et le développement rapide, permettant de créer une interface utilisateur interactive sans programmation complexe</li>
          <li><strong>Site statique :</strong> Construction d'un site vitrine sans base de données, optimisé pour les performances et la vitesse de chargement</li>
          <li><strong>Design responsive :</strong> Adaptation automatique à tous les types d'appareils (mobile, tablette, ordinateur)</li>
          <li><strong>Animations :</strong> Intégration d'animations et transitions fluides pour améliorer l'expérience utilisateur</li>
          <li><strong>SEO :</strong> Optimisation du référencement naturel pour une meilleure visibilité dans les moteurs de recherche</li>
          <li><strong>Formulaires :</strong> Intégration de formulaires de contact avec validation côté client</li>
          <li><strong>Hébergement cloud :</strong> Déploiement sur une plateforme cloud pour une disponibilité optimale</li>
          <li><strong>Analytics :</strong> Installation d'outils de suivi des performances et du comportement utilisateur</li>
        </ul>
        
        <div class="mt-4 p-4 bg-muted rounded-lg">
          <h3 class="font-medium mb-2">Avantages de l'approche sans base de données :</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>Performances accrues avec des temps de chargement optimisés</li>
            <li>Sécurité renforcée par l'absence de points d'entrée pour les attaques sur base de données</li>
            <li>Coûts d'hébergement réduits et simplicité de maintenance</li>
            <li>Scalabilité naturelle, le site pouvant supporter un grand nombre de visiteurs simultanés</li>
            <li>Fiabilité améliorée avec moins de points de défaillance potentiels</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Technical Documentation -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Documentation Technique</h2>
      <div class="text-muted-foreground mb-4">
        <p>Consultez la documentation technique détaillée de ce projet, comprenant les décisions de conception, la structure des composants et les détails d'implémentation.</p>
      </div>
      
      <div class="flex flex-wrap items-center justify-center gap-4 mb-6">
        <button @click="zoomIn" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Zoom +
        </button>
        <button @click="zoomOut" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Zoom -
        </button>
        <button @click="resetZoom" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path><path d="M14 8H8v6h6"></path></svg>
          Réinitialiser
        </button>
        <a :href="pdfUrl" download class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Télécharger la Documentation
        </a>
      </div>
      
      <div class="w-full max-w-4xl border rounded-lg shadow-sm overflow-hidden" :style="{ transform: `scale(${scale})`, transformOrigin: 'top center' }">
        <ClientOnly>
          <div v-if="isClient">
            <VuePdfEmbed :source="pdfUrl" :page="1" :width="width" />
          </div>
          <div v-else class="flex items-center justify-center h-[600px] bg-muted">
            <p>Chargement de la visionneuse PDF...</p>
          </div>
        </ClientOnly>
      </div>
    </div>

    <!-- Project Link -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Lien du Projet</h2>
      <div class="rounded-lg border p-6">
        <div class="flex flex-col items-center space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-primary">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <h3 class="text-lg font-semibold">Visiter le Site</h3>
          <p class="text-center text-sm text-muted-foreground">
            Découvrez la démo en direct du site Quinconces.
          </p>
          <a href="https://milancorp.framer.website/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Voir la Démo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between pt-6">
      <NuxtLink 
        to="/AP1" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-4 w-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Projet Précédent
      </NuxtLink>
      <NuxtLink 
        to="/AP3" 
        class="inline-flex items-center text-sm font-medium text-primary"
      >
        Projet Suivant
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';

const pdfUrl = '/docs/AP2-documentation.pdf';
const scale = ref(1);
const width = ref(800);
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
  // Adjust width based on screen size
  updateWidth();
  window.addEventListener('resize', updateWidth);
});

function updateWidth() {
  const containerWidth = Math.min(window.innerWidth - 40, 800);
  width.value = containerWidth;
}

function zoomIn() {
  scale.value = Math.min(scale.value + 0.1, 2);
}

function zoomOut() {
  scale.value = Math.max(scale.value - 0.1, 0.5);
}

function resetZoom() {
  scale.value = 1;
}
</script>

<style scoped>
/* Add any custom styles here */
</style>