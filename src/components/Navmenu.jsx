
import Themechanger from "./Themechanger";
import List from "./menudropdown/List";
import { useState } from "react";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";

export default function Navmenu() {
  const [show, setShow] = useState('flex flex-row gap-3');
  
  return (
    <div className="fixed top-0 z-50 w-full bg-black border rounded-b-xl">
      <div className="flex justify-between items-center py-3 px-3 pr-3">
        <div className={` hidden sm:block sm:order-2 `}>       
          <List posisi={show}/>         
        </div>
        <div className="order-2 sm:order-1 mx-3 ">
          <button className="btn btn-outline btn-warning text-xl ">Logo</button>
        </div>
        <div className="flex gap-2 order-3 items-center">
          <badge className=" text-white rounded-md border border-teal-400 px-1 text-xs">
            SignIn
          </badge>
          <badge className="rounded-md border border-teal-400 px-1 text-xs text-white">
            SignUp
          </badge>
          <Themechanger />
        </div>
        <div className="order-1 sm:hidden">
          <details className="dropdown">
            <summary className="btn m-1" onClick={()=>setShow('flex flex-col gap-3')}><GiHamburgerMenu/></summary>
            <ul className="menu dropdown-content bg-base-200 z-[1] rounded-box w-56">
              <List posisi={show}/>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}
