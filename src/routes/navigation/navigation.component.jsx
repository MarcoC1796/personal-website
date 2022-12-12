import { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import NavbarSections from "../../components/navbar-sections/navbar-sections.component";

import { ReactComponent as Logo } from "../../assets/computer-icon.svg";
import pdf from "../../assets/resume.pdf";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const setIsNavExpandedHandler = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 w-full z-20 top-0 left-0 border-b dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <Logo
              className="h-6 mr-3 sm:h-9 fill-blue-700"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Marco Chacon
            </span>
          </Link>
          <div className="flex lg:order-2">
            <a
              href={pdf}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              RESUME
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={setIsNavExpandedHandler}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <NavbarSections isNavExpanded={isNavExpanded} />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
