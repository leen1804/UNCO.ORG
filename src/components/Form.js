import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
text-align: center;
padding:90px;
@media(max-width:900px){
    padding:20px;   
    }
p{
    font-size: 26px;

font-weight: 500;

line-height: 41.7996px;

 color: rgb(0, 0, 0);
}
.Form{
    padding-left:150px;
    @media(max-width:900px){
        padding-left:20px;
    }
    margin-top:40px;
}
`;

const Input = styled.textarea`
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  width:430px;
  border-radius:5px;
  background-color: #f8f8f8;
 
`;
const MessageInput = styled.textarea`
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  width:929.9px;
  background-color: #f9f9f9;
  height: 120px;
`;const InputGroup = styled.div`
display: flex;
margin-bottom: 10px;
gap:20px;

`;
const Button = styled.button`
  padding: 15px 25px;
  background-color: #4A5AF9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size:25px;
  float:right;
  margin-left:20px;
  
`;

function Form() {
    return (
  <Wrapper>
    <p>Building and / or sponsoring an Innovation Hub is a major endeavor. If you’re interested, </p>
    <p>please drop us a note and we’ll get back to you within 48 hrs.</p>
    <p>Thank You!</p>
    <div className = ' Form  action="https://formsubmit.co/ruvarashemutitieillen@gmail.com" method="POST"'>
    <InputGroup > 
    <Input type="text" placeholder=" Name" />
    <Input type="text" placeholder="  Last Name" />
    </InputGroup>
    <InputGroup>
          <Input type="email" placeholder="Email Adress" />
          <Input type="email" placeholder="Phone Number" />
          </InputGroup>
          <InputGroup>
          <Input type="email" placeholder="Title" />
          <Input type="email" placeholder="Company" />
         
          </InputGroup>
          <InputGroup>
          <MessageInput placeholder="Message" />
          </InputGroup>
          <InputGroup>
          <Button type="submit">Submit</Button>
          </InputGroup>
    </div>
    </Wrapper>
  )
}

export default Form