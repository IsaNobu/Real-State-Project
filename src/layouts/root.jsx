import { Outlet } from "react-router-dom";
import NavBar from "../pages/navigation bar/NavBar";
import Footer from "../pages/footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
