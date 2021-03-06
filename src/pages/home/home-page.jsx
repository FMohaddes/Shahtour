import React from 'react'
import styled from "styled-components";
import Header from "./components/header";
import { PageAnimation } from "../../styles/animations/animations";
import { motion } from "framer-motion";
import About from "./components/about";
import Features from "./components/features";
import LatestToursSlider from "../../containers/tours/latestToursSlider/latest-tours.slider";
import LatestPosts from "../../containers/blog/latestTours/latest-posts";
import Stories from "./components/stories";
import TourGuide from "./components/tour-guide";

function HomePage() {
     return (
               <$HomePageGrid variants = { PageAnimation } initial = "hidden" animate = "show">
                    <Header />
                    <About/>
                    <Features/>
                    <LatestPosts/>
                    <LatestToursSlider/>
                    <Stories/>
                    <TourGuide/>
                    
               </$HomePageGrid >
     );
}

export default HomePage;


export const $HomePageGrid = styled(motion.div)`
     display               : grid;
     grid-template-columns :minmax(3rem, 8rem) 1fr minmax(3rem, 8rem) ;
     grid-row-gap          : 18rem;
     grid-column-gap       : 1rem;
     overflow              : hidden;
     position              : relative;
     @media only screen and (max-width : 50em) {
          grid-row-gap          : 11rem;

          }
`
