import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
display:flex;
flex-direction:row;
background-color: #f2f3ff;
padding :80px;
@media(max-width:400px){
    padding :40px;
}
@media(max-width:900px){
    flex-direction:column;
}

.left{
    padding-right:100px;
    @media(max-width:900px){
        padding-right:20px; 
    }
    p{
       font-size:29px;

font-weight: 500;

line-height: 37.23px;

color: rgb(0, 0, 0);
    }
    h1{
        font-size: 65px;
        @media(max-width:900px){
            font-size: 44px;
            line-height: 70px;
        }

font-weight: 700;

line-height: 95.03px;

color: rgb(0, 0, 0);
    }
    .leen{
    font-size:22px;
padding-top:20px;
font-weight: 200;
  }
}
.right{
    video{
        border-radius: 20px; 
        @media(max-width:900px){
            width:270;
        }
        @media(max-width:1024px){
       width:300px; 
       height:200px;
    } 
}
}
.videoyacho {
    position: relative;
    margin-top: 20px;
    @media(min-width:1438px){
          margin-top: 55px;
    }
  }

  .videochacho {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }
  
`;

function Grass() {
    return (
  <Wrapper>
    <div className = ' left'>
<p>Grassroots Approach</p>
<h1>Invest in</h1>
<h1>community.</h1>
<p className ='leen'>We bring education, equipment and infrastructure to the communities we serve to eliminate the barriers our students may face.</p>
    </div>
    <div className = 'right'>
    <div className="videoyacho">
    <div className="videochacho">
    <video width="660" height= '350' controls>
      <source src="https://uncommon.org/wp-content/uploads/2021/09/Innovation-Hub-Video-Thumbnail-e1632265198479.png" type="video/mp4"/>
      
    </video>
    </div>
    </div> 
    </div>
    </Wrapper>
  )
}

export default Grass