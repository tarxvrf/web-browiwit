import Menu from "@/components/menudropdown/Menu";

export default function Navmenu() {
  return (
    <div className="flex justify-center">
      <div className="fixed top-0 z-50 mt-3 sm:mb-3 outline outline-1 rounded-lg outline-cyan-300 bg-base-300">
        <div className="flex items-center flex-row gap-5 justify-between p-3">
          <div className="px-3 order-1 sm:order-2 ">
            <Menu />
          </div>
          <div className="order-2 sm:order-1 ">
            <button className="mx-5 btn btn-outline btn-warning text-xl ">
              Logo
            </button>
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
    </div>
  );
}
