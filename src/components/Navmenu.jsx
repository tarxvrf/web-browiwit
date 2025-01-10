import Menu from "@/components/menudropdown/Menu";

export default function Navmenu() {
  return (
    <div className="flex justify-center">   
    <div className="fixed w-full top-0 z-50 container mt-3 sm:mb-3 outline outline-1 rounded-lg outline-cyan-300 bg-base-300">
      <div className="flex items-center flex-row gap-5 justify-between p-3">
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
</div>
  );
}
