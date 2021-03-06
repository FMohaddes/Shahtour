import styled , { css } from "styled-components";

const ff = css`
     font-family : 'Playfair Display', serif;
`

export const H1_lg = styled.h1`
     font-weight : 900;
     font-size   : 9rem;
     ${ ff }
     @media only screen and (max-width : 50em) {
     font-size   : 7rem;

     }
     
`

export const H1 = styled.h1`
     font-weight : 900;
     font-size   : 5rem;
     ${ ff }
`

export const H2 = styled.h2`
     font-weight : bold;
     font-size   : 4rem;
     ${ ff }

`

export const H3 = styled.h3`
     font-weight : 900;
     font-size   : 3rem;
     
     ${ ff }

`

export const H4 = styled.h4`
     font-weight : 900;
     font-size   : 2rem;
     ${ ff }

`


export const BodyIntro = styled.p`
     font-weight : 500;
     font-size   : 24px;
     line-height : 140%;
`


export const LargeText = styled.p`
     font-weight : 900;
     font-size   : 3.3rem;
     line-height : 140%;
     ${ ff }
`


export const MediumText = styled.p`
     font-weight : normal;
     font-size   : 1.7rem;
     line-height : 155%;

`


export const Caption = styled.p`
     font-weight : 400;
     font-size   : 1.5rem;
     line-height : 1.8rem;
`


export const SmallText = styled.p`
     font-weight : normal;
     font-size   : 1.3rem;
     line-height : 150%;
     z-index: 33;
`

export const MediumSpan = styled.span`
     font-weight : 300;
     font-size   : 1rem;
     font-family : 'Raleway', sans-serif;
     line-height : 130%;
     @media only screen and (max-width : 50em) {
          font-size   : .8rem;

          }
`

