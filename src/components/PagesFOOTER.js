import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  .footer {
    display: grid;

   
button{
  width: 120px;
  height: 55px;
  border-radius: 8%;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #4A5AF8;
}
.btn-div{
display: flex;
justify-content: flex-end;
}
    form{
      display: flex;
      flex-direction: column;
      gap:10px;
    }
    .input-1{
      color: #030303;
      background: none;
      width: 100%;
      border: none;
    border-bottom: 2px solid #707070;
    height: 70px;
    }
    .input-2{
      color: #030303;
    background: none;
    width: 100%;
    /* height: 150px; */
    border: none;
    border-bottom: 2px solid #707070;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 8%;
    padding-bottom: 25%;
    }
    @media (min-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10% 5%;
      flex-wrap: wrap;
      gap: 10%;
      @media (min-width: 768px) {
        gap: 8%;
        padding: 5%;
      }
      @media (min-width: 992px) {
        padding: 0 5% 5% 5%;
      }
      @media (min-width: 1200px) {
        margin-top: -4%;
      }

      .div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        gap: 5%;
        margin-bottom: 30%;
        @media (min-width: 568px) {
          gap: 10%;
        }
        @media (min-width: 768px) {
          flex-direction: column;
          margin-bottom: 0%;
          gap: 20%;
          width: 28%;
        }
        .text {
          display: grid;
          gap: 20%;
          text-align: center;
          @media (min-width: 768px) {
            margin-top: 100%;
          }
          a {
            color: #000;
            font-size: 18px;
            @media (min-width: 768px) {
              font-size: 16px;
              text-align: left;
              letter-spacing: 1px;
            }
          }
          .head {
            font-size: 20px;
            line-height: 30px;
            font-weight: 800;
            @media (min-width: 768px) {
              font-size: 19px;
            }
          }
        }
        .text1 {
          width: 80%;
          @media (min-width: 768px) {
            margin-top: 0%;
          }
        }
      }

      .div {
        .text {
          @media (min-width: 768px) {
            margin-top: 45%;
            width: 70%;
            margin-bottom: 35%;
          }
          @media (min-width: 992px) {
            a {
              font-size: 16px;
            }
            margin-top: 95%;
            width: 95%;
            margin-bottom: 75%;
          }
          @media (min-width: 1200px) {
            margin-top: 85%;
            width: 90%;
            margin-bottom: 55%;
          }
        }
        .text1 {
          width: 80%;
          @media (min-width: 768px) {
            width: 80%;
            margin-top: 0%;
          }
          @media (min-width: 992px) {
            width: 100%;
            margin-top: 0%;
            margin-bottom: 0%;
          }
          @media (min-width: 1200px) {
            width: 100%;
            margin-top: -9%;
            margin-bottom: 0%;
          }
        }
      }
      .div2 {
        .text {
          @media (min-width: 768px) {
            width: 60%;
            .head {
              font-size: 21px;
            }
            margin-top: 80%;
            margin-bottom: 35%;
          }
          @media (min-width: 992px) {
            width: 100%;
            margin-top: 95%;
            margin-bottom: 85%;
          }
          @media (min-width: 1200px) {
            width: 100%;
            margin-top: 85%;
            margin-bottom: 85%;
          }
        }
        .text1 {
          width: 80%;
          @media (min-width: 768px) {
            width: 71%;
            margin-top: 0%;
            margin-bottom: 0%;
          }
          @media (min-width: 992px) {
            width: 100%;
            margin-top: 9%;
            margin-bottom: 0%;
          }
          @media (min-width: 1200px) {
            width: 100%;
            margin-top: 20%;
            margin-bottom: 0%;
          }
        }
      }


      .div3 {
        .text {
          @media (min-width: 768px) {
            margin-top: 80%;
            margin-bottom: 25%;
            width: 70%;
          }
          @media (min-width: 992px) {
            margin-top: 105%;
            margin-bottom: 50%;
            width: 70%;
          }
          @media (min-width: 1200px) {
            margin-top: 80%;
            margin-bottom: 50%;
            width: 70%;
          }
        }
        .text1 {
          width: 80%;
          @media (min-width: 768px) {
            margin-top: 0%;
            margin-bottom: 0%;
          }
        }
      }
    }
    .right {
      margin-top: 5%;
      background-color: #f2f3ff;
      padding: 7% 5% 20% 5%;
      display: grid;
      gap: 5%;
      text-align: center;
      @media (min-width: 568px) {
        padding: 7% 5% 13% 5%;
      }
      @media (min-width: 768px) {
       .input-2 {
    width: 100%;
    padding-top: 3%;
    padding-bottom: 17%;
}
span {
    margin-top: 4%;
}
      }
      
      @media (min-width: 992px) {
        margin-top: 0%;
        width: 40%;

        .input-2 {
    width: 100%;
    padding-top: 3%;
    padding-bottom: 37%;
}
      }
      @media (min-width: 1200px) {
        padding-bottom: 7%;

        .input-2 {
    width: 100%;
    padding-top: 2%;
    padding-bottom: 18%;
    font-size: 18px;
    color: #030303;
}
        .input-1 {
          color: #030303;
    font-size: 18px;
    height: 55px;
}
      }
      h2 {
        font-size: 35px;
        font-weight: 800;
        @media (min-width: 568px) {
          text-align: left;
        }
      }
      @media (min-width: 1200px){
        span {
        font-size: 19px;
    line-height: 25px;
    font-weight: 400;
    margin-top: 2%;
    padding-bottom: 3%;
          }
      }
      span {
        font-size: 19px;
    line-height: 25px;
    font-weight: 400;
    margin-top: 10%;
    padding-bottom: 3%;
        @media (min-width: 568px) {
          margin-top: 7%;
        }
        @media (min-width: 1200px) {
          margin-top: 4%;
        }
      }
      form {
        .textfield {
          width: 100%;
          @media (min-width: 1200px) {
   /* span {
    margin-top: 4%;
} */
            input {
              font-size: 30px;
            }
          }
        }
        .button {
          float: right;
          margin-top: 5%;
          @media (min-width: 1200px) {
            /* margin: 7% 0 5% 0; */

       
        }
        }
      }
    }
  }



