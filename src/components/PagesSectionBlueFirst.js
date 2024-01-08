import React from 'react'
import styled from 'styled-components'


 
const Wrapper =styled.section`
.BecomingAmentor{
    padding-top:15%;
    padding-bottom: 15%;
    background: #F2F3FE;
}
.colorDiv{
    background: white;
    padding-top:10%;
    padding-bottom: 14%;
 
}
.images-div{
position: relative;
}
.colorBlue{
    display: none;
    z-index: 1;
}
img{
    border-radius: 5%;
    width: 70%;
    display: flex;
    margin: 0 auto;
    z-index: 2;
}
.img-2{
    width: 32%;
    position: absolute;
    z-index: 3;
    left: 251px;
    top: 176px;
}

h4{
    padding: 0 40px;
    line-height: 30px;
    padding-top:19%;
    text-align:center;
    padding-bottom: 4%;
}

p{
    text-align: center;
    font-size: 30px;
    line-height: 1.3;
    font-weight: 400;
    padding: 0 62px;
}

@media (min-width:768px) {
  .colorDiv {
    background: white;
    padding-top: 8%;
    padding-bottom: 5%;
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-radius: 2%;
} 
img {
  border-radius: 5%;
    width: 66%;
    display: flex;
    margin: 0;
    position: relative;
    margin-left: 18px;
    z-index: 2;
    left: 15px;
}
.img-2 {
  width: 28%;
    position: absolute;
    z-index: 3;
    top: 142px;
    left: 164px;
}
.BecomingAmentor {
    padding-top: 8%;
    padding-bottom: 15%;
    background: #F2F3FE;
}
.colorBlue{
  border-radius: 3%;
    display: block;
    width: 131px;
    height: 195px;
    background: blue;
    position: absolute;
    z-index: 1;
    top: -13px;
    left: 17px;
}
.img-text-combo{
  display: flex;
    margin-left: -7px;
}
h4 {
  padding: 0;
    margin-top: 5%;
    line-height: 35px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 0;
    font-size: 19px;
    font-weight: bold;
    margin-left: -46px;
    margin-right: 59px;
}
p {
  text-align: left;
    font-size: 19px;
    line-height: 1.5;
    font-weight: 300;
    margin-top: 3%;
    padding: 0 97px;
    margin-left: -137px;
}
}
 

@media (min-width: 992px) {
 .colorDiv {
    background: white;
    padding-top: 8%;
    padding-bottom: 5%;
    display: flex;
    width: 79%;
    margin: 0 auto;
    border-radius: 2%;
}
 .BecomingAmentor {
    padding-top: 4.5%;
    padding-bottom: 4.5%;
    background: #F2F3FE;
}
.img-text-combo{
  display: flex;
    margin: 0 18px;
}
 img {
  border-radius: 5%;
    width: 197%;
    display: flex;
    margin: 0;
    height: 163px;
    position: relative;
    margin-left: 18px;
    z-index: 2;
    object-fit: cover;
    left: 78px;
}
h4 {
    /* padding: 0 19px; */
    line-height: 40px;
    padding-top: 0;
    margin-top: 0%;
    text-align: left;
    padding-bottom: 2%;
    font-size: 20px;
    font-weight: bold;
    margin-left: 235px;
    margin-right: 41px;
}
 p {
  line-height: 1.5;
    padding: 0px 53px;
    margin-left: 166px;
    margin-top: 0;
}
 .colorBlue {
  border-radius: 3%;
    display: block;
    width: 152px;
    height: 175px;
    background: blue;
    position: absolute;
    z-index: 1;
    top: -23px;
    left: 76px;
}
 .img-2 {
  width: 109%;
    position: absolute;
    z-index: 3;
    height: 81px;
    top: 105px;
    left: 194px;
    object-fit: cover;
}
 /* h4 {
    padding: 0 19px;
    line-height: 30px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 21px;
    font-weight: bold;
    margin-left: 141px;
} */
 p {
  line-height: 1.5;
    padding: 0px 53px;
    margin-left: 164px;
}
}
@media (min-width: 1200px) {
    .BecomingAmentor {
    padding-top: 4%;
    padding-bottom: 4.5%;
    background: #F2F3FE;
} 
.colorDiv {
    background: white;
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    width: 80%;
    margin: 0 auto;
    border-radius: 2%;
}
.img-text-combo{
    display: flex;
    margin: 0 100px;
}
img {
  margin-top: 4%;
    border-radius: 3%;
    width: 175%;
    display: flex;
    height: 190px;
    position: relative;
    margin-left: 35px;
    z-index: 2;
    object-fit: cover;
    left: -13px;
}
.colorBlue {
    border-radius: 3%;
    display: block;
    width: 180px;
    height: 205px;
    background: blue;
    position: absolute;
    z-index: 1;
    top: -21px;
    left: 7px;
}
.img-2 {
    width: 85%;
    position: absolute;
    z-index: 3;
    height: 95px;
    top: 130px;
    left: 130px;
    object-fit: cover;
}
 h4 {
    padding: 0px 70px;
    line-height: 40px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size:25.32px;

font-weight: 700;

line-height: 40.98px;

 color: rgb(0, 0, 0);
    margin-top: 8%;
    margin-left: 120px;
    margin-right: 27px;
}
p {
    font-size: 21px;
   line-height: 1.5;
    padding: 0px 29px;
    margin-left: 175px;
}
.images-div{
  margin-top: 6%;
}
}
`
function SectionBlueFirst() {
  return (



    <Wrapper>
    <div class="BecomingAmentor">
    <div class="colorDiv">
<div className='img-text-combo'>
        <div class="images-div">
            <div class="colorBlue"></div>
            <img src="../uncommon images/bluesecImg-1.jpeg" alt="photo"/>
            <img className='img-2' src="../uncommon images/bluesecLmg-2.png" alt="photo"/>
           
        </div>
        <div class="BecomingAmentor-text-div">
            <h4>I have hired a Digital Marketer and Product Designer from Uncommon to join my startup, and couldn’t be happier!</h4>
            <p>– Sadiq Abubakar, CEO, Davigate</p>
        </div>
        </div>
    </div>
</div>
</Wrapper>
//     <Wrapper>
//     <div className='PagesBlueSec'>
//         <div className='color-div'>
//         <div className='images-div'>
//             <div className='blue'></div>
//             <img className='img-1' src="../uncommon images/bluesecImg-1.jpeg" alt=""/>
//             <img className='img-2' src="../uncommon images/bluesecLmg-2.png" alt=""/>
//         </div>
//         <div className='text-combo'>
//   <h3>I have hired a Digital Marketer and Product Designer from Uncommon to join my startup, and couldn’t be happier!</h3>
//   <p>– Sadiq Abubakar, CEO, Davigate</p>
//   </div>
//   </div>
//   </div>
// </Wrapper>
  )
}

export default SectionBlueFirst
