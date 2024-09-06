import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import LandingSlide from './LandingSlide';
import Slider from 'react-slick';

function Landing() {
    let landingData = useSelector((state)=> state.landing)
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true
      };
    

  return (
    <div >
        <Container className="py-6">
        <Slider {...settings}>
        {
            landingData.map((el)=><LandingSlide key={el.title} slide={el} />)
        }
        </Slider>
        </Container>
    </div>
  )
}

export default Landing