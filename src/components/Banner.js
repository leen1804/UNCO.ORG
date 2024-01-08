import React,{ useState } from 'react';
import styled from 'styled-components';
import image1 from '../assets/img/hero 2.png';
import { NavLink } from 'react-router-dom';
import imagePopup from '../assets/img/hubs2@2x.png';
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const Popup = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  max-width: 600px;
  position: relative;
`;

const PopupImage = styled.img`
  width: 100%;
  max-height: 200px; 
  object-fit: cover;
  border-radius: 5px;
`;

const PopupParagraph = styled.p`
  margin-top: 20px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: blue; 
  color: white; 
  border: none;
  font-size: 20px;
  cursor: pointer;
`;


const DonatePopup = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  const handleButtonClick = () => {
    onClose();
  };

  return (
    <Overlay className="overlay" onClick={handleOverlayClick}>
      <Popup onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleButtonClick}>&times; Close</CloseButton>
        <PopupImage src={imagePopup} alt="Popup Image" />
        <PopupParagraph>
          Your donation makes a difference! Thank you for supporting our cause.
        </PopupParagraph>
      </Popup>
    </Overlay>
  );
};


const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media(min-width:1200px){
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 4;
 
  height:115vh;
  @media (max-width: 1024px) {
    height:50vh;
  }
 
`;

const Right = styled.div`
  flex: 4;
  padding: 20px;
  text-align: left;

margin-top:102px;
margin-left:50px;
  @media (max-width: 979px) {
    padding: 20px 5px;
    margin-top:48px;

   
  }
  @media (max-width: 979px) {
    margin-top:20px;
    margin-left:52px;
  }
  @media (min-width: 1200px) {
    margin-left:55px;

  }
  @media (max-width: 400px) {
    margin-left:20px;
  }

  h1 {
  font-size: 2.5rem;
  margin-bottom: 9px;
  
  line-height:65px;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
  @media (max-width: 979px) {
    font-size: 70px;
  }
  @media (max-width: 878px) {
    font-size: 42px;
  }

  @media (min-width: 1232px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 3.4rem;
  }
  

  @media (min-width: 1625px) {
    font-size: 4.5rem;
  }

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
  }
}

  p {
    margin-bottom: 38px;
   margin-top:-20px;
    font-size: 24.588px;
    font-weight: 200;
    line-height: 44.2584px;
    color: rgb(0, 0, 0);

    @media (max-width: 878px) {
      font-size: 26px;
     
    }
    @media (min-width: 1625px) {
   font-size:35px;
  }
  @media (maxwidth: 1024px) {
    font-size: 39px;
  }
  @media (min-width: 1200px) {
    padding-top:11px;
  }
  }

  span {
    width: 30px;
      height: 3px;
      background:black;
  }

  .ButtonWrapper {
    margin-top: 14px;
  

    @media (max-width: 878px) {
    
    }
  }

  .StyledButton {
    display: inline-block;
    padding: 13px 35px;
    background-color: blue;
    color: white;
    text-decoration: none;
    border: 2px solid transparent;
    transition: background-color 0.3s, border-color 0.3s, opacity 0.3s;
    border-radius:5px;
    &:hover {
      background-color: transparent;
      border-color: blue;
      color:blue;
      opacity: 0.7;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height:115vh;
 
  @media (max-width: 1224px) {
    height:123vh;  
    margin-left:-2px;
  }
  @media (max-width: 1024px) {
    height:50.3vh;
  }
  @media (max-width: 768px) {
    max-height:614px;
    margin-left:0px;
  }
  
`;

function ImageSection() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleDonateClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
    <Section>
      <Left>
        <Image src={image1} alt="Left Image" />
      </Left>
      <Right>
        <h1>Tech education &</h1>
        <h1>employment, for</h1>
        <h1>everyone.</h1>
      <p><span></span></p>
        <p>We believe that everyone, everywhere should have access to life-changing technology education and employment opportunities.</p>
        <div className="ButtonWrapper">
        <a
              href=""
              className="StyledButton"
              data-trigger-click="donate"
              onClick={handleDonateClick}
            >
              Donate Today
            </a>     
        </div>
      </Right>
    </Section>
    {isPopupOpen && <DonatePopup onClose={handlePopupClose} />}     </>
  );
}

export default ImageSection;
