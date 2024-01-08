import React from 'react'


import styled from 'styled-components'


 
const Wrapper=styled.section`
.PagesHeader{
    width: 100%;
    height: 95vh;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
}
h1{
  color: white;
    font-size: 43px;
    font-weight: bolder;
}
p{
    color: white;
    line-height: 1.7;
    font-size: 32px;
    padding: 0 15px;
    text-align: center;
    font-weight: 300;
    margin-top: 37px;
}

@media (min-width: 768px) {
    
    .PagesHeader{
display: none;
    }

}

@media (min-width: 992px) {
    .PagesHeader{
display: block;

    width: 100%;
    height: 97vh;
    background-color: rgb(74, 90, 249); 
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
}

 h1 {
    color: white;
    font-size: 100px;
    font-weight: bolder;
}
p {
    color: white;
    line-height: 1.7;
    font-size: 34px;
    padding: 0 20px;
    text-align: center;
    font-weight: 300;
    margin-top: 46px;
}
    } 


    @media (min-width: 1200px){
          .PagesHeader{
    height: 100vh;
    background-color: rgb(74, 90, 249); 

}  
h1{
    font-size: 93px;

    font-weight: 700;


color: rgb(255, 255, 255);

}
p{
    font-size: 30px;

font-weight: 100;


color: rgb(255, 255, 255);
}
img{
    height:120vh;
}
    }

`
function PagesHeader() {
  return (
    <Wrapper>
      <div className='PagesHeader'>
<h1>uncommon.org</h1>
<p>
development done different</p>
      </div>
    </Wrapper>
  )
}

export default PagesHeader
