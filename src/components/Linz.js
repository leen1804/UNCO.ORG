// NewsBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ArticleContainer = styled.div`
  padding: 100px;
  h1{
    padding-bottom :30px; 

  }
  .zet{
    color:black;
   
  }
  p{
    padding-top:20px;
    color:black;
    padding-bottom:20px
  }
  hr{
    margin-bottom:50px;
  }
`;
const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const apiKey = '6ee29b00a54742b2a536b36303052b30';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ArticleContainer>
    <div>
      <h1>All Posts</h1>
      {articles.map((article) => (
        <div key={article.title}>
          <h3>
            <Link  className='zet'to={`/article/${encodeURIComponent(article.title)}`}>
              {article.title}
            </Link>
          </h3>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </div>
    </ArticleContainer>
  );
};

export default Blog;
