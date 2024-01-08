import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
display:flex;
flex-direction:row;
padding :80px;
@media (min-width: 1130px) {
    padding-left:revert-layer;
    padding-top:revert-layer;
padding-right:150px;
padding-bottom:revert-layer;
}
@media (max-width: 1030px) {
  flex-direction: column;
  padding:30px;}
.right{
    @media (min-width: 1130px) {
        padding-top:130px;
    }
h1{
    @media (max-width: 400px) { font-size: 31px;}
    font-size: 50px;

font-weight: 700;

line-height: 73.1px;

color: rgb(0, 0, 0);

}
p{
    font-size: 20px;

font-weight: 250;

line-height: 36px;
color: rgb(0, 0, 0) ;
}
}
.leen{margin-top:60px;
margin-bottom:30px;}  
.left{
    img{
        @media (min-width: 1100px) {
        width:100%;
        height:100%;
    }
        @media (max-width: 1028px) {
        width:960px;
        height:800px;}
        
        @media (max-width: 900px) {
        width:700px;
        height:600px;}
        @media (max-width:669px){
            width:606px;
    height:573px;
        }
        @media (max-width: 400px) {
            width:300px;
        height:200px; 
        }
    }
}
.left{
    @media (min-width: 1100px) {
        width:1260px;
        height:700px;
    padding-right:75px;}
}
`;


const Donts = () => {
    return (
        <Wrapper>
            <div className = 'left'>
            <img className='se' src = 'https://uncommon.org/wp-content/uploads/2021/08/Two-kids-Focusing-Gillingham-1.png'/>
            </div>
            <div className = 'right'>
                <h1>We have always been </h1>
                <h1>inspired by the youth.</h1>
                <p className = ' leen '>When we launched our pilot in Zimbabwe at the end of 2017 our goal was singularly focused around teaching kids how to code.We set out to test some initial theories and the results were clear.</p>
                <p>There was (and still is) an overwhelming thirst for technology education, and there was (and still is) a heartbreaking lack of opportunities for youths & young adults in our target communities.</p>
            </div>
        </Wrapper>
        );
};

export default Donts;
