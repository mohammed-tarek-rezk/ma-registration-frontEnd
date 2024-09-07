import React, { useState } from "react";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import Container from "./Container";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SubHeader from "./SubHeader";
function ModifiedCom() {
  let menu = useSelector((state) => state.communities);
  let [swiper, setSwiper] = useState();
  let [activeSlide, setActiveSlide] = useState(1);
  const NextCustom = () => {
    return <button className=".next">{<FaArrowRight />}</button>;
  };
  const PrevCustom = () => {
    return <button className=".pervious">{<FaArrowLeft />}</button>;
  };
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(".slider", {
        y: 100,
        duration: 1,
        opacity:0,
        scrollTrigger:{
            trigger: ".slider",
            start: "top bottom"
        }
    })
  },[])


  return (
    <Container className="communities overflow-hidden">
        <SectionHeader title="Communities"/>
        <SubHeader>
            Know more about out communities
        </SubHeader>
      <Swiper
        className="h-[500px] container rounded-lg overflow-hidden slider mt-10 "
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".pervious",
          nextEl: ".next",
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        pagination={{ clickable: true }}
        onSlideChange={() => setActiveSlide(swiper.activeIndex + 1)}
      >
        {menu.map((slide) => (
          <div className="w-full">
            <SwiperSlide>
              <div className="w-full h-full  rounded-xl overflow-hidden" style={{backgroundImage: `url(${slide.img})` , backgroundSize: "cover"}}>
              <div className='layout'></div>
              <div className="relative p-3 md:p-5 z-10 flex flex-col gap-5 justify-center h-full w-full">
                <p className='px-5 py-1 bg-white w-fit rounded-full shadow-sm flex gap-2 justify-center items-center text-base font-bold text-main'>{<slide.icon />}{slide.title}</p>
                <p className='text-3xl md:text-4xl font-bold text-submain'>{slide.fullTitle}</p>
                <p className="text-gray-200">{slide.role}</p>
                <Link to={slide.link} className='block px-4 border-2 border-white rounded-lg py-1 text-white font-bold hover:bg-main hover:text-white transition-all w-fit my-5'>Read More</Link>
              </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="custom-navigation flex items-center gap-3 justify-end p-5">
          <div onClick={() => swiper.slidePrev()}>
            <PrevCustom />
          </div>
          <div className="w-[80px] text-center">
            {activeSlide} / {menu.length}
          </div>
          <div onClick={() => swiper.slideNext()}>
            <NextCustom />
          </div>
        </div>
    </Container>
  );
}

export default ModifiedCom;
