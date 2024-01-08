import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column-reverse; 
  justify-content: space-between;
 height:90vh;
  
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const LeftDiv = styled.div`
 
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 20px;
  
    padding-top:60px;
  padding-left:10px;
`;

const LeftItem = styled.div`
  margin-bottom: 20px; 
  display: flex;
  flex-direction: column;
  padding-left:40px;
  padding-right:45px;
  @media (max-width: 768px) {
    padding-left:1px;
  padding-right:1px;
  }
  h4{
    margin-bottom:40px;
    
     }
    h3{
      margin-bottom:8px;
      
    }
  a{ 
   margin-top:10px;
    color:rgb(0, 0, 0);
    @media (min-width: 1200px) {
        font-size:18px;
        font-weight:200;
      }
  }
`;

const RightDiv = styled.div`
  flex: 1;
  background: #F2F3FF;
  padding: 20px;
  box-sizing: border-box; 
  @media (min-width: 1200px) {
    padding:0 60px;
  }
 
    
  
`;

const FormHeader = styled.h2`
 font-size: 35px;

font-weight: 700;

line-height: 59.5px;

color: rgb(0, 0, 0);
margin-bottom:40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color:black;
  @media (min-width: 1200px) {
    padding-top:40px;
  }
`;


const Input = styled.textarea`
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  &::placeholder {
    color: black;
    font-size: 16px; 
    font-weight: 200; 
  }
 
`;
const MessageInput = styled.textarea`
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  height: 100px;
  @media (min-width: 1200px) {
    height: 130px;
  }
  &::placeholder {
    color: black;
    font-size: 16px; 
    font-weight: 200; 
  }
`;
const SubmitButton = styled.button`
  padding: 10px 0;
  background-color: #4A5AF9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:200px;
  @media (min-width: 1200px) {
    margin-left:460px;
    width:100px;
    padding: 12px 10px;
    font-size:18px;
    margin-top:5px;
  }
  
`;

const CopyrightText = styled.p`
  margin-top: 20px;
  float: right;
  font-weight:500;
  @media (min-width: 1200px) {
    margin-top:80px;
    margin-right:80px;
    font-size: 18px;

font-weight: 500;

line-height: 41.7996px;

color: rgb(0, 0, 0);
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <LeftDiv>
        <LeftItem>
          <h3>Make a</h3>
          <h4> Donation</h4>
          <a href="#">monthly donors</a>
          <a href="#">suport a studnt</a>
          <a href="#">general</a>
        </LeftItem>
        <LeftItem>
          <h3>Get </h3>
          <h4> Involved</h4>
          <a href="#">build / sponsor</a>
          <a href="#">hire uncommon</a>
          <a href="#">donat hardware</a>
        </LeftItem>
        <LeftItem>
          <h3>Volunteer</h3>
          <h4>Opportunities</h4>
          <a href="#">mentorship</a>
          <a href="#">host a dinner</a>
          <a href="#">ambassadors

</a>
        </LeftItem>
        <LeftItem>
          <h3>Uncommon </h3>
          <h4>Notes</h4>
          <a href="#">blog</a>
          <a href="#">our story</a>
       
        </LeftItem>
        <LeftItem>
          <h3>Contact</h3>
          <h4>Us</h4>
          <a href="#">general</a>
          <a href="#">for dev work</a>
       
        </LeftItem>
        <LeftItem>
          <h3>Annual </h3>
          <h4>Reports</h4>
          <a href="#">2019</a>
          <a href="#">2020</a>
          <a href="#">2021</a>
        </LeftItem>
      </LeftDiv>
      <RightDiv>
        <Form action="https://formsubmit.co/ruvarashemutitieillen@gmail.com" method="POST" >
          <FormHeader>Get In Touch</FormHeader>
          <Input type="text" placeholder=" Name" />
          <Input type="email" placeholder="Email Adress" />
          <MessageInput placeholder="Message" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <CopyrightText>copyright 2023 | all rights reserved | uncommon.org</CopyrightText>
      </RightDiv>
    </FooterSection>
  );
};

export default Footer;
