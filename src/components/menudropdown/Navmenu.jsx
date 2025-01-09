import Image from "next/image";
import Menu from "./Menu";

export default function Navmenu() {
  return (    
    <div className="sticky top-0 container mx-auto mt-5 sm:mb-3 outline outline-1 rounded-lg outline-cyan-300 bg-base-300">
      <div className="flex items-center flex-row gap-5 justify-between pt-5 pb-2">
        <div className="order-1 sm:order-2 ">
          <Menu />
        </div>
        <div className="order-2 sm:order-1 ">
          <button className="mx-5 btn btn-outline btn-warning text-xl ">
            Logo
          </button>
        </div>
        <div className="flex gap-3 px-3 order-3">
          <button className="btn btn-xs btn-warning">Sign In</button>
          <button className="btn btn-xs  btn-warning">Sign Up</button>
        </div>
      </div>
  
</div>
  );
}
