import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
background: #FFFF;
padding:80px;
text-align:center;
@media (max-width: 900px) {padding:30px;}
h1{
    
font-size: 60px;

font-weight: 700;

line-height: 78px;

color: rgb(0, 0, 0);
@media (max-width: 900px) {
    
    line-height: 20px;
    font-size: 30px;
}
}
.yui{
    text-align:left;
   p{
    margin-top:25px;
    font-size: 22px;

font-weight: 250;

line-height: 39.6px;

color: rgb(0, 0, 0);
   } 
}
`;

const First = () => {
    return (
        <Wrapper>
            <h1>Why Uncommon.</h1>
            <div className='yui'>
                <p>While the rest certainly isn’t “history,” that’s enough of our story for now. If you’d like to follow along as we continue to become the organization we believe we can, please consider staying engaged with our mailing & social platforms.</p>
                <p>In closing, it’s important that we just highlight a few things…</p>
                <p>We exist because we believe in the limitless potential of every one of us on this planet. Genius and brilliance is everywhere, opportunity is not. We will always fight for opportunity and representation for all in the technology sector.</p>
                <p>Although we now have a business arm that supports our nonprofit, we are still entirely a charitable organization. We may do work for clients, but there are no shareholders with a pot of gold at the end of the rainbow. Just more kids and young adults, waiting their turn for an opportunity to shine.</p>
                <p>As a team of creatives and entrepreneurs, we have chosen to put impact ahead of profit maximization. Our goal is to apply the best practices of the for-profit sector to augment our mission as a nonprofit.</p>
                <p>We believe that impact as a differentiator will be key to scaling our mission. We believe that the rising generation gets this intuitively.</p>
                <p>Lastly, we will always do our part to better serve humanity and the planet we’ve inherited. We commit to being ethical and environmentally conscious in everything we do. And as optimists and lovers of life, we will always welcome people into our organization, regardless of sexual identity, preference, race, gender, religion, or any other beautiful distinction that makes us all who we are.</p>
                <p>And makes us all, uncommon.</p>
            </div>
        </Wrapper>
        );
    };
    
    export default First;