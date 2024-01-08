import React from 'react'
import styled from 'styled-components'


 
const Wrapper=styled.section`
h2{
  font-size: 22px;
}
h2 {
    font-size: 34px;
    margin-left: 34px;
    font-weight: bold;
    padding-bottom: 17%;
}
.PagesOurExpertise{
padding-top: 28%;
padding-bottom: 17%;
}

h3{
  font-size: 25px;
  font-weight: 300;
  margin-left: 34px;
  padding-bottom: 7%;
}
.div-1{
  p{
    font-size: 20px;
    font-weight: 300;
    margin-left: 34px;
    margin-right: 14px;
    line-height: 1.9;
    margin-bottom: 4%;
  }
  hr{
    width: 85%;
    border: none;
    background: black;
    display: flex;
    margin: 0 auto;
    height: 0.1px;
  }
}

.div-2{
    padding-top: 15%;
    p{
    font-size: 20px;
    font-weight: 300;
    margin-left: 34px;
    margin-right: 20px;
    line-height: 1.9;
    margin-bottom: 4%;
  }
  hr{
    width: 85%;
    border: none;
    background: black;
    display: flex;
    margin: 0 auto;
    height: 0.1px;
  }
  }

  .div-3{
    padding-top: 15%;
    p{
    font-size: 20px;
    font-weight: 300;
    margin-left: 34px;
    margin-right: 31px;
    line-height: 1.9;
    margin-bottom: 4%;
  }
  hr{
    width: 85%;
    border: none;
    background: black;
    display: flex;
    margin: 0 auto;
    height: 0.1px;
  }
  }

  .div-4{
    padding-top: 15%;
    p{
    font-size: 20px;
    font-weight: 300;
    margin-left: 34px;
    margin-right: 31px;
    line-height: 1.9;
    margin-bottom: 4%;
  }
  hr{
    width: 85%;
    border: none;
    background: black;
    display: flex;
    margin: 0 auto;
    height: 0.1px;
  }
  }


  @media (min-width: 768px){
    .PagesOurExpertise{
padding-top: 10%;
padding-bottom: 9%;
}
 h2 {
    font-size: 34px;
    margin-left: 80px;
    font-weight: bold;
    padding-bottom: 6%;
}
 h3 {
    font-size: 29px;
    font-weight: 300;
    margin-left: 76px;
    padding-bottom: 4%;
}
.div-1 p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 72px;
    margin-right: 95px;
    line-height: 1.9;
    margin-bottom: 4%;
}
.div-2 {
    padding-top: 5%;

     p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 72px;
    margin-right: 95px;
    line-height: 1.9;
    margin-bottom: 4%;
}
}
 .div-3 {
    padding-top: 5%;
    p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 72px;
    margin-right: 95px;
    line-height: 1.9;
    margin-bottom: 4%;
}
}

.div-4 {
    padding-top: 5%;
    p {
    font-size: 20px;
    font-weight: 300;
    margin-left: 72px;
    margin-right: 95px;
    line-height: 1.9;
    margin-bottom: 4%;
}
}
  }

  @media (min-width:1200px) {
    h2 {
    
    margin-left: 130px;
  font-size: 54.64px;

font-weight: 700;

line-height: 78.98px;

 color: rgb(0, 0, 0);
    padding-bottom: 5%;
}
 h3 {
  font-size: 54.64px;

font-weight: 230;



 color: rgb(0, 0, 0);
    margin-left: 130px;
    padding-bottom: 2%;
}
.div-1 p {
  font-size: 24px;
    font-weight: 230;
    margin-left: 130px;
    margin-right: 120px;
  margin-bottom:1%;
    
}
 hr{
   
    border: none;
    background: black;
    
   
  } 

  .div-2 {
    padding-top: 3%;

     p {
      font-size: 24px;
    font-weight: 230;
    margin-left: 130px;
    margin-right: 120px;
  margin-bottom:1%;
}
}

.div-3 {
    padding-top: 3%;
    p {
      font-size: 24px;
    font-weight: 230;
    margin-left: 130px;
    margin-right: 120px;
  margin-bottom:1%;
}
}
.div-4 {
    padding-top: 3%;
    p {
      font-size: 24px;
    font-weight: 230;
    margin-left: 130px;
    margin-right: 120px;
  margin-bottom:1%;
}
  }
  }
`
function PagesOurExpertise() {
  return (
    <Wrapper>
      <div className='PagesOurExpertise'>
   
        <div className='div-1'>
      <h2>Our Expertise</h2>
      <h3>UX/UI Design</h3>
      <p>We believe that great design is a clash of psychology, artistry and practicality. Our goal is to design solutions that are beautiful, elegant, effective, and always put the human first.</p>
<hr/>
</div>

{/* end  */}
<div className='div-2'>
    <h3>Website Development</h3>
    <p>WordPress is our go to Content Management System, thanks in large part to its flexibility, ease of use and massive community – perfect for small to medium sized businesses. For more specialized projects, we use React and NodeJS.</p>
    <hr/>
</div>

<div className='div-3'>
<h3>Search Engine Optimization (SEO)</h3>
<p>
While every project we deploy is built with all of the SEO best practices in mind, optimizing for search is a never ending game, and crucial for organic web traffic. Every SEO campaign is different, and we provide custom, curated strategies for the brands we work with.</p>
<hr/>
</div>

<div className='div-4'>
<h3>Social Media Marketing</h3>
<p>We offer a host of services for Instagram, Facebook and LinkedIn, ranging from account setup to content creation & management. In today’s world, it is imperative that your brand has a strong and consistent social presence.</p>
<hr/>
</div>
</div>
    </Wrapper>
  )
}

export default PagesOurExpertise
