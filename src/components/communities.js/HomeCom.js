import React, { useState, useEffect, useRef } from "react";import SectionHeader from '../SectionHeader'
import Container from '../Container'
import { useSelector } from 'react-redux'
import LandingSlide from '../LandingSlide'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubHeader from "../SubHeader";
import { Link } from "react-router-dom";
function HomeCom() {

  let Communities = useSelector((state)=> state.communities)
  const settings = {
    className: "slider variable-width ",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div>
      <SectionHeader title="Our Communities" />
      <SubHeader>
        discover your self 
      </SubHeader>
      <div className="my-4">
        <Container>
        <Slider  {...settings} className="my-8  w-full">
          {Communities.map((el)=> <LandingSlide slide={el}/>)}
          </Slider>
          <div>
            <h2 className="text-xl my-4 font-bold">All communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {Communities.map((el)=>(
                <Link to={el.link} className=" overflow-hidden block rounded-lg bg-[#EAFAFD] shadow-md hover:scale-105 transition-all">
                  <img src={el.img} alt="" className="object-cover" />
                  <div className="p-3">
                    <p className='px-5 py-1 bg-white w-fit rounded-full shadow-sm my-3 flex gap-2 justify-center items-center text-base font-bold text-main  line-clamp-1'>{<el.icon />}{el.title}</p>
                    <h4 className="my-3 font-bold truncate">{el.fullTitle}</h4>
                    <p className="my-3 h-[80px] line-clamp-4 text-sm text-gray-400">{el.role}</p>
                  </div>
              </Link>
            ))}
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default HomeCom