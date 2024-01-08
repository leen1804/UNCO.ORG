import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #f2f3ff;
  @media (max-width: 700px) {
display:block;
background: #fff;}
  
  justify-content: center;
  display: flex;
  align-items: center;
 
   
  
`;
const Container1 = styled.div`
@media (min-width: 735px) {
display:none;
}
background: #fff;
  padding: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
img{
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
}
.TextContainer{
  margin-top: 20px;
}
h1{font-size:19px; margin-bottom:30px;}
`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  margin: 100px;
  background: white;
  padding: 60px;
  width: 80%;  

  @media (max-width: 900px) {
    flex-direction: column; 
  }
  @media (max-width: 700px) {
display:none;
}
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  @media (max-width: 900px) {
    width: 49%; 
  }
  .blue-box {
    position: absolute;
    z-index: 3;
    background: white;
    height: 150px;
    width: 75%;
    left: 50px;
    top: 50px;

    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
      max-width: 500px;
      border-bottom: 10px solid white;
      @media (max-width: 768px) {
        width: 103%; 
      }
    }

    @media (max-width: 734px) {
      left: 62px;
      top: -63px;
      
       
    }
  }

  .gray-box {
    position: absolute;
    z-index: 3;
    height: 60px;
    width: 70%;
    right: -60px;
    bottom: 30px;

    img {
      width: 100%;
      height: auto;
      max-width: 150px;
      @media (max-width: 900px) {
        max-width: 114px;  
      }
    }

    @media (max-width: 734px) {
      right: -141px;
    }
  }

  .green-box {
    position: relative;
    z-index: 1;
    border-radius: 4px;
    height: 175px;
    margin: 30px;
    background: blue;
    width: 190px;
    display: block;
    @media (max-width: 900px) {
      height: 171px;  
      width: 185px;
    }
    @media (max-width: 734px) {
      background: none; 
    }
  }
`;

const TextContainer = styled.div`
  flex: 3;
  padding-left: 90px;

  @media (max-width: 768px) {
    padding-left: 8px;
    width: 100%; 
  }
`;

const Heading = styled.h4`
  font-size: 27.32px;
  margin-bottom: 5px;
  line-height:40.98px;
  @media (min-width: 1200px) {
    margin-bottom: 1px;
  }
  color: black;
`;

const Paragraph = styled.p`
  margin-top: 30px;
  @media (min-width: 1200px) {
    margin-top: 1px;  
  }
  
  font-size: 17.32px;
  color: #555;
`;

const StyledComponentSection = () => {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <div class="container">
            <div class="blue-box">
              {' '}
              <img
                src="https://uncommon.org/wp-content/uploads/2021/10/Profile_Rasa-Lazarevic.jpeg"
                alt="Mentor Image"
              />
            </div>
            <div class="gray-box">
              {' '}
              <img
                src="https://uncommon.org/wp-content/uploads/2021/09/Group-25.png"
                alt="Group Image"
              />
            </div>
            <div class="green-box"></div>
          </div>
        </ImageContainer>
        <TextContainer>
          <div>
            <Heading>
              Becoming a Mentor at Uncommon has <br /> been an extraordinary
              experience. It’s <br /> been a privilege to watch Walter grow <br />
              from novice to world-class designer.
            </Heading>
            <Paragraph>
              – Rasa Lavarevic, Sr. UX/UI Designer, Autodesk
            </Paragraph>
          </div>
        </TextContainer>
      </Container>
      <Container1>
      <div >
       <div> <img  src="https://uncommon.org/wp-content/uploads/2021/10/Profile_Rasa-Lazarevic.jpeg"
               /></div>
        <div className = 'TextContainer'>
          <h1>Becoming a Mentor at Uncommon has been an extraordinary
              experience. It’s  been a privilege to watch Walter grow 
              from novice to world-class designer.</h1>
        <p>
        – Rasa Lavarevic, Sr. UX/UI Designer, Autodesk
            </p>
        </div>
      </div>
      </Container1>
    </Section>
  );
};

export default StyledComponentSection;
