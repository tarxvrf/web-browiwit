
import About from "@/components/about";
import Hero from "@/components/Hero";
import Portofolio from "@/components/portofolio";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from "lucide-react";
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

    <div className="mt-20 ">
  <Hero/>
  <About/>
  <Portofolio/>
    
    
    </div>
   
  );
}
