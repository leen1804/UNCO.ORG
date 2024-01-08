import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: rgb(74, 90, 249); 
width:100%;
    height:100vh;
    color:white;
    display: flex;
  justify-content: center;
  align-items:center;
  text-align:center;
  .text{
    h1{
        font-size: 60px;

font-weight: 700;

line-height: 102px;

color: rgb(255, 255, 255);
    }
p{
        font-size: 30px;

font-weight: 100;

line-height: 54px;

color: rgb(255, 255, 255);
    }
  }

`;
const OurStory = () => {
  return (
    <Wrapper>
        <div className = 'text'>
            <h1>Becoming Uncommon</h1> 
            <p>how we started, what we believe, and why</p>
        </div>
    
  </Wrapper>
  )
}
export default OurStory;