export default defineNuxtPlugin({
  name: 'theme-plugin',
  enforce: 'pre',
  setup() {
    // Cette fonction s'exécute uniquement côté client
    if (process.client) {
      // Fonction pour initialiser le thème
      const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      };
      
      // Initialiser le thème immédiatement
      initTheme();
      
      // Écouter les changements de préférences système
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          if (e.matches) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      });
    }
  }
}); 