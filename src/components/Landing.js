import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { FaArrowCircleDown } from "react-icons/fa";
import img1 from "./../images/landing/1.jpg"
import img2 from "./../images/landing/2.jpg"
import img3 from "./../images/landing/3.jpg"
import img4 from "./../images/landing/4.jpg"
import img5 from "./../images/landing/5.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Landing() {
    useGSAP(()=>{
      gsap.from(".landing-images",{
        xPercent: 100, 
        duration:1.5
      })
      gsap.from(".landing-text",{
        opacity:0,
        y: 100,
        duration:1
      })

      gsap.utils.toArray(".landing-images img").forEach((el, index)=>{
        gsap.fromTo(el , {scaleY: 1* index +1 , translateY:0}, {scaleY: 1 ,translateY: (index + 1) % 2 === 0 ? 15 *index + 1 :0  , duration: 1})
      })
    } ,[])
    let images = [
      {id: 1 , src: img1},
      {id: 2 , src: img2},
      {id: 3 , src: img3},
      {id: 4 , src: img4},
      {id: 5 , src: img5},
    ]

  return (
    <div className='bg-blue-50 border-b-2 border-main ' >
        <Container className="py-6 h-[650px] overflow-hidden flex justify-center items-center gap-5 flex-col-reverse lg:flex-row">  
          <div className='landing-text'>
            <h1 className='text-3xl md:text-4xl font-bold mb-3 '><span className='text-base font-normal'>Welcome to the</span> <br/>Material Advantage Suez Student chapter!</h1>
            <p className=' text-gray-500'>Grow your network, enhance your skills, and lead the future</p>
            <h2 className="text-submain my-3">Join us Today!</h2>
            <div >
            <Link to={"/register"} className='btn border-main bg-main text-white hover:bg-white hover:text-main border-2 border-main'>I already regist</Link>
            <Link to={"/register"} className='btn border-2 border-submain text-submain hover:text-white hover:bg-submain'>Register Now</Link>
            </div>
          </div>
          <div className='flex gap-2 lg:gap-4 justify-center landing-images '>
          {images.map((el)=> <img className='w-1/6 lg:w-24 h-[200px] md:h-[300px] lg:h-[480px] object-cover rounded-lg' key={el.id} src={el.src} alt="" />)}
          </div>
            <Link onClick={()=> {window.scrollTo({
              top: 650 ,
              behavior: "smooth"
            })}} className='animate-bounce absolute bottom-5 left-[50%] translate-x-[-50%] text-2xl text-main'><FaArrowCircleDown /></Link>
        </Container>
    </div>
  )
}
 
export default Landing