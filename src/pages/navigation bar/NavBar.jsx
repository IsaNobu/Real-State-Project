// import PropTypes from 'prop-types';
import { IoCallOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>Update Profile</NavLink>
      <NavLink to={"/"}>Login</NavLink>
    </>
  );
  return (
    <div className="navbar bg-emerald-900 text-white">
      <div className="navbar-start">
        <div>
          <ul className="space-x-6 font-medium">{NavLinks}</ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="text-2xl font-bold">LandLegacy</Link>
      </div>
      <div className="navbar-end space-x-6">
        <p className="font-bold">Contact</p>
        <p className="font-bold flex items-center">
          <IoCallOutline />
          +1 800-555-6789
        </p>
      </div>
    </div>
  );
};

// NavBar.propTypes = {

// };

export default NavBar;
