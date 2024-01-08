import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Section = styled.div`
  background-color: #fff; 
  padding: 53px 65px;
  @media (max-width:1024px){
    padding-left:20px;
  }
  @media (max-width:400px){
    padding-left:3px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const Column = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    order: ${props => (props.orderOnSmallScreen ? '-1' : '0')};
  }
`;
const Columny = styled.div`
flex: 0;
`
const VideoContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width:420px;
padding:30px;
@media (max-width:400px){ width: 228px; }
  video {
    width: 100%;
    @media (max-width:1024px){    height: 40vh;}
    
    height: 60vh;
    border-radius:20px;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.overlayImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const VideoPlayButton = styled.a`
  background: url('src/assets/img/images.jpeg') no-repeat center center;
  width: 50px; 
  height: 50px; 
  display: block;
  text-indent: -9999px;
`;

const PromoContainer = styled.div`
  color: black;
  text-align: left;
  background-color: #ffff; 
  padding: 20px;
  @media (max-width: 1024px) {
  padding: 1px ;}
  @media (max-width: 768px) { padding: 28px ;}
`;

const PromoHeader = styled.h2`
  font-size: 49.64px;
  font-weight: 700;
  line-height: 65.568px;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
`;

const PromoDescription = styled.p`
  font-size: 24.588px;
  font-weight: 200;
  line-height: 42.2914px;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
`;

const PromoButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4A5AF9;
  color: white;
  text-decoration: none;
  border: 2px solid transparent;
  transition: background-color 0.3s, border-color 0.3s, opacity 0.3s;
  border-radius: 3px;

  &:hover {
    background-color: transparent;
    border-color: blue;
    opacity: 0.7;
    color: blue;
  }
`;

const JoinSection = ({ videoSrc, overlayImage }) => {
  return (
    <Section>
      <Row>
        <Columny>
          <VideoContainer>
            <video controls>
              <source type="video/mp4" src={videoSrc} />
            </video>
            <VideoOverlay overlayImage={overlayImage}>
              <VideoPlayButton href="#" className="et_pb_video_play"></VideoPlayButton>
            </VideoOverlay>
          </VideoContainer>
        </Columny>
        <Column orderOnSmallScreen={true}>
          <PromoContainer>
            <PromoHeader>Join The Uncommon Community.</PromoHeader>
            <PromoDescription>
              Our Donors believe everyone should have access to high-quality technology education & employment opportunities. Let’s close the access gap together.
            </PromoDescription>
            <NavLink className="nav-link" to="/Donate" exact>

            <PromoButton href="" data-trigger-click="donate">Donate Today</PromoButton>
            </NavLink>

          </PromoContainer>
        </Column>
      </Row>
    </Section>
  );
};

export default JoinSection;