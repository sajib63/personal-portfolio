import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="text-white font-semibold">
        <Link>Home</Link>
      </li>
      <li className="text-white font-semibold">
        <Link>About</Link>
      </li>
      <li className="text-white font-semibold">
        <Link>Blog</Link>
      </li>
      <li className="text-white font-semibold">
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className=" normal-case text-sm lg:text-2xl font-bold text-white">
            Sajib-Ahmed
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                label="sajib"
                alt=""
                src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/318690115_1572236959886443_7279758709101451455_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEPPzesahF7vi8mw590W5CykGuWtJF-QpCQa5a0kX5CkB15wPgU-P-WU-_9350sktqY4rWR0nyMCXV8j2c7v5Ay&_nc_ohc=AwDcWy9GOxUAX87csEx&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBiEybWNqQc1AHoEGLw1_jZKnFAshGIlxAw58ifmSco6w&oe=6398984F"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
