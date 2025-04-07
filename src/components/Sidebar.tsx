import { IoColorPalette, IoPersonSharp } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidebar({
  opened,
  handleOnClick,
}: {
  opened: boolean;
  handleOnClick: () => void;
}) {
  return (
    <div className="h-screen relative flex overflow-hidden">
      {/* Sidebar with transition */}
      <aside
        className={`h-full w-16 flex flex-col space-y-4 items-center justify-start absolute left-0 top-0 z-10 bg-pink-300 text-white text-2xl transform transition-transform duration-300 ease-in-out ${
          opened ? "translate-x-0" : "-translate-x-full"
        }`}
        data-test="sidebar"
      >
        <Link
          to={"/"}
          className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-pink-300 hover:bg-white mt-2"
        >
          <IoColorPalette />
        </Link>
        <Link
          to={"/contact"}
          className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-pink-300 hover:bg-white"
        >
          <IoPersonSharp />
        </Link>
      </aside>
      <div
        className={`bg-pink-300 h-10 w-10 flex items-center justify-center cursor-pointer text-white mt-2 transition-all duration-300 z-20 ${
          opened ? "ml-16" : "ml-0"
        }`}
        onClick={handleOnClick}
        data-test="sidebar-button"
      >
        {opened ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
    </div>
  );
}
export default Sidebar;
