// router.js
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Single route for now
  },
]);

export default router;
