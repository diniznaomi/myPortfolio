import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import HeroOne from "../components/HeroOne";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

export default function Index(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        const now = new Date();
        const currentHour = now.getHours();
        console.log(now)
        if(currentHour >= 18 || currentHour < 6){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.add('light');
        }
        
      }, []);
    return(
        <>
            <Navbar/>
            <HeroOne/>
            {/* <AboutUs/> */}
            <Services/> 
            <CTABanner/>
            <Experience/>
            <Projects/>
            {/* <Clients/> */}
            {/* <Blogs/> */}
            <GetInTouch/>
            <Footer/>
        </>
    )
}