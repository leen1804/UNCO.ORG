// NewsArticle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  padding: 100px;
  
`;

const AuthorInfo = styled.p`
  margin-top: 20px;
`;

const ArticleHeading = styled.h1`
  margin-top: 20px;
`;

const MainImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;

const MainParagraph = styled.p`
  margin-top: 20px;
`;

const SecondaryImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;

const SecondaryParagraph = styled.p`
  margin-top: 20px;
  font-size: 22px;

font-weight: 400;

line-height: 39.6px;

color: rgb(0, 0, 0);
`;
const FormContainer = styled.div`
  margin-top: 30px;
`;

const FormHeading = styled.h2`
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
`;
const InputGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  
`;

const Input = styled.input`
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  background:#EEEEEE;
  color:black;
  @media (max-width: 400px) {
    padding-right:5px;
   
  }
`;

const Button = styled.button`
  padding: 10px 145px;
  background-color: #4A5AF9;
  color: white;
  border: none;
  
  cursor: pointer;
  @media (max-width: 1024px) { padding: 10px 112px;}
  @media (max-width: 400px) {
    padding: 10px 42px;
  }
  @media (min-width: 1200px){
    padding: 10px 240px;  
  }
`;
const NewsArticle = () => {
  const { title: articleTitle } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '6ee29b00a54742b2a536b36303052b30'; // Replace with your News API key
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&q=${encodeURIComponent(
            articleTitle
          )}`
        );

        // Assuming there's only one article with the specified title
        const selectedArticle = response.data.articles[0];
        setArticle(selectedArticle);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [articleTitle]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const { author, title, urlToImage, description, content } = article;

  return (
    <ArticleContainer>
      <AuthorInfo>By {author}</AuthorInfo>
      <ArticleHeading>{title}</ArticleHeading>
      {urlToImage && <MainImage src={urlToImage} alt={title} />}
      <MainParagraph>{description}</MainParagraph>
      <h2>below shows </h2>
      {urlToImage &&<SecondaryImage src={urlToImage} alt={title} />}
      <SecondaryParagraph>In February we had 1,502 students in enrolled in our free, after school coding program – a 3x increase from January.

These students are receiving two, 75 minute classes per week for a three month school term, where they’re learning how to build their own computer games. 

Recently, one of our instructors, Dylan, had this to say about the Youth Coding program,

“When we invest in our youth, we invest in our future. By teaching them the latest tech skills, we are creating a generation that is better equipped to face the challenges of the future. It’s not just about coding, it’s about creating a culture of innovation and progress.”

We can’t wait to bring coding into more classrooms this year!</SecondaryParagraph>
      <FormContainer>
      <FormHeading>Stay up to date with the latest from Uncommon.org</FormHeading>
      <Form action="https://formsubmit.co/ruvarashemutitieillen@gmail.com" method="POST" >
      <InputGroup>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </InputGroup>
            <InputGroup>
              <Input type="email" placeholder="Email" />
              <Button type="submit">Submit</Button>
            </InputGroup> 
      </Form>
    </FormContainer>
    
    </ArticleContainer>
  );
};

export default NewsArticle;
