
import About from "@/components/about";
import Hero from "@/components/Hero";
import Portofolio from "@/components/portofolio";
import Sponsor from "@/components/sponsor";
import Sponsorship from "@/components/Sponsorship";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function index() {
useEffect(()=>{
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    delay:50
    });
})

  return (

    <div className="px-3 mt-20 ">
  
    <Hero/>   
    <Sponsorship/> 
    <About/>
    <Portofolio/>
    
    </div>
   
  );
}
