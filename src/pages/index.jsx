import Home from "@/components/home";
import About from "@/components/about";
import Portofolio from "@/components/portofolio";
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

    <div className="container mx-auto w-full mt-16 ">
    <Home/>
    <About/>
    <Portofolio/>
    

    </div>
   
  );
}
