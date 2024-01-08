import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #f9f9f9; /* Set your desired background color */
  padding: 40px 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: ${(props) => props.flex || '1'};
  padding-left: ${(props) => props.paddingLeft || '0'};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: ${(props) => props.maxWidth || '100%'};
`;

const Heading = styled.h2`
  color: #000000;
`;

const SubHeading = styled.h3`
  color: #000000;
`;

const Description = styled.p`
  color: #000000;
`;



const PromoDescription = styled.div`
  h2 {
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
`;

const Button = styled.a`
  color: #ffffff;
  background-color: #000000;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
`;





const StyledComponentExample = () => {
  return (
    <Section>
      <Row>
      
          <Heading>Sustainability</Heading>
          <SubHeading>Business Model</SubHeading>
          <Description>
            For nonprofits, sustainability is everything. As a team of entrepreneurs & out-of-the-box thinkers, we have challenged ourselves to come up with creative ways to make impact sustainably and at scale.
          </Description>
        
      </Row>
      
    </Section>
  );
};

export default StyledComponentExample;
