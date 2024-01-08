import React from 'react';
import styled from 'styled-components';

const Section = styled.section`

  background-color: #f2f3ff;
  padding: 55px 0px;
  @media(max-width:400px){
    padding: 55px 25px;
  }
  .main {
    display: flex;
    flex-direction: column-reverse; 
    max-width: 1200px;
    margin: 0 auto;
    @media(min-width:1200px){
      margin: 0 70px;
      padding:40px 0;
    }
  
  }

  .straight {
    flex: 1;
    width: 100%;
    margin-bottom: 20px;
    @media(min-width:1138px){
    margin-right:60px;}
  }

  .text {
    text-align: left;
    margin-top: 20px;
    @media(min-width:1438px){
        margin-top: 60px;
  }
  }

  h3 {
    color: #333;
    font-size: 1.5rem;
    padding-bottom: 5px;

  }

  h2 {
    @media(min-width:1438px){
    font-size: 2rem;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.2;
    color: rgb(0, 0, 0);}

    @media(min-width:1430px){  font-size: 54.64px;
    font-weight: 700;
    padding-top: 20px;
    line-height: 79.8837px;}
        font-size: 54.64px;
    font-weight: 700;
    padding-top: 20px;
    line-height: 79.8837px;
    @media(max-width:1060px){font-size: 2rem;
    font-weight: 700;
    padding-top: 10px;
    line-height: 1.2;
    color: rgb(0, 0, 0);}
    
  
  }

  p {
    @media(min-width:1438px){
    padding-top: 10px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: rgb(0, 0, 0); }
    @media(min-width:1430px){padding-top: 15px;
    font-size: 24.588px;
    font-weight: 300;
    line-height: 44.2584px;}
    padding-top: 15px;
    font-size: 23.588px;
    font-weight: 300;
    line-height: 44.2584px;
    @media(max-width:1060px){ padding-top: 10px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: rgb(0, 0, 0); }

  }

  .videoyacho {
    position: relative;
    margin-top: 20px;
    @media(min-width:1438px){
          margin-top: 55px;
    }
  }

  .videochacho {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  video {
    width: 100%;
    @media(max-width:400px){
   
    }
    height: auto;
    display: block;
  }

  .video-play {
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .main {
      flex-direction: row;
    }

    .straight {
      flex: 0 0 48%;
      margin-bottom: 0;
    }

    .text {
      margin-top: 0;
      margin-right: 20px;
    }

    .videoyacho {
      margin-top: 0;
    }
  }
`;

const Donts = () => {
  return (
    <Section>
      <div className="main">
        <div className="straight">
          <div className="text">
            <h3>Uncommon Impact</h3>
            <h2>Education =</h2>
            <h2>Earning Power.</h2>
            <p>Our mission is to help unemployed young adults from low-income communities launch their careers in the technology industry.</p>
          </div>
        </div>
        <div className="straight">
          <div className="videoyacho">
            <div className="videochacho">
              <video controls>
                <source type="video/mp4" src="video/mp4" src="https://uncommon.org/wp-content/uploads/2021/09/Tanyas-Uncommon-Story.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Donts;
