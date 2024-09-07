import { createSlice } from "@reduxjs/toolkit";
import it from "./../../images/landing/it.jpg";
import hr from "./../../images/landing/hr.jpg";
import { IoCodeSlash } from "react-icons/io5";

let communitiesData = [
  {
    id: 1,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: it,
    link: "/communities/1",
    icon: IoCodeSlash,
  },
  {
    id: 2,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/2",
    icon: IoCodeSlash,
  },
  {
    id: 3,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/3",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },
  {
    id: 4,
    title: "IT",
    fullTitle: "Information Technology Team",
    role: "Building and maintaining chapter website & Marketing or events through our website.",
    Vision: `“To be a catalyst for growth and innovation”
To cultivate a learning-focused IT team that thrives on curiosity, innovation, and continuous 
development.
My vision is to create an environment where every team member is encouraged and 
supported to grow their expertise, explore new technologies, and contribute to our 
collective success. By prioritizing education and skill development, I aim to build a 
dynamic team capable of adapting to technological advancements and driving the chapter 
towards sustained excellence.
`,
manager: "Mohamed Tarek Rezk",
sections:[
    {title: "Website" , role: "Learn how to use modern technologies to make modern websites" , head: "mo anwar" },
    {title: "data Science" , role: "Learn how to use modern technologies to maintain data" , head: "abdelrahman " }
]
,
    img: hr,
    link: "/communities/4",
    icon: IoCodeSlash,
  },


];

let communitiesSlice = createSlice({
  name: "communitiesSlice",
  initialState: communitiesData,
});


export default communitiesSlice.reducer