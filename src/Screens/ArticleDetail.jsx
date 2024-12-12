import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ArticleDetail() {
  const { id } = useParams();  // Get the article index from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const apiKey = "3491be2eb532496f9245de852f1e56ab";  // Replace with your NewsAPI key
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const selectedArticle = data.articles[id];  // Use the ID to get the specific article
        setArticle(selectedArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);  // Refetch when the article ID changes

  if (!article) {
    return <p>Loading...</p>;  // Show loading until the article is fetched
  }

  return (
    <div className='p-4 mt-[5rem]'>
      <h1 className='text-4xl font-bold'>{article.title}</h1>
      <img className='h-80 w-full object-cover mt-4 rounded-md' src={article.urlToImage} alt={article.title} />
      <p className='mt-4 text-lg'>{article.content || article.description}</p>  {/* Show full content if available */}
      <a href={article.url} target='_blank' className='text-blue-500 hover:underline mt-4 inline-block'>
        Full Article
      </a>
    </div>
  );
}
