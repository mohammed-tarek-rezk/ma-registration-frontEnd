import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderLinkIcon from "./HeaderLinkIcon";
import img from "./../images/ma-logo.png"
import validator from "validator";
import axios from "axios";
function ContactUs() {
    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [message , setMessage] = useState("")
    let [submiting , setSubmiting] = useState(false)
    let [subject , setSubject] = useState("")
    let [errors , setErrors] = useState([])
    let [done , setDone] = useState(false)
  let nav = useSelector((state) => state.navLink);
    console.log(errors.find((el)=> el.id === 0))
  const submitHandler = (e)=>{
    e.preventDefault();
    setSubmiting(true)
    //geting data 
    let theName = name.trim().toLowerCase()
    let theEmail = email.trim().toLowerCase()
    let theSubject = subject.trim().toLowerCase()
    let theMessage = message.trim().toLowerCase()
    //validating data
    let errors = []
    //validaing name
    if(validator.isEmpty(theName)){
        errors.push({id: 0 , message: "Name is Required.........."})
    }
    if(!/\w{2,}\s\w+/.test(theName)){
        errors.push({id: 1 , message: "Enter your full Name........."})
    }
    //validaing Email
    if(validator.isEmpty(theEmail)){
        errors.push({id: 2 , message: "Email is Required.........."})
    }
    if(!validator.isEmail(theEmail)){
        errors.push({id: 3 , message: "Enter your Email correctly........."})
    }
    //subject validator
    if(validator.isEmpty(theSubject)){
        errors.push({id: 4 , message: "Subject is Required.........."})
    }
    //message validator
    if(validator.isEmpty(theMessage)){
        errors.push({id: 5 , message: "message is Required.........."})
    }

    if(errors.length > 0){
        setErrors(errors);
        setSubmiting(false)
        return;
    }

    try{
        axios.post("https://sheet.best/api/sheets/83d35a20-fed7-4dd7-8da3-b55019e17ebd", {name , email , subject , message}).then(()=> {
            setDone(true);
            setTimeout(() => {
                setDone(false)
            }, 1000);
            document.querySelectorAll("form input").forEach((el)=>{
                el.value = ""
            })
            document.querySelector("textarea").value = ""
            setSubmiting(false)
            setErrors([])
        }).catch(()=> {setErrors([{id: 6 , message: "try again with valid data" }]); setSubmiting(false)})
    }catch{
        setErrors([{id: 6 , message: "try again with valid data" }])
        setSubmiting(false)
    }

  }
  return (
    <div>
      <SectionHeader title="Contact Us" />
      <div className="mt-6 ">
        <div
          className="grid relative overflow-hidden contact-words sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]"
          style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
        >
          <div className="layout"></div>
          <div className="relative z-10">
            <h1 className="text-main text-3xl font-extrabold">contact Us</h1>
            <p className="text-sm text-gray-500 mt-4">
              Whether you have questions, feedback, or need support, feel free
              to reach out to us. Fill out the form below, and we’ll get back to
              you as soon as possible.
            </p>

            <div className="mt-12">
              <h2 className="text-main text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#e6595c"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <Link
                    to={"mailto:materialadvantagesu@gmail.com"}
                    className="text-submain text-sm ml-4"
                  >
                    <small className="block">Mail</small>
                    <strong>materialadvantagesu@gmail.com</strong>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-main text-base font-bold">Socials</h2>
              <div className="flex gap-3 my-3">
                {nav.map((el) => (
                  <HeaderLinkIcon link={el.link} title={el.title} />
                ))}
              </div>
            </div>
          </div>

          <form className="ml-auo relative z-10 space-y-4" onSubmit={submitHandler}>
              <div className="text-submain text-sm -mt-4">{errors?.find((el)=> el.id === 6)?.message}</div>
            <input
              type="text"
              placeholder="Name"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 focus:outline-none text-sm "
              onChange={(e)=> setName(e.target.value)}
            />
            <div className="text-submain text-sm -mt-4">{errors?.find((el)=> el.id === 0)?.message || errors?.find((el)=> el.id === 1)?.message}</div>
            <input
              type="text"
              placeholder="Email"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none"
              onChange={(e)=> setEmail(e.target.value)}
            />
            <div className="text-submain text-sm -mt-4">{errors?.find((el)=> el.id === 2)?.message || errors?.find((el)=> el.id === 3)?.message}</div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none"
              onChange={(e)=> setSubject(e.target.value)}
            />
            <div className="text-submain text-sm -mt-4">{errors?.find((el)=> el.id === 4)?.message}</div>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none"
              onChange={(e)=> setMessage(e.target.value)}
            ></textarea>
            <div className="text-submain text-sm -mt-4">{errors?.find((el)=> el.id === 5)?.message}</div>
            <button
              type="submit"
              
              className={`text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6 ${submiting? " pointer-events-none":""} `}
            >
              {submiting ? "submitting.........": "send"}
            </button>
            {done && <div className="bg-white px-1 py-1 rounded-lg text-green-900"> data sended successfully..... </div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
