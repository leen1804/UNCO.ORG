import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Wrapper = styled.div`
margin-top:80px;
padding-left:90px;
padding-right:90px;
@media(max-width:768px){
    padding-left:20px; 
    padding-right:20px; 
         
      }
      @media(max-width:768px){
        padding-left:1px; 
    padding-right:1px; 
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
      @media(max-width:400px){
        width: 100%;   
         
      }
      padding: 20px; 
      box-sizing: border-box;
      @media(max-width:970px){
        width: 80%;    
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

color: rgb(0, 0, 0);
      }
      @media(max-width:1038px){
       
    }
    @media(max-width:700px){
        width: 91%;   
    }
    }
    .leen{  
        position:relative;
        
      float: left;
      margin: 10px; 
   
      padding: 20px; 
      box-sizing: border-box;
    .gray{
        position: absolute;
    z-index: 3;
    
    right: -60px;
    bottom: -48px;
    }
    .green-box {
    position: absolute;
    z-index: 1;
    border-radius: 4px;
    height: 175px;
    margin-top: -245px;
    background: blue;
    width: 190px;
    display: block;
    @media(max-width:734px){
      background:white;
    }
  }
.se{
   
   
}
@media(max-width:1038px){
        width: 35%;
    }
    @media(max-width:700px){
        width: 79%;   
    }}
.zse{
    float: right;
    margin-right:100px;
    @media(max-width:400px){
      margin-right:64px;
    }
}
.boxy{
    width: 20%; 
    float: left; 
    margin-left:20px;
    

    margin-top:20px;
    h2{
      font-size: 21.856px;
      line-height: 39.8982px;
    }
    @media(max-width:1038px){
        width: 100%;
    }
     
    @media(max-width:768px){
        width: 91%;   
    }
       
       
      
}
`;


const StyledSection = () => {
  return (
    <Wrapper>
         
 <div class="container">
  <div class="box">
 
    <h1>Hire Uncommon</h1>
    <p>We design, develop and market web products for clients all over the world and use the profits to help fund our education mission.</p>
    <NavLink className="nav-link" to="/HireUs" exact>
<button href="" data-trigger-click="donate">See Portfolio</button> </NavLink>

  </div> 

  <div class="leen">
  
  
    <img  className = 'gray'src = 'https://uncommon.org/wp-content/uploads/2021/09/Group-23.png'/>
    <div ><img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/08/natas@2x.png'/></div>
    
  </div>

    <div class="boxy">
  
    <h2>The Uncommon team was professional, responsive and went above and beyond to deliver.</h2>
    
  </div>  
</div> 
<p className= 'zse'>– Natasha Chadenga, CEO, DaaS Africa</p>
    </Wrapper>
  ); 
};
export default StyledSection;