`;
function PagesFOOTER() {
  return (
    <Wrapper>
    <div className="footer">

     

      <div className="left">
        <div className="div">
          <div className="text text1">
            <a href="#" className="head">
              Make a Donation
            </a>
            <a href="#">monthly donors</a>
            <a href="#">support a student</a>
            <a href="#"> general</a>
          </div>
          <div className="text">
            <a href="#" className="head">
              Uncommon <br></br> Notes
            </a>

            <a href="#">blog</a>
            <a href="#">our story</a>
          </div>
        </div>
        <div className="div div2">
          <div className="text text1">
            <a href="#" className="head">
              Get <br/> Involved
            </a>
            <a href="#">build / sponsor</a>
            <a href="#">hire uncommon</a>
            <a href="#">donate hardware</a>
          </div>
          <div className="text">
            <a href="#" className="head">
              Contact <br/> Us
            </a>

            <a href="#">general</a>
            <a href="#">for dev work</a>
          </div>
        </div>
        <div className="div div3">
          <div className="text text1">
            <a href="#" className="head">
              Volunteer Opportunities
            </a>

            <a href="#">mentorship</a>
            <a href="#">host a dinner</a>
            <a href="#">ambassadors</a>
          </div>

          <div className="text">
            <a href="#" className="head">
              Annual <br/> Reports
            </a>

            <a href="#">2019</a>
            <a href="#">2020</a>
            <a href="#">2021</a>
            <a href="#">2022</a>
          </div>
        </div>
      </div>

      <div className="right">
        <h2>Get In Touch</h2>
        <form>
        <input  className= "input-1" type="text"placeholder='Name'/>
          {/* <TextField
            id="standard-basic"
            className="textfield"
            label="Name"
            variant="standard"
          /> */}
               <input  className= "input-1" type="text"placeholder='Email Address'/>
          {/* <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            className="textfield"
          /> */}

<input  className= "input-2" type="text"placeholder='Message'/>
          {/* <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="standard"
            className="message textfield"
          /> */}
     <div className="btn-div"> 
          <button  className="button">
            Submit
          </button>
          </div>
        </form>
        <span>copyright 2023 | all rights reserved | uncommon.org</span>
      </div>
    </div>
  </Wrapper>
  )
}

export default PagesFOOTER
