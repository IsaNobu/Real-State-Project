import { IoCallOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const NavLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>Update Profile</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </>
  );
  return (
    <div className="navbar bg-emerald-900 text-white">
      <div className="navbar-start">
        <div>
          <ul className="space-x-6 font-medium md:block hidden">{NavLinks}</ul>
          <div className="md:hidden">
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-emerald-900 text-white"
              >
                <RxHamburgerMenu />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black space-y-6"
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="text-2xl font-bold">LandLegacy</Link>
      </div>
      <div className="navbar-end space-x-6 md:flex hidden">
        <p className="font-bold">Contact</p>
        <p className="font-bold flex items-center">
          <IoCallOutline />
          +1 800-555-6789
        </p>
      </div>
    </div>
  );
};

export default NavBar;
