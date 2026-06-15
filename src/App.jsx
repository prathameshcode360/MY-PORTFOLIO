import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import Homepage from "./Pages/Home/Homepage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
