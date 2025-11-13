import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Specialties from "./pages/Specialties.jsx";
import Doctors from "./pages/Doctors.jsx";
import Booking from "./pages/Booking.jsx";
import Services from "./pages/Services.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,           // khung chung (Header, Footer)
    children: [
      { index: true, element: <Home /> },         // /
      { path: "/gioi-thieu", element: <About /> }, // /gioi-thieu
      { path: "/lien-he", element: <Contact /> },
      { path: "/dang-nhap", element: <Login /> },
      { path: "/dang-ky", element: <Register /> },
      { path: "/chuyen-khoa", element: <Specialties /> },
      { path: "/bac-si", element: <Doctors /> },
      { path: "/dat-lich-kham", element: <Booking /> },
      { path: "/dich-vu", element: <Services /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
