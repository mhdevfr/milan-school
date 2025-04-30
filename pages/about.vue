<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section with asymmetric layout -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <div class="space-y-6">
        <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À Propos de Moi</div>
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Milan</h1>
        <p class="text-xl text-muted-foreground">
          Développeur Full Stack & Étudiant en BTS SIO
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/cv.pdf" download class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Télécharger CV
          </a>
          <a href="https://flink-agency.dev/" target="_blank" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Mes projets personnels 
          </a>
          <a href="#contact" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Me Contacter
          </a>
        </div>
      </div>
      <div class="rounded-2xl border bg-card p-8 shadow-lg">
        <p class="text-lg text-muted-foreground leading-relaxed">
          Bonjour ! Je m'appelle Milan, 21 ans, un développeur passionné spécialisé dans le développement Full Stack Web et mobile. Actuellement étudiant en BTS SIO (Services Informatiques aux Organisations), je me consacre à la création d'applications innovantes et à l'apprentissage constant de nouvelles technologies.
        </p>
      </div>
    </div>

    <!-- About Section with cards -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <div class="rounded-xl border bg-card p-6 shadow-sm transform hover:scale-[1.02] transition-transform">
        <h3 class="text-xl font-semibold mb-4">Compétences Techniques</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium mb-2">Développement Web</h4>
            <p class="text-muted-foreground">
              HTML5, CSS3, PHP, JavaScript, TypeScript, Vue.js, Nuxt.js, TailwindCSS, GSAP, GraphQL
            </p>
          </div>
          <div>
            <h4 class="font-medium mb-2">Développement Mobile</h4>
            <p class="text-muted-foreground">
              Swift, SwiftUI pour le développement iOS natif, expérience en développement d'applications de gestion des dépenses
            </p>
          </div>
          <div>
            <h4 class="font-medium mb-2">Outils & Méthodes</h4>
            <p class="text-muted-foreground">
              Git, Vite, UI/UX Design, Méthodes Agiles, Intégration IA (OpenAI)
            </p>
          </div>
          <div>
            <h4 class="font-medium mb-2">Projets Notables</h4>
            <p class="text-muted-foreground">
              Flink Agency (Web Agency), Applications IA pour la génération de composants, Application iOS de suivi des dépenses
            </p>
          </div>
        </div>
      </div>
      <div class="rounded-xl border bg-card p-6 shadow-sm transform hover:scale-[1.02] transition-transform">
        <h3 class="text-xl font-semibold mb-4">Projets & Réalisations</h3>
        <p class="text-muted-foreground mb-4">
          Passionné par la création de solutions innovantes, je développe régulièrement des projets personnels que vous pouvez retrouver sur mon portfolio. Ma spécialisation en développement Full Stack me permet de gérer l'intégralité du cycle de développement, de la conception à la mise en production.
        </p>
        <p class="text-muted-foreground">
          En tant qu'étudiant en BTS SIO, je combine formation académique et projets pratiques, me permettant d'acquérir une solide expertise technique et une compréhension approfondie des besoins business.
        </p>
      </div>
    </div>

    <!-- Contact Section with modern grid -->
    <div id="contact" class="rounded-xl border bg-card p-8 shadow-lg">
      <h2 class="text-2xl font-bold mb-8">Me Contacter</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Contact Card - Phone -->
        <div class="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
          <div class="flex items-center gap-4 mb-3">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 class="font-medium">Téléphone</h3>
          </div>
          <p class="text-sm text-muted-foreground">+33 6 12 34 56 78</p>
        </div>

        <!-- Contact Card - Email -->
        <div class="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
          <div class="flex items-center gap-4 mb-3">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 class="font-medium">Email</h3>
          </div>
          <p class="text-sm text-muted-foreground">milan.herbe@stcharles-stecroix.org</p>
        </div>

        <!-- Contact Card - Location -->
        <div class="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
          <div class="flex items-center gap-4 mb-3">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="font-medium">Localisation</h3>
          </div>
          <p class="text-sm text-muted-foreground">Le Mans, France</p>
        </div>

        <!-- Contact Card - Social -->
        <div class="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
          <div class="flex items-center gap-4 mb-3">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              </svg>
            </div>
            <h3 class="font-medium">Réseaux Sociaux</h3>
          </div>
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/in/milanherbe/" target="_blank" class="text-muted-foreground hover:text-foreground transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/mhdevfr" target="_blank" class="text-muted-foreground hover:text-foreground transition-colors" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/hrb.milan" target="_blank" class="text-muted-foreground hover:text-foreground transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 