import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
.PazDonateTODAY{
    padding-top: 25%;
    padding-bottom:22%;
    background: #F2F3FE;
}
.text-div{
   h4{
    font-size: 22px;
    font-weight: 400;
    margin-left: 40px;
   }
   h3{
    font-size: 23px;
    font-weight: 700;
    margin-left: 40px;
    margin-right: 50px;
    line-height: 1.1;
    margin-top: 4%;
   }
   p{
    font-size: 16px;
    font-weight: 300;
    margin-left: 40px;
    margin-right: 43px;
    line-height: 1.6;
    margin-top: 4%;
    margin-bottom: 5%;
   }
}

.btn-combo-1{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

   .big-btn{
    width: 78%;
    height: 67px;
    border: none;
    border-radius: 3px;
font-size: 27px;
font-weight: bolder;
background:white;
color:blue;
   } 

   .first-5btn{
    display: flex;
    flex-direction: column;
    
}


   }
   .btn-3{
        display: flex;
    flex-direction: row;  
    gap: 5px;
    margin-top: 6%;
  
    }
      .button{
        width: 95px;
        height: 50px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .button:hover{
        background:  rgb(74, 90, 249);
                color:white;
    }
    .buttoni{
        background:  rgb(74, 90, 249);
        width: 125px;
        height: 50px;
       border-radius:5px;
        display: flex;
        align-items: center;
        color:white;
        justify-content: center;
    }
    .btn-2{
        display: flex;
        margin-top: 3%;
        gap: 5px;
        button{
            width: 65%;
            height: 50px;
            background: white;
            border:none;
            border-radius:3px;
        }
    }
    .btn-250{
        border: none;
        width: 35%;
            height: 50px;
            background: green;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
    }
    .p-checkbox-1{
        display: flex;
        margin-left: 38px;
        margin-top: 8%;
        margin-bottom: 8%;
        gap:4px;
        p{
            font-size: 17px;
            font-weight: bold;
        }
    }

    .btn-combo-2{
        display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
        .big-btn-2{
            width: 78%;
    height: 60px;
    border: none;
    border-radius: 3px;
font-size: 27px;
font-weight: bolder;
        }
    }
   .input-combo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    border: none;
    gap: 15px;
   }
   .input{
    width: 186%;
    height: 45px;
   }
   .input-only{
    width: 186%;
    height: 45px;
   }

   .second-5btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    border: none;
    gap: 15px;
   }
   .CreditCard-h3{
    margin-top: 8%;
    font-size: 34px;
    font-weight: bolder;
    margin-left: 40px;
   }
   hr{
    border: none;
    background: black;
    width: 70%;
    height: 1px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
   }
   .payment-p{
    margin-top: 8%;
    font-size: 18px;
    font-weight: bold;
    margin-left: 40px;
    margin-bottom: 5%;
   }

   .cardInfo-combo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
   }
   /* .DIV-1{
    width: 80%;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background: green;
   }
   .DIV-2{
    margin-top: 6%;
    width: 80%;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background: green;
   } */
   .DIV-1-input{
    margin-top: 6%;
    width: 300px;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: column;
 
   }
   .DIV-2-input{
    margin-top: 6%;
    width: 300px;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: column;
 
   }

   .p-checkbox-2{
    display: flex;
    margin-left: 38px;
    margin-top: 6%;
    p{
        font-size: 18px;
        font-weight:bold;
        margin-left:1px;
        margin-right: 10px;
        line-height: 1.4;
    }
   }

   .LASTDONATE-BTN{
    margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    button{
        width: 300px;
    height: 45px;  
    }
  margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
   }














