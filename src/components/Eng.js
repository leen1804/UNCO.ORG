import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/img/insa1.png';
import image2 from '../assets/img/Smart Watches for Sale Instagram Post.png';
import image3 from '../assets/img/insa1.png';
import image4 from '../assets/img/Smart Watches for Sale Instagram Post.png';
import { NavLink } from 'react-router-dom';

const Wrapper  = styled.section`
margin-top:30px;
@media (min-width: 1200px) {
  padding-top:90px;
}
text-align:center;
h1{font-size: 54.64px;
  @media (max-width: 400px) {
    font-size: 39.64px;
  }
font-weight: 800;

line-height: 0px;

color: rgb(0, 0, 0);
@media (max-width: 769px) {
padding-bottom:20px;
}}

.holder{
  display:flex;
flex-direction:row;
padding:70px;
padding-left:150px;
 @media (max-width: 400px) {
  flex-direction: column;
 
}
@media (max-width: 769px) {
  padding:20px;
padding-left:20px;
}
}

.left{
    padding-right:60px;
    @media (max-width: 769px) {
      width:300px;

    }
    @media (max-width: 400px) {
      padding-right:1px;
    }
    img{
        width:325px;
        border-radius:20px;
        @media (min-width: 1200px) {
          height:65vh;
        }
        @media (max-width: 769px) {
      width:100%;
    }
    }
}
.center{
    display: flex;
  margin-bottom: 20px;
  margin-top:30px;
  @media (min-width: 1200px) {
    margin-left:15px;
  }
  p{
font-weight:500;
font-size:18px;
@media (min-width: 1200px) {
  padding:0 2px;
}
  }
}
.top{
    @media (max-width: 900px) {
        display:flex;
    }
   .dis { 
    @media (min-width: 10240px) {
      display:none; 
      
    }
    @media (max-width: 900px) {
     display:none; 
    
    }
}
    img{
        @media (max-width: 900px) {
            height:148.609px;
        }
        height:159.609px;
        border-radius: 15px;
        padding-left:10px;
        padding-right:10px;
        opacity:1;


        
       
    }
    img:hover {
  opacity: 0.2;
}

}
.bottom{
  text-align:left;
   h1{ margin-bottom: 40px;
  margin-top:30px;
  font-weight:400px;
  font-size:28px;
  @media (min-width: 1200px) {
    margin-bottom: 50px;
    margin-top:60px;
  }
  @media (max-width: 400px) {
    font-size:19px;
  }
}
  @media (max-width: 400px) {
    width:300px;
  }
}.right{
  @media (min-width: 10240px) {
    width:500px;
  }
}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align:left;
`;

const InputGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  
`;

const Input = styled.input`
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  background:#EEEEEE;
  color:black;
  @media (max-width: 400px) {
    padding-right:5px;
  }
`;

const Button = styled.button`
  padding: 10px 145px;
  background-color: #4A5AF9;
  color: white;
  border: none;
  
  cursor: pointer;
  @media (max-width: 1024px) { padding: 10px 112px;}
  @media (max-width: 400px) {
    padding: 10px 42px;
  }
  @media (min-width: 1200px){
    padding: 10px 160px;  
  }
`;
function Eng() {
  return (
<Wrapper>
  <h1>Stay Engaged</h1>
  <div className = 'holder'>
<div className = 'left' >
<img src ="https://uncommon.org/wp-content/uploads/2021/09/all-clack-uncommon-shirt.png" alt="Left Image" />
</div>
<div className = 'right'>
<div className = 'top'>
<a href = 'https://www.instagram.com/p/C03ZEPLtNlj/'><img src = {image1}/></a>
<a href ='https://www.instagram.com/p/C01eLLLt0eK/'> <img  className = 'dis'src =  {image2} /></a>
 <a href ='https://www.instagram.com/p/C01eLLLt0eK/'><img  className = 'dis'src =  {image3} /></a>
<a href ='https://www.instagram.com/p/C01eLLLt0eK/'><img src = {image4} /></a>
</div>
<div className = 'center'>
<p> Instagram </p>
<p>| LinkedIn | </p>
<NavLink to="/Blog">Blog</NavLink>
</div>
<div className ='bottom'>
    <h1>Sign Up For Our Mailing List</h1>
    <Form action="https://formsubmit.co/ruvarashemutitieillen@gmail.com" method="POST" >
    <InputGroup>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </InputGroup>
            <InputGroup>
              <Input type="email" placeholder="Email" />
              <Button type="submit">Submit</Button>
            </InputGroup> 
    </Form>
</div>
</div>
</div>
</Wrapper>
  )
}

export default Eng
