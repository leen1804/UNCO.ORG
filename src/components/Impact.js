import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
  margin-left:90px;}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 20px auto;
  margin-bottom:150px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
 
  max-width:3000px;
  margin: 0 auto; 
  
  
    @media (max-width: 667px) {
display:none;
    
  }
`;
const Containery = styled.div`
display :none;
 @media (max-width: 667px) {
display :flex;
margin-top:-84px;
 }

`
const Column = styled.div`
 
  margin-bottom: 20px; 
  padding: 0 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex: 1 0 1%;
  }

  @media (min-width: 1024px) {
    flex: 1 0 25%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 50%;
  @media (max-width: 700px) {
    max-width: 100%; 
  }
  @media (max-width: 667px) {
    max-width: 100%; 
  }
  margin-bottom: 10px; 
`;
const Heading = styled.h2`
  align-items: center;
  font-size:27.32px;
  a {
    color: #000000;
    text-decoration: underline;
    
  }
  color:black;
`;

const SocialMediaSection = () => {
  return (
    <Section>
      <Row>
        <Heading>
          <a href="https://uncommon.org/index.php/get-involved/#mentorship">Join</a> Our Community Of Mentors From Companies All Over The World.
        </Heading>
      </Row>
      <Container>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/google_PNG102344.png" alt="Google Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/Pinterest-Logo.png" alt="Pinterest Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/pngfind.com-amazon-png-565024.png" alt="Amazon Logo" />
        </Column>
        <Column >
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/Facebook-Logo.png" alt="Facebook Logo" />
        </Column>
      </Container>
      <Container className ='zue'>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/suzy_logo_with_TM-1.png" alt="Suzy Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/Morgan-Stanley-Logo.png" alt="Morgan Stanley Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/YouTube-Logo-PNG7-480x270.png" alt="YouTube Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/ROI-logo-1-1280x307.png" alt="ROI Training Logo" />
        </Column>
      </Container>
      <Container  className ='zue'>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/pngwing.com-2-1280x272.png" alt="Google Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/Instagram-Logo-1-980x613.png" alt="Instagram Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/LinkedIn_Logo_2019.png" alt="LinkedIn Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/CP_WORDMARK_COLOUR_RGB_HR.png" alt="CP Logo" />
        </Column>
      </Container>
      <Containery >
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/pngwing.com-2-1280x272.png" alt="Google Logo" />
        </Column>
        <Column>
          <Image src="https://uncommon.org/wp-content/uploads/2021/09/Instagram-Logo-1-980x613.png" alt="Instagram Logo" />
        </Column>
        
      </Containery>
    </Section>
  );
};

export default SocialMediaSection;