@media (min-width: 768px) {

   
    .PazDonateTODAY{
    padding-top: 12%;
    padding-bottom:13%;
    background: #F2F3FE;
}
.text-div{
   h4{
    font-size: 32px;
    font-weight: 400;
    margin-left: 70px;
   }
   h3{
    font-size: 28px;
    font-weight: 700;
    margin-left: 70px;
    margin-right: 50px;
    line-height: 1.1;
    margin-top: 4%;
   }
   p{
    font-size: 16px;
    font-weight: 300;
    margin-left: 70px;
    margin-right: 163px;
    line-height: 1.6;
    margin-top: 4%;
    margin-bottom: 5%;
   }
}

.btn-combo-1{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

   .big-btn{
    width: 82%;
    height: 67px;
    border: none;
    border-radius: 3px;
    font-size: 27px;
    font-weight: bolder;
   } 

   .first-5btn{
    display: flex;
    flex-direction: column;
    
}


   }
   .btn-3{
        display: flex;
    flex-direction: row;  
    gap: 5px;
    margin-top: 6%;
  
    }
      .button{
        width: 206px;
    height: 50px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    }
    .btn-2{
        display: flex;
        margin-top: 3%;
        gap: 5px;
        button{
            width: 65%;
            height: 50px;

        }
    }
    .btn-250{
        border: none;
        width: 35%;
            height: 50px;
            background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
    }
    .btn-250:hover{
        background: blue;
        color:white;
    }
    .p-checkbox-1{
        display: flex;
    margin-left: 62px;
    margin-top: 5%;
    margin-bottom: 8%;
    gap: 15px;
        p{
            font-size: 19px;
            font-weight: bold;
        }
    }

    .btn-combo-2{
        display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
        .big-btn-2{
            width: 78%;
    height: 60px;
    border: none;
    border-radius: 3px;
font-size: 27px;
font-weight: bolder;
        }
    }
   .input-combo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    border: none;
    gap: 15px;
    margin-bottom: 3%;
   }
   .input{
    width: 282px;
    height: 45px;
   }
   .input-only{
    width: 100%;
    height: 45px;
    background: red;

   }

   .second-5btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    border: none;
    gap: 15px;
   }
   .CreditCard-h3{
    margin-top: 8%;
    font-size: 37px;
    font-weight: bolder;
    margin-left: 73px;
    margin-bottom: 2%;
   }
   hr{
    border: none;
    background: black;
    width: 80%;
    height: 1px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
   }
   .payment-p{
    margin-top: 8%;
    font-size: 22px;
    font-weight: bold;
    margin-left: 80px;
    margin-bottom: 5%;
   }

   .cardInfo-combo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 15px;
   }
   /* .DIV-1{
    width: 80%;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background: green;
   }
   .DIV-2{
    margin-top: 6%;
    width: 80%;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background: green;
   } */
   .DIV-1-input{
    margin-top: 6%;
    width: 300px;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    background: red;
 
   }
   .DIV-2-input{
    margin-top: 6%;
    width: 460px;
    height: 45px;
    display: flex;
    background:  rgb(74, 90, 249);
    gap: 10px;
    flex-direction: row;
 
   }
   .input-w{
    width: 230px;
    height: 30px;
    display: flex;
    background: red;
    gap: 10px;
    flex-direction: row;
   }
.DIV-2{
display: flex;
gap: 20px;
margin-top: 3%;
flex-direction: column;
}
   .p-checkbox-2{
    display: flex;
    margin-left: 38px;
    margin-top: 6%;
    p{
        font-size: 18px;
        font-weight:bold;
        margin-left:1px;
        margin-right: 10px;
        line-height: 1.4;
    }
   }

   .LASTDONATE-BTN{
    margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    button{
        width: 621px;
    height: 59px;
    }
  margin: 0 auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
   }
}


