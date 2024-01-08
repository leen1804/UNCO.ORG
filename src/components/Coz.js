import React from 'react';
import styled from 'styled-components';


const Section = styled.div`
 
  background-color: rgb(74, 90, 249);
  padding: 20px;
`;

const Row = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = styled.div`
color: rgb(74, 90, 249);
  width: 100%;
  @media (min-width: 768px) {
    width: calc(33.333% - 20px);
    margin-right: 20px;
  }
`;

const Image = styled.img`

  width: 100%;
  height: auto;
`;

const Text = styled.p`

  font-size: 16px;
  line-height: 1.5;
  color: rgb(74, 90, 249);
`;

const SocialLinks = styled.div`
  /* Add your social links styles here */
  margin-top: 20px;

  a {
    color: white;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewsletterForm = styled.form`
 
  margin-top: 20px;
`;


const StyledSection = () => {
  return (
    <Section id="engage">
      <Row className="et_pb_row et_pb_row_14">
        <Column className="et_pb_column et_pb_column_4_4 et_pb_column_32 et_pb_css_mix_blend_mode_passthrough et-last-child">
        <h1>Stay Engaged</h1>
        </Column>
      </Row>
     
    </Section>
  );
};

export default StyledSection;
