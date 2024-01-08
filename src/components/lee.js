import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsArticle = () => {
  const { title } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your News API key
        const apiKey = '6ee29b00a54742b2a536b36303052b30';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );

        // Find the article with the matching title
        const selectedArticle = response.data.articles.find(
          (article) => encodeURIComponent(article.title) === title
        );

        setArticle(selectedArticle);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [title]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const { urlToImage,  description, author, publishedAt, content } = article;

  return (
    <div>
      <img src={urlToImage} alt={title} style={{ maxWidth: '100%' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>By {author} | {publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default NewsArticle;
