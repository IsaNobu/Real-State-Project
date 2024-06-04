import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // email login

    signInUser(email, password)
      .then((result) => [console.log(result)])
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-[#F3EFE7] w-[390px] md:w-[600px] h-[500px] mx-auto rounded-xl p-6 mt-16">
      <form onSubmit={handleLogin}>
        <h1 className="text-2xl text-center">
          Login here to get our websites full experience !!!
        </h1>
        <div className="flex flex-col items-center space-y-6 mt-6">
          <label>Enter Email Address :</label>
          <input
            autoComplete="username"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <label>Enter your Password :</label>

          <input
            autoComplete="new-password"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <button className="btn w-[290px] bg-emerald-800 text-white text-xl">
            Login
          </button>
          <div className="flex items-center space-x-8 cursor-pointer">
            <div className="text-4xl" onClick={handleGoogleSignIn}>
              <FaGoogle />
            </div>
            <div className="text-4xl">
              <FaGithub />
            </div>
          </div>
          <p>
            If you do not have an account, please{" "}
            <span className="hover:underline hover:underline-offset-4 hover:font-semibold">
              <NavLink to={"/Register"}>Register</NavLink>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
