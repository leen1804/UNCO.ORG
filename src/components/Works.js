import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #fffff;
  padding: 39px 0;
  padding-left:px;
  @media (max-width:1024px){
    padding-left:30px;
  }
`;

const Row = styled.div`
  
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
  margin-bottom: 40px; 
`;

const Title = styled.h2`
 font-size: 54.64px;

font-weight: 700;

line-height: 79.8837px;

color: rgb(0, 0, 0);
margin-top:45px;
  margin-bottom: 20px;
`;

const ContentModule = styled.div`
  text-align: left;

  hr {
    margin-top: 20px;
   
  }
`;

const SubTitle = styled.h3`
  
font-size: 40.98px;

font-weight: 400;

line-height: 59.666px;

color: rgb(0, 0, 0);
margin-bottom:9px;
`;

const Description = styled.p`
  font-size: 25px;

font-weight: 200;

line-height: 42.75px;

color: rgb(0, 0, 0);
`;

const HoverText = styled.span`
  color: #000;
`;

const HowItWorksSection = () => {
  return (
    <Section>
      <Row>
        <Column>
          <ContentModule>
            <Title>How It Works</Title>
          </ContentModule>
        </Column>
        <Column>
          <ContentModule>
            <SubTitle>Innovation Hubs</SubTitle>
            <Description>We make long-term investments in our target communities by building innovative, <br/> sustainable workspaces to run our free education programs.</Description>
            <hr />
          </ContentModule>
        </Column>
        <Column>
          <ContentModule>
            <SubTitle>Workforce Development</SubTitle>
            <Description>
              <HoverText>Our Technology Bootcamp is for unemployed young adults. Students take crash courses  <br/> in Design, Coding, and Marketing before picking a track to specialize in.</HoverText>
            </Description>
            <hr />
          </ContentModule>
        </Column>
        <Column>
          <ContentModule>
            <SubTitle>Youth Coding</SubTitle>
            <Description>
              <HoverText>In addition to learning, our Bootcamp Students volunteer their time, teaching free, after-  <br/>school coding lessons to local primary & secondary students.</HoverText>
            </Description>
            <hr />
          </ContentModule>
        </Column>
      </Row>
    </Section>
  );
};

export default HowItWorksSection;
