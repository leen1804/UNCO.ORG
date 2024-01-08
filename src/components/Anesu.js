import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/img/natas@2x.png'
const Wrapper  = styled.section`
display :flex;
gap:60px;
padding:90px;
@media(max-width:400px){
    padding :40px;
}
@media(max-width:900px){
    flex-direction:column;
}
.Anesu{
    height:40vh;
    background-image: url(${image1});
    background-size: cover;
  background-position: center;
 
        @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    width:400px;
   
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }

}
.Anesu h1,
.Anesu p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Anesu:hover{
    opacity:0.3;
}
.Anesu:hover h1,
.Anesu:hover p{
    opacity:1;
}

.Kambuzama h1,
.Kambuzama p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Kambuzama:hover{
    opacity:0.3;
}
.Kambuzama:hover h1,
.Kambuzama:hover p{
    opacity:1;
}
.Kambuzama{
    height:40vh;
    width:400px;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    background-image: url(${image1});
    background-size: cover;
  background-position: center;
        color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }
}
.Warren h1,
.Warren p{
    opacity:0;
    transition:opacity 0.3s ease;
    
}
.Warren:hover{
    opacity:0.3;
}
.Warren:hover h1,
.Warren:hover p{
    opacity:1;
}

.Warren{
    height:40vh;
    width:400px;
    @media(max-width:1024px){
        height:31vh;
    }
    @media(max-width:900px){
        width:582px;
    }
    @media(max-width:669px){
            width:575px;
        }
    @media(max-width:400px){
    width:270px;}
    background-image: url(${image1});
    background-size: cover;
  background-position: center;
    color:black;
    overflow:hidden;
   text-align:center;
   h1{
    margin-top:100px;
   }
}
`;

function Anesu() {
    return (
  <Wrapper>
    <div className = 'Anesu' >
        <h1>Mufakose</h1>
        <p>Read More</p>
    </div>
    <div className = 'Kambuzama' >
    <h1>Kambuzama</h1>
        <p>Read More</p>
    </div>
    <div className = 'Warren' >
    <h1>Warren Park</h1>
        <p>Read More</p>
    </div>
    </Wrapper>
  )
}

export default Anesu