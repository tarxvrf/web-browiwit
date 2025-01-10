import Menu from "@/components/menudropdown/Menu";

export default function Navmenu() {
  return (
    <div className="fixed w-full top-0 z-50 mx-auto sm:mb-3 outline outline-1 rounded-lg outline-cyan-300 bg-base-300">
      <div className="flex justify-between py-3 pr-3"> 
        <div className="px-3 order-1 sm:order-2 ">
          <Menu />
        </div>
        <div className="order-2 sm:order-1 mx-3 ">
          <button className="btn btn-outline btn-warning text-xl ">Logo</button>
        </div>
        <div className="flex gap-2 order-3">
          <button className="rounded-md border border-teal-400 p-1 text-xs">
            SignIn
          </button>
          <button className="rounded-md border border-teal-400 p-1 text-xs">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
