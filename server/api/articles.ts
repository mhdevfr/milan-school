// Define the structure of an article
interface Article {
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

// Import the RSS Parser
import Parser from 'rss-parser';

// Define RSS feed sources
const rssSources = [
  {
    url: 'https://medium.com/feed/tag/large-language-models',
    source: 'Medium',
    sourceUrl: 'https://medium.com',
    topic: 'llm' as const
  },
  {
    url: 'https://dev.to/feed/tag/llm',
    source: 'DEV.to',
    sourceUrl: 'https://dev.to',
    topic: 'llm' as const
  },
  {
    url: 'https://blog.nuxtjs.org/feed.xml',
    source: 'Nuxt Blog',
    sourceUrl: 'https://blog.nuxtjs.org',
    topic: 'nuxt' as const
  },
  {
    url: 'https://dev.to/feed/tag/nuxtjs',
    source: 'DEV.to',
    sourceUrl: 'https://dev.to',
    topic: 'nuxt' as const
  }
];

// Define mock articles for fallback
const mockArticles: Article[] = [
  {
    title: "Les avancées récentes de GPT-4o et leur impact sur le développement web",
    link: "https://example.com/article1",
    pubDate: new Date().toISOString(),
    contentSnippet: "GPT-4o représente une avancée majeure dans le domaine des modèles de langage. Cet article explore comment ces avancées peuvent être utilisées dans le développement web moderne.",
    source: "Medium",
    sourceUrl: "https://medium.com",
    imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=500",
    topic: "llm"
  },
  {
    title: "Intégration de Claude 3.5 Sonnet dans une application Nuxt.js",
    link: "https://example.com/article2",
    pubDate: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    contentSnippet: "Découvrez comment intégrer les capacités avancées de Claude 3.5 Sonnet dans votre application Nuxt.js pour créer des expériences utilisateur plus intelligentes.",
    source: "DEV.to",
    sourceUrl: "https://dev.to",
    imageUrl: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=500",
    topic: "both"
  },
  {
    title: "Nuxt 3.8 : Les nouvelles fonctionnalités qui changent la donne",
    link: "https://example.com/article3",
    pubDate: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    contentSnippet: "La version 3.8 de Nuxt apporte son lot de nouveautés. Découvrez les fonctionnalités qui vont transformer votre façon de développer des applications Vue.js.",
    source: "Nuxt Blog",
    sourceUrl: "https://blog.nuxtjs.org",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=500",
    topic: "nuxt"
  },
  {
    title: "Utiliser Llama 3 pour générer du contenu dans votre application Nuxt",
    link: "https://example.com/article4",
    pubDate: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    contentSnippet: "Llama 3 offre une alternative open-source aux modèles propriétaires. Voici comment l'intégrer dans votre application Nuxt pour générer du contenu dynamique.",
    source: "Medium",
    sourceUrl: "https://medium.com",
    imageUrl: "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?q=80&w=500",
    topic: "both"
  },
  {
    title: "Optimisation des performances avec Nuxt 3 et Nitro",
    link: "https://example.com/article5",
    pubDate: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    contentSnippet: "Le moteur Nitro de Nuxt 3 offre des performances exceptionnelles. Découvrez comment tirer parti de ses capacités pour optimiser votre application.",
    source: "DEV.to",
    sourceUrl: "https://dev.to",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500",
    topic: "nuxt"
  },
  {
    title: "Mistral Large : L'alternative européenne aux LLMs américains",
    link: "https://example.com/article6",
    pubDate: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    contentSnippet: "Mistral AI propose désormais Mistral Large, un modèle de langage qui rivalise avec les géants américains. Analyse de ses performances et de ses cas d'utilisation.",
    source: "InfoQ",
    sourceUrl: "https://infoq.com",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500",
    topic: "llm"
  },
  {
    title: "Nuxt Content : Gérer votre contenu comme un pro",
    link: "https://example.com/article7",
    pubDate: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
    contentSnippet: "Nuxt Content v2 transforme la façon dont vous gérez le contenu dans vos applications Nuxt. Découvrez ses fonctionnalités et comment l'utiliser efficacement.",
    source: "Nuxt Blog",
    sourceUrl: "https://blog.nuxtjs.org",
    imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=500",
    topic: "nuxt"
  },
  {
    title: "Les enjeux éthiques des LLMs : biais, équité et transparence",
    link: "https://example.com/article8",
    pubDate: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
    contentSnippet: "Les modèles de langage posent des questions éthiques importantes. Cet article explore les enjeux liés aux biais, à l'équité et à la transparence dans le développement des LLMs.",
    source: "Medium",
    sourceUrl: "https://medium.com",
    imageUrl: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=500",
    topic: "llm"
  },
  {
    title: "Créer un chatbot intelligent avec Nuxt.js et l'API d'OpenAI",
    link: "https://example.com/article9",
    pubDate: new Date(Date.now() - 691200000).toISOString(), // 8 days ago
    contentSnippet: "Guide pas à pas pour intégrer un chatbot alimenté par GPT-4 dans votre application Nuxt.js, avec gestion du contexte et personnalisation des réponses.",
    source: "DEV.to",
    sourceUrl: "https://dev.to",
    imageUrl: "https://images.unsplash.com/photo-1676299081847-824982de04d1?q=80&w=500",
    topic: "both"
  },
  {
    title: "Nuxt DevTools : Boostez votre productivité de développement",
    link: "https://example.com/article10",
    pubDate: new Date(Date.now() - 777600000).toISOString(), // 9 days ago
    contentSnippet: "Les Nuxt DevTools offrent une expérience de développement améliorée. Découvrez comment les utiliser pour déboguer et optimiser votre application Nuxt.",
    source: "Nuxt Blog",
    sourceUrl: "https://blog.nuxtjs.org",
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=500",
    topic: "nuxt"
  },
  {
    title: "LangChain.js : Créer des applications complexes basées sur les LLMs",
    link: "https://example.com/article11",
    pubDate: new Date(Date.now() - 864000000).toISOString(), // 10 days ago
    contentSnippet: "LangChain.js simplifie le développement d'applications basées sur les LLMs. Découvrez comment l'utiliser pour créer des chaînes de traitement sophistiquées.",
    source: "InfoQ",
    sourceUrl: "https://infoq.com",
    imageUrl: "https://images.unsplash.com/photo-1655635643532-fa9ba2648cfc?q=80&w=500",
    topic: "llm"
  },
  {
    title: "Nuxt 3 et TypeScript : Typage fort pour des applications robustes",
    link: "https://example.com/article12",
    pubDate: new Date(Date.now() - 950400000).toISOString(), // 11 days ago
    contentSnippet: "Nuxt 3 intègre nativement TypeScript. Découvrez comment tirer parti du typage fort pour créer des applications plus robustes et maintenables.",
    source: "Medium",
    sourceUrl: "https://medium.com",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500",
    topic: "nuxt"
  }
];

// Helper function to extract image URL from content if available
const extractImageUrl = (content: string | undefined): string | undefined => {
  if (!content) return undefined;
  
  // Try to find an image URL in the content
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
  return imgMatch ? imgMatch[1] : undefined;
};

// Helper function to determine topic based on content and categories
const determineTopic = (item: any, defaultTopic: 'llm' | 'nuxt' | 'both'): 'llm' | 'nuxt' | 'both' => {
  const content = (item.content || item.contentSnippet || '').toLowerCase();
  const categories = item.categories || [];
  
  const llmKeywords = ['llm', 'large language model', 'gpt', 'chatgpt', 'openai', 'claude', 'mistral', 'llama'];
  const nuxtKeywords = ['nuxt', 'vue', 'vuejs', 'vue.js', 'nuxtjs', 'nuxt.js'];
  
  const hasLLM = llmKeywords.some(keyword => 
    content.includes(keyword) || 
    categories.some((cat: string) => cat.toLowerCase().includes(keyword))
  );
  
  const hasNuxt = nuxtKeywords.some(keyword => 
    content.includes(keyword) || 
    categories.some((cat: string) => cat.toLowerCase().includes(keyword))
  );
  
  if (hasLLM && hasNuxt) return 'both';
  if (hasLLM) return 'llm';
  if (hasNuxt) return 'nuxt';
  
  return defaultTopic;
};

export default defineEventHandler(async (event) => {
  try {
    // Get query parameters
    const query = getQuery(event);
    const topic = query.topic as string || 'all';
    const limit = parseInt(query.limit as string || '20');
    
    // Initialize RSS parser
    const parser = new Parser();
    let allArticles: Article[] = [];
    
    try {
      // Fetch articles from RSS feeds
      const fetchPromises = rssSources.map(async (source) => {
        try {
          const feed = await parser.parseURL(source.url);
          
          return feed.items.map(item => {
            const pubDate = item.pubDate || item.isoDate || new Date().toISOString();
            const determinedTopic = determineTopic(item, source.topic);
            
            return {
              title: item.title || 'Sans titre',
              link: item.link || '',
              pubDate,
              contentSnippet: item.contentSnippet || item.summary || '',
              categories: item.categories || [],
              source: source.source,
              sourceUrl: source.sourceUrl,
              imageUrl: item.enclosure?.url || extractImageUrl(item.content),
              topic: determinedTopic
            } as Article;
          });
        } catch (error) {
          console.error(`Error fetching from ${source.url}:`, error);
          return [];
        }
      });
      
      // Wait for all feeds to be fetched
      const articlesArrays = await Promise.all(fetchPromises);
      allArticles = articlesArrays.flat();
      
      // If no articles were fetched, use mock data as fallback
      if (allArticles.length === 0) {
        console.warn('No articles fetched from RSS feeds, using mock data');
        allArticles = [...mockArticles];
      }
    } catch (error) {
      console.error('Error fetching RSS feeds:', error);
      // Fallback to mock data
      allArticles = [...mockArticles];
    }
    
    // Sort articles by publication date (newest first)
    allArticles.sort((a, b) => 
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
    
    // Filter articles based on topic
    let filteredArticles = [...allArticles];
    
    if (topic !== 'all') {
      filteredArticles = filteredArticles.filter(article => 
        article.topic === topic || article.topic === 'both'
      );
    }
    
    // Limit the number of articles
    filteredArticles = filteredArticles.slice(0, limit);
    
    return {
      success: true,
      articles: filteredArticles,
    };
  } catch (error) {
    console.error('Error in articles API:', error);
    return {
      success: false,
      error: 'Failed to fetch articles',
    };
  }
});