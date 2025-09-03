// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import BusSeatSelection from "./pages/BusSeatSelection";
import Payment from "./pages/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bus-seat-selection",
    element: <BusSeatSelection />,
  },
  {
    path: "/payments",
    element: <Payment />,
  },
]);

export default router;
