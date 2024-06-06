import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/root";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import RealEstateDetails from "../../pages/home/real estate card/RealEstateDetails";
import PrivetRoute from "../private route/PrivateRoute";
import Review from "../../pages/review/Review";
import ErrorPage from "../../error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/review",
        element: (
          <PrivetRoute>
            <Review />
          </PrivetRoute>
        ),
      },
      {
        path: "/RealEstateDetails/:id",
        element: (
          <PrivetRoute>
            <RealEstateDetails />
          </PrivetRoute>
        ),
        loader: () => fetch("/real-estate.json"),
      },
    ],
  },
]);

export default router;
