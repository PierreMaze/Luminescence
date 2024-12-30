import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/RootIndex.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>
);
