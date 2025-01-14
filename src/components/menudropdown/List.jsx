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
        <li key={index}><Link href={val.link}>{path === val.link ? (<div className="text-yellow-500">{val.paging}</div>):(<span className="text-white">{val.paging}</span>)}</Link></li>
        )}    
       </ul>  
    </div>
  );
}
