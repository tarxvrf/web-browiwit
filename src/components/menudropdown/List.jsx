import { usePathname } from "next/navigation";
import Link from "next/link";

export default function List() {
    const path =usePathname()
    const pages=[
        { link:'/',paging:'Home'},
        {link:'/about',paging:'About'},
        {link:'porto',paging:'Porto'}
        ]

  return (
    <div >
        <ul className="flex flex-row gap-3">
         {pages.map((val,index)=>
        <li key={index}><Link href={val.link}>{path === val.link ? (<div className="text-yellow-500">{val.paging}</div>):val.paging}</Link></li>
        )}
        </ul>
    
    </div>
  );
}
