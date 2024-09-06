import { createSlice } from "@reduxjs/toolkit";
import it from "./../../images/landing/it.jpg"
import hr from "./../../images/landing/hr.jpg"
import { IoCodeSlash } from "react-icons/io5";
let landingData = [
    {title: "IT", fullTitle: "Information Technology Team" , role: "Building and maintaining chapter website & Marketing or events through our website." , img: it, link: "/", icon: IoCodeSlash },
    {title: "Academy", fullTitle: "Academy Team" , role: "Achieving real technical support for students to achieve academic excellence Providing technical articles and reports for publicity. Provide members metallurgy references" , img: it, link: "/", icon: IoCodeSlash },
    {title: "HR", fullTitle: "Human resources segment" , role: "Human Resources Management is defined as the management of the workforce of members in the different committees of the chapter. It is specialized in attracting members, selecting them, conducting work interviews, training, evaluating and rewarding them, and ensuring compliance with the labor laws set by the chapter's leaders." , img: hr, link: "/", icon: IoCodeSlash },
]

let landingSlice = createSlice({
    name: "landingSlice", 
    initialState: landingData
})

export default landingSlice.reducer