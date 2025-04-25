// Define the article interface
export interface Article {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  categories?: string[];
  source: string;
  sourceUrl: string;
  imageUrl?: string;
  topic: 'llm' | 'nuxt' | 'both';
}

export const useArticles = () => {
  // State for articles
  const articles = ref<Article[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  
  // Function to format the date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  // Function to fetch articles
  const fetchArticles = async (topic: string = 'all', limit: number = 20) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(`/api/articles?topic=${topic}&limit=${limit}`);
      const data = await response.json();
      
      if (data.success) {
        articles.value = data.articles;
      } else {
        error.value = data.error || 'Une erreur est survenue lors de la récupération des articles';
      }
    } catch (err) {
      console.error('Error fetching articles:', err);
      error.value = 'Une erreur est survenue lors de la récupération des articles';
    } finally {
      loading.value = false;
    }
  };
  
  // Return the composable state and functions
  return {
    articles,
    loading,
    error,
    fetchArticles,
    formatDate
  };
}; 