@media(min-width: 992px) {
    
   
    .PazDonateTODAY{
    padding-top: 12%;
    padding-bottom:13%;
    background: #F2F3FE;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-div h4 {
   
    font-size: 38px;
    font-weight: 400;
    margin-left: 98px;

}
.text-div h3 {
    font-size: 40px;
    font-weight: 500;
    margin-left: 96px;
    margin-right: 94px;
    line-height: 1.1;
    margin-top: 4%;
}

 .text-div p {
    font-size: 26px;
    font-weight: 300;
    margin-left: 101px;
    margin-right: 166px;
    line-height: 1.6;
    margin-top: 4%;
    margin-bottom: 5%;
}
.btn-combo-1 .big-btn {
    width: 76%;
    height: 73px;
    border: none;
    border-radius: 3px;
    font-size: 27px;
    font-weight: bolder;
    margin-left: 3px;
}
 .button {
    width: 73px;
    height: 50px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
 
}

 .btn-combo-2 .big-btn-2 {
    width: 85%;
    height: 60px;
    border: none;
    border-radius: 3px;
    font-size: 27px;
    font-weight: bolder;
}

 .input {
    width: 151px;
    height: 45px;
}
.p-checkbox-1 {
    display: flex;
    margin-left: 152px;
    margin-top: 5%;
    margin-bottom: 8%;
    gap: 15px;
}
.CreditCard-h3 {
    margin-top: 8%;
    font-size: 40px;
    font-weight: bolder;
    margin-left: 127px;
    margin-bottom: 2%;
}
.DIV-1-input {
    margin-top: 6%;
    width: 250px;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    background: red;
}

.input-w {
    width: 105px;
    height: 30px;
    display: flex;
    background: red;
    gap: 10px;
    flex-direction: row;
}

 .LASTDONATE-BTN button {
    width: 352px;
    height: 59px;
    border-radius: 3px;
}
.form-combo{
    margin-right: 120px;
}
 .btn-combo-1 {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 81px;
    align-content: center;
}
}
@media(min-width: 1200px) {
    .btn-combo-2{
        margin-left: 90px;
        display: none;
    }
   
    .PazDonateTODAY{
    padding-top: 7%;
    padding-bottom:6%;
    background: #F2F3FE;
    display: flex;
    justify-content: center;
    align-items: center;
  
}
.text-div h4 {
   
    font-size: 30px;
    font-weight: 500;
    margin-left: 139px;

}
.text-div h3 {
    font-size: 47px;
    font-weight: 600;
    margin-left: 139px;
    margin-right: 152px;
    line-height: 1.1;
    margin-top: 4%;
}
hr{
    display: none;
}
 .text-div p {
    font-size: 26px;
    font-weight: 300;
    margin-left: 139px;
    margin-right: 94px;
    line-height: 1.6;
    margin-top: 3%;
    margin-bottom: 3%;
}
.btn-combo-1 .big-btn {
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 3px;
    font-size: 27px;
    font-weight: bolder;
    margin-left: 3px;
}
 .button {
    width: 135px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
 
}

 .btn-combo-2 
 
 .big-btn-2 {
    width: 380px;
    height: 60px;
    border: none;
    border-radius: 3px;
    font-size: 27px;
    font-weight: bolder;
    background: yellow;
}

 .input {
    width: 175px;
    height: 45px;
}
.p-checkbox-1 {
    display: flex;
    margin-left: 86px;
    margin-top: 5%;
    margin-bottom: 3%;
    gap: 15px;
}
.CreditCard-h3 {
    display: none;
    margin-top: 8%;
    font-size: 40px;
    font-weight: bolder;
    margin-left: 127px;
    margin-bottom: 2%;
}
/* .DIV-1-input {
    margin-top: 6%;
    width: 250px;
    height: 45px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    background: red;
} */

/* .input-w {
    width: 105px;
    height: 30px;
    display: flex;
    background: red;
    gap: 10px;
    flex-direction: row;
} */

 .LASTDONATE-BTN button {
    width: 405px;
    height: 59px;
    border-radius: 3px;
    padding-top: 0%;
    margin-left: 83px;
    border-radius: 6px;
    border: none;
    background:white;
}
.form-combo{
    margin-right: 200px;
}
 .btn-combo-1 {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 81px;
    align-content: center;
}
.cardInfo-combo{
    display: none;
}
 .payment-p {
    display: none;
    margin-top: 8%;
    font-size: 22px;
    font-weight: bold;
    margin-left: 80px;
    margin-bottom: 5%;
}
 .p-checkbox-2 {
    display: flex;
    margin-left: 38px;
    margin-top: 6%;
    display: none;
}
}
`



function PazDonateTODAY() {
  return (
    <Wrapper>
        <div className='PazDonateTODAY'>



<div className='text-div'>
<h4>Sustainability</h4>
<h3>Become an uncommon donor</h3>
<p>Our pursuit to educate and empower never ends. Join the movement to build a brighter future today.</p>
</div>


<div className='form-combo'>

<div className='btn-combo-1'>
<button className='big-btn'>Donate Today</button>

<div className='first-5btn'>
 <div className='btn-3'>
<butto className='buttoni'>$25.00</butto>
<butto className='button'>$50.00</butto>
<butto className='button'>$100.00</butto>
</div>

<div className='btn-2'> 
<butto className='btn-250'>$250.00</butto>
<button>Other</button>
</div>
</div>
</div>

<div className='p-checkbox-1'>
<input type='checkbox'/>
    <p>Make this donation monthly</p>
  
 
</div>


<div  className='btn-combo-2'>
<button className='big-btn-2'>Donate now</button>
<div className='second-5btn'>

<div className='input-combo'>
<input className='input' type='text' placeholder='First Name'/>
<input className='input' type='text' placeholder='Last Name'/>
    </div>
    <input className='input-only' type='text' placeholder='Email Address'/> 
</div>
</div>

<h3 className='CreditCard-h3'>Credit Card Info</h3>
<hr/>
<p className='payment-p'>This is a secure SSL encrypted payment </p>

<div className='cardInfo-combo'>
<div className='DIV-1'>


<input className='DIV-1-input' type='text' placeholder='Card Number'/>
<input  className='DIV-1-input'type='text' placeholder='CVC'/> 
</div>


<div className='DIV-2'>
<input  className='input-w'type='text' placeholder='CardHolder Number  *'/>
<input className='input-w' type='text' placeholder='MM /YY'/> 
</div>
</div>

<div className='p-checkbox-2'>
<input type='checkbox'/>

<p>I'd like to help cover the transaction fees of $1.06 for my donation.</p>
</div>
<div className='LASTDONATE-BTN'>
<button >Donate Now</button>
</div>
</div>










</div>
    </Wrapper>
  )
}

export default PazDonateTODAY
