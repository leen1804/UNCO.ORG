import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display:flex;
flex-direction:row;

padding :150px;

@media(max-width:900px){
    display:block;
    padding :80px;
}
@media(max-width:400px){
    padding :20px;
}

.left{
    padding-right:80px;
    @media(max-width:900px){
        padding-right:0px;
    }
    p{
       font-size: 20px;
       margin-bottom:20px;
font-weight: 200;

line-height: 37.23px;

color: rgb(0, 0, 0);
    }
    h1{
        font-size: 65px;
        @media(max-width:900px){
            font-size: 53px;
        }
        @media(min-width:1200px){
            margin-bottom:30px;   
        }

font-weight: 700;

line-height: 95.03px;

color: rgb(0, 0, 0);
&:last-of-type::after {
    content: "";
    height: 10px;
    background: #4A5AF9;
    width: 37%;
    display: block;
    position: relative;
    top: -16px;
    z-index: -8;
    @media (max-width: 1024px) {
      top: -13px; 
      width: 39%;
    }
    @media (min-width: 1200px) {
        width: 85%;
    }
  }
    }
    .zz{
        font-size: 35px;

font-weight: 300;

line-height: 43.435px;

color: rgb(51, 51, 51) ;  
    }
    h2{
        font-size: 50.64px;

font-weight: 700;

line-height: 79.8837px;

 color: rgb(0, 0, 0) ;
 @media(min-width:1200px){
    margin-bottom:50px;

 margin-top:-90px;
 }
 
    }
    hr{
        margin-top:20px;
        margin-bottom:40px;
    }
}
.right{
    img{
        
        width:550px;
        height:400px;
        @media(max-width:669px){
            width:509px;
        }
        @media(max-width:400px){
            width:330px;
        height:200px;  
        }
        
    } 
}
a{
    font-size:25px;
    font-weight:50px;
   
}
`;

function Recent() {
    return (
  <Wrapper>
    <div className = ' left'>


<h1>Nicki Keszler</h1>
<p><span></span></p>
<p className='zz'>Innovation Hub</p>
<p>Nedbank has been the ultimate corporate sponsor and we have loved working with their team.</p>
<hr/>
<a>Read More</a>
    </div>
    <div className = 'right'>
    <img  className = 'gray'src = 'https://uncommon.org/wp-content/uploads/2021/09/hub.png'/>
    </div>
    </Wrapper>
  )
}

export default Recent