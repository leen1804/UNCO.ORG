import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #fff; 
  padding: 40px 18px;
  @media (max-width: 400px) {
    padding: 40px 25px;
  }

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
`;

const TextContainer = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Heading = styled.h2`
 
font-size: 54.64px;

font-weight: 500;

line-height: 103.816px;

color: rgb(0, 0, 0);
  margin-bottom: 10px;
  @media (max-width: 400px) {
    font-size: 44px;
    line-height: 55px;
  }
`;

const Description = styled.p`
  font-size: 25px;

font-weight: 200;

line-height: 49px;

color: rgb(0, 0, 0);
  margin-bottom: 20px;
`;

const MentorsSection = () => {
  return (
    <Section>
      <Row>
        <Column>
          <TextContainer>
            <Heading>Mentors Change Lives.</Heading>
            <Description>
              When our Bootcamp students pick their track for specialization, they’re matched with industry  <br/>professionals for one-on-one Mentorship.
            </Description>
          </TextContainer>
        </Column>
      </Row>
    </Section>
  );
};

export default MentorsSection;

