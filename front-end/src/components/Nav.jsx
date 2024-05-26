import React, { useState } from "react";

const Nav = (props) => {
  const { li } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/png;base64,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"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lunch Management
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {li.map((item) => (
              <li>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  sessionStorage.clear();
                  window.location.href = "/"; // Redirect to '/'
                }}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
