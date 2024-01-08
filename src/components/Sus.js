import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #ffff;
  padding: 40px 90px;
  @media(min-width:1130px){
    padding-left:115px; 
  }
  @media(max-width:400px){
    padding: 20px 30px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1 0 100%;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const Heading2 = styled.h2`
  font-size: 68.3px;
  font-weight: 700;
  line-height: 99.8546px;
  color: rgb(0, 0, 0);

  @media (max-width: 700px) {
    font-size: 41.3px;
  }
`;

const Heading3 = styled.h3`
  font-size: 47.81px;
  font-weight: 500;
  line-height: 81.277px;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 24.588px;
  font-weight: 200;
  line-height: 42.0455px;
  color: rgb(0, 0, 0);
`;

const StyledSection = () => {
  return (
    <Section>
      <Row>
        <Column>
          <Heading2>Sustainability</Heading2>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading3>Business Model</Heading3>
          <Paragraph>
            For nonprofits, sustainability is everything. As a team of entrepreneurs & out-of-the-box thinkers,
            we have challenged ourselves to come up with creative ways to make an impact sustainably and at scale.
          </Paragraph>
        </Column>
      </Row>
    </Section>
  );
};

export default StyledSection;
