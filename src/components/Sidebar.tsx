import { IoColorPalette } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({
  opened,
  handleOnClick,
}: {
  opened: boolean;
  handleOnClick: () => void;
}) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-16 flex flex-col space-y-4 items-center justify-start bg-pink-300 text-white text-2xl transform transition-transform duration-300 ease-in-out z-10 ${
          opened ? "translate-x-0" : "-translate-x-full"
        }`}
        data-test="sidebar"
      >
        <Link
          to="/"
          className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-pink-300 hover:bg-white mt-2"
        >
          <IoColorPalette />
        </Link>
        <a
          href="https://x.com/yeoubibim"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-pink-300 hover:bg-white"
        >
          <BsTwitterX />
        </a>
      </aside>
      <div
        className={`fixed top-2 left-0 transition-all duration-300 z-20 ${
          opened ? "ml-16" : "ml-0"
        }`}
        onClick={handleOnClick}
        data-test="sidebar-button"
      >
        <div className="bg-pink-300 h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-tr-md rounded-br-md shadow-md">
          {opened ? <FaArrowLeft /> : <FaArrowRight />}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
