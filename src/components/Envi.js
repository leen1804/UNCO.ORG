import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
padding:80px;
@media(max-width:400px){
    padding :40px;
}
@media (min-width: 1200px) {
        padding-left:revert-layer;
        padding-right:revert-layer;
    }
h1{
    @media (max-width: 900px) {
        font-size: 40px;
        font-weight:800px;

    }
    @media (min-width: 1200px) {
        padding:80px;
        padding-bottom:20px;
    }
   font-size: 54.64px;

font-weight: 500;

line-height: 79.8837px;

 color: rgb(0, 0, 0);
 margin-bottom:36px;
}
p{
    font-size: 24px;
    @media (min-width: 1200px) {
        padding-left:80px;
        padding-right:80px;
        padding-bottom:50px;
    }
font-weight: 200;
line-height: 36px;

color: rgb(0, 0, 0) ;
}
.below{
    display:flex;
    flex-direction:row;
   
    @media (max-width: 1025px) {
        flex-direction:column;  
    }

    img{
       

       
        @media (min-width: 1124px) {
            width:700px;
        height:500px;
           
        }
    } 
}
`;
const LineWithEllipse = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      background-color: #fff;
      width: 30px;
      height: 2px; /* Adjust the height of the line */
    }

    &::before {
      margin-right: 10px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #fff;
      position: relative;
    }

    &::after {
      margin-left: 10px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #fff;
      position: relative;
    }
  }
`;

function Envi() {
    return (
  <Wrapper>
    <h1>Environment Matters</h1>
    <p>Our goal is to create awe-inspiring learning environments where our students and young adults are encouraged to wonder, create & thrive.</p>
    <div className = 'below'>
        <img src = 'https://uncommon.org/wp-content/uploads/2021/08/KW-Container-for-Uncommon-site@2x.png' alt =''/>
        <LineWithEllipse />
        <img src = 'https://uncommon.org/wp-content/uploads/2021/08/KW-Container-for-Uncommon-site@2x.png' alt =''/>

    </div>
    </Wrapper>
  )
}

export default Envi