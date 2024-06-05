// import PropTypes from 'prop-types';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [passShow, setPassShow] = useState(false);

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, password, name, photo);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      toast("Password must contain at least one uppercase letter.");
      return;
    } else if (!hasLowercase) {
      toast("Password must contain at least one lowercase letter.");
      return;
    } else if (!isLongEnough) {
      toast("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast("You've Successfully registered");
        navigate("/");
      })
      .catch((error) => {
        toast("Please fill up your form carefully");
        console.log(error.message);
      });
  };
  return (
    <div className="bg-[#F3EFE7] w-[390px] md:w-[600px] h-[700px] mx-auto rounded-xl p-6 mt-16">
      <ToastContainer />
      <Helmet>
        <title>Register Here</title>
      </Helmet>
      <ToastContainer />
      <form onSubmit={handleLogin}>
        <h1 className="text-2xl text-center">
          Register here to get our websites full experience !!!
        </h1>

        <div className="flex flex-col items-center space-y-6 mt-6">
          <label>Full Name :</label>
          <input
            autoComplete="username"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Enter your name"
            type="text"
            name="name"
            required
          />

          <label>Enter Email Address :</label>
          <input
            autoComplete="email"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Email"
            type="email"
            name="email"
            required
          />

          <label>Enter a photo URL :</label>
          <input
            autoComplete="photo"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Photo URL"
            type="text"
            name="photo"
            required
          />

          <label>Enter your Password :</label>
          <div className=" relative">
            <input
              autoComplete="new-password"
              className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
              placeholder="Password"
              type={passShow ? "text" : "password"}
              name="password"
              required
            />
            <span
              className="text-2xl absolute left-[365px] top-2 cursor-pointer"
              onClick={() => setPassShow(!passShow)}
            >
              {passShow ? <RiEyeFill /> : <RiEyeCloseLine />}
            </span>
          </div>
          <button className="btn w-[290px] bg-emerald-800 text-white text-xl">
            Register
          </button>
          <p>
            If you already have an account, please{" "}
            <span className="underline underline-offset-4 hover:font-bold">
              <NavLink to={"/login"}>Login</NavLink>
            </span>{" "}
            here
          </p>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
