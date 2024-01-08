import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Wrapper = styled.div`
margin-top:80px;
padding-left:90px;
padding-right:90px;
@media(max-width:450px){
    padding-left:1px; 
    padding-right:1px; 
         
      }
      @media(max-width:768px){
        padding-left:4px; 
    padding-right:20px; 
      }
   .container::after {
      content: "";
      display: table;
      clear: both;
      
    }

    .box {
       
      width: 40%; 
      float: left;
      margin: 10px; 
    
      padding: 20px; 
      box-sizing: border-box;
      @media(max-width:970px){
        width: 100%;    
      }
      button{margin-top:20px;
        display: inline-block;
    padding: 10px 20px;
    background-color: blue;
    color: white;
    font-size:20px;
    text-decoration: none;
    border: 2px solid transparent;
    transition: background-color 0.3s, border-color 0.3s, opacity 0.3s;
    border-radius:5px;
    &:hover {
      background-color: transparent;
      border-color: blue;
      color:blue;
      opacity: 0.7;
    }
}
      p{
        padding-top:20px;
        font-size: 20.222px;
font-weight: 200;

line-height: 30.9418px;

color: rgb(0, 0, 0);

@media(max-width:1020px){
    font-size: 15.222px;  
}
      }
      h1{
        font-size: 47.81px;

font-weight: 700;

line-height: 69.8982px;

font-color: rgb(0, 0, 0);
      }
      @media(max-width:1038px){
       
    }
    @media(max-width:700px){
        width:95%;
    }
    }
    .leen{  
        position:relative;
        
      float: left;
      margin: 10px; 
   
      padding: 20px; 
      box-sizing: border-box;
    
   img{
    max-width:250px;
   }
.se{
   
   
}
@media(max-width:1038px){
        width: 35%;
    }}
.zse{
    float: right;
    margin-right:100px;
}
.boxy{
    width: 20%; 
    float: left; 
    margin-left:20px;
    line-height: 35.3408px;
    margin-top:40px;
    
    @media(max-width:1038px){
        width: 100%;
    }
     
   
    img{
    max-width:250px;
   }    
       
   @media(max-width:1005px){ 
    display:none;
   }
}
`;


const StyledSection = () => {
  return (
    <Wrapper>
         
<div class="container">
  <div class="box">
 
    <h1>Hub Sponsorship</h1>
    <p>We brand our Innovation Hubs for corporate partners, boosting their brand awareness, customer loyalty & employee engagement..</p>
    <NavLink className="nav-link" to="/OurStory" exact>

    <button href="" data-trigger-click="donate">Learn More</button></NavLink>
  </div>

  <div class="leen">
  
  
  <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/08/hubs2@2x.png'/>

    
  </div>

  <div class="boxy">
  
  <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/08/hubs@2x.png'/>
    
  </div>
</div>

    </Wrapper>
  ); 
};
export default StyledSection;
