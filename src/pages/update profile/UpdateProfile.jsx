import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { updateGivenProfile, user } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const URL = form.get("url");

    updateGivenProfile(name, URL, user)
      .then((result) => {
        console.log(result);
        toast("Update has been made");
      })
      .catch((error) => {
        console.log(error.message);
        location.reload();
        toast("failed to update");
      });
  };
  console.log(user);
  return (
    <div className="bg-[#F3EFE7] w-[390px] md:w-[600px] h-[550px] mx-auto rounded-xl p-6 mt-16">
      <ToastContainer />
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <form onSubmit={handleChange}>
        <h1 className="text-2xl text-center">
          You can update your profile here
        </h1>
        <div className="flex flex-col  space-y-6 mt-6">
          <label className="font-bold text-2xl">
            Display Name : {user?.displayName}
          </label>
          <input
            autoComplete="username"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Update your display name here"
            type="text"
            name="name"
            required
          />
          <label className="font-bold text-2xl">
            your profile picture :{" "}
            <img
              className="mt-6 w-[80px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </label>

          <input
            autoComplete="new-password"
            className="md:w-[400px] w-[290px] rounded-lg px-3 py-2"
            placeholder="Paste your photo URL"
            type="url"
            name="url"
            required
          />
          <button className="btn w-[290px] bg-emerald-800 text-white text-xl">
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
