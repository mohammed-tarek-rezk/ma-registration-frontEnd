import React, { useState, useEffect, useRef } from "react";import SectionHeader from '../SectionHeader'
import Container from '../Container'
import { useSelector } from 'react-redux'
import LandingSlide from '../LandingSlide'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallCom from "./SmallCom";
import SubHeader from "../SubHeader";
function HomeCom() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  let Communities = useSelector((state)=> state.communities)
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  let smallSetting = {

  }
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div>
      <SectionHeader title="Our Communities" />
      <SubHeader>
        discover your self 
      </SubHeader>
      <Container >
      <Slider  asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} className="my-8">
        {Communities.map((el)=> <LandingSlide slide={el}/>)}
        </Slider>
      <Slider  asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        {...smallSetting}>
        {Communities.map((el)=> <SmallCom slide={el}/>)}
        </Slider>
      </Container>

    </div>
  )
}

export default HomeCom