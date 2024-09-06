import { createSlice } from "@reduxjs/toolkit";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
let navMenu = [
    {title: FaFacebookF , link: "https://www.facebook.com/" },
    {title: FaTwitter , link: "https://www.facebook.com/" },
    {title: FaLinkedinIn , link: "https://www.facebook.com/" },
    {title: FaInstagram , link: "https://www.facebook.com/" },
]

const navLinkSlice = createSlice({
    name: "navLinkSlice",
    initialState: navMenu,
    reducers:{

    }
})


export default navLinkSlice.reducer