import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;
