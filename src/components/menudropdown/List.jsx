import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function List({posisi}) {  
    const path =usePathname()
    const pages=[
        { link:'/',paging:'Home'},
        {link:'/about',paging:'About'},
        {link:'porto',paging:'Porto'}
        ]

  return (
    <div > 
      <ul className={posisi}>    
         {pages.map((val,index)=>
        <Link href={val.link}>{path === val.link ? (<li key={index} className="text-yellow-400">{val.paging}</li>):(<li className="text-white">{val.paging}</li>)}</Link>
        )}    
       </ul>  
    </div>
  );
}
