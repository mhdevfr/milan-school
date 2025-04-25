<template>
  <div class="min-h-screen flex flex-col bg-background">
    <Navbar />
    
    <main class="flex-grow">
      <slot />
    </main>
  </div>
  <Footer />
</template>

<script setup>
// Vous pouvez ajouter ici la logique nécessaire pour votre layout
</script> 