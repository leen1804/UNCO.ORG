import React from 'react'
import styled from 'styled-components'


const Wrapper=styled.section`

span{
  font-weight: bold;
  font-size: 22px;
}

.Uncommon-Impact{
background: #F2F3FE;
padding-top: 15%;
padding-bottom:12%
}

img{
  width: 90%;
  display: flex;
  margin: 0 auto;
  border-radius: 5%;
}
.h2-first{
  padding-top: 6%;
  padding-bottom: 4%;
  font-weight: bold;
  font-size: 30px;
}
.h2-second{
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
}
.Uncommon-Impact-text-div{
margin-left:23px;
}
p{
  font-size: 20px;
    position: relative;
    margin-left: 20px;
    margin-right: 45px;
    line-height: 41px;
    padding-bottom: 6%;
 
}

.vid{
  height: 100%;
  width: 90%;
  display: flex;
  margin: 0 auto;
  border-radius: 9px;
}

@media (min-width: 768px){
 .Uncommon-Impact{
  display: flex;
 } 
 .vid{
 margin-top: 17%;
  width: 50%;
  display: flex;
 
  margin-right: 30px;
  border-radius: 9px;
}

.h2-first{
  padding-top: 12%;
  padding-bottom: 9%;
  font-weight: bold;
  font-size: 40px;
}
.h2-second{
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 40px;
}
.Uncommon-Impact-text-div{
margin-left:32px;
}
p {
    font-size: 20px;
    position: relative;
    margin-left: 33px;
    margin-right: 35px;
    line-height: 41px;
    padding-bottom: 6%;
}
}

@media (min-width:992px) {
  .vid {
   margin-top: 171px;
    width: 50%;
    display: flex;
    margin-right: 30px;
    border-radius: 9px;
}
.h2-first {
    padding-top: 12%;
    padding-bottom: 9%;
    font-weight: bold;
    font-size: 50px;
}
.h2-second {
    padding-bottom: 5%;
    font-weight: bold;
    font-size: 50px;
}
.Uncommon-Impact {
    background: #F2F3FE;
    padding-top: 9%;
    padding-bottom: 8%;
}
.Uncommon-Impact-text-div{
  padding-top: 16%;
}

p {
    font-size: 20px;
    position: relative;
    margin-left: 28px;
    margin-right: 5px;
    line-height: 41px;
    padding-bottom: 0%;
}
}

@media (min-width:1200px) {
  .Uncommon-Impact {
   
    background: #F2F3FE;
    padding-top: 0;
    padding-bottom: 8%;

}
.vid {
margin-top: 140px;
    width: 40%;

    display: flex;
   
    margin-right: 70px;
    border-radius: 9px;
}
 .h2-first {
    padding-top: 6%;
    padding-bottom: 5%;
    font-weight: bold;
    font-size: 55px;
}
 .Uncommon-Impact-text-div {
    padding-top: 12%;
}
p {
  font-size: 26px;
    position: relative;
    margin-left: 79px;
    margin-right: 105px;
    line-height: 41px;
    padding-bottom: 0%;
}
 .Uncommon-Impact-text-div {
    margin-left: 78px;
}
}
`
function UncommonImpact() {
  return (
    <Wrapper>

         <div class="Uncommon-Impact">
          <div>
        <div class="Uncommon-Impact-text-div">
            <span>Uncommon Impact</span>
            <h2 className='h2-first'>Education =</h2>
            <h2 className='h2-second'>Earning Power.</h2>
            </div>
            <p>Our mission is to help unemployed young adults from low-income communities launch their careers in the
                technology industry.</p>

                </div>
                <video className='vid' src="../uncommon images/vid 2.mp4" controls/>
    
    </div>
    </Wrapper>
      
  
  )
}

export default UncommonImpact
