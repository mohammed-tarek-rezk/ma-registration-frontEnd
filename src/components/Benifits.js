import React from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import { FaBook } from "react-icons/fa";
import { IoGitNetwork } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import Benfit from './Benfit';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
function Benifits() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from(".benefits-box", {
          xPercent: -100, 
          duration:1,
          scrollTrigger:".benefits-cont"
        })
      },[])

    const benfits = [
        {id:1 , title: "Workshops" ,des: "Learn from industry experts in hands-on sessions" ,icon: FaBook },
        {id:2 , title: "Networking Opportunities", des: "Connect with professionals and like-minded peers." , icon: IoGitNetwork},
        {id:3 , title: "Career Development", des: "Access internships, mentorships, and career guidance." , icon: FaBriefcase }
    ]
  return (
    <div className='bg-blue-50 py-12'>
        <Container className="benefits-cont">
            <SectionHeader title={"Benefits"}/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 benefits-box'>
                {benfits.map((el)=> <Benfit benfit={el} key={el.id}/>)}
            </div>
        </Container>
    </div>
  )
}

export default Benifits