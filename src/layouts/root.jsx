import { Outlet } from "react-router-dom";
import NavBar from "../pages/navigation bar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
