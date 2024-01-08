import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
img{
    width: 100%;
    height: 536px;
    object-fit: cover;
}
h2{
  margin-top: 15%;
  margin-left: 36px;
    font-size: 28px;
    font-weight: 700;
    margin-right: 27px;
    line-height: 1.4;
    margin-bottom: 5%;
  }
  span{
    margin-left: 36px; 
    color: blue;
    font-size: 19px;
    font-weight: 500;
  }
  p{
    margin-bottom: 9%;
    margin-top: 8%;
    font-size: 19px;
    font-weight: 300;
    margin-left: 36px;
    margin-right: 49px;
    line-height: 1.7;
  }
@media (min-width:768px) {
  .PagesHero{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
 p {
    margin-bottom: 9%;
    margin-top: 8%;
    font-size: 19px;
    font-weight: 300;
    margin-left: 36px;
    margin-right: 8px;
    line-height: 1.7;
}

}

@media (min-width: 992px) {
  img{
    width: 50%;
    height: 100vh;
    object-fit: cover;
}
h2 {
    margin-top: 15%;
    margin-left: 68px;
    font-size: 72px;
    font-weight: 600;
    margin-right: 27px;
    line-height: 1.3;
    margin-bottom: 5%;
}
 span {
    margin-left: 68px;
    color: blue;
    font-size: 25px;
    font-weight: 500;
}
p {
  margin-bottom: 9%;
    margin-top: 8%;
    font-size: 25px;
    font-weight: 300;
    margin-left: 63px;
    margin-right: 69px;
    line-height: 1.7;
}
}


@media (min-width: 1200px) {
  .text-div{
    width: 50%;
  }
  p {
  margin-bottom: 9%;
    margin-top: 6%;
    margin-left: 63px;
    margin-right: 80px;
    font-size: 24px;

font-weight: 200;

line-height: 43.2px;


   
}
h2 {
    margin-top: 15%;
    margin-left: 68px;
    margin-right: 27px;
  margin-bottom: 5%;
  font-size: 60px;

font-weight: 700;

line-height: 78px;

color: rgb(0, 0, 0);
}
img{
  width:49%;
  padding-right:20px;
}
}
`


function PagesHero() {
  return (
    <Wrapper>
      <div className='PagesHero'>
      <img src="../uncommon images/heroimg.png" alt="photo"/>
<div className='text-div'>
<h2>Our Uncommon Approach.</h2>
<span>Your Work Changes Lives</span>
<p>When we design, develop and market web products, 100% of the profits are used to fund access to technology education & employment.</p>
</div>
      </div>
    </Wrapper>
  )
}

export default PagesHero
