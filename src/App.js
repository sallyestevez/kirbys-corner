import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Styling & Components
// import logo from "./logo.svg";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import Home from "./pages/Home";
import Characters from "./pages/character-pages/Characters";
import Games from "./pages/game-pages/Games";

// Layout component for scroll-to-top
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "index",
          element: <Home />,
        },
        {
          path: "games",
          element: <Games />,
        },
        {
          path: "characters",
          element: <Characters />,
        },
        // {
        //   path: "quiz",
        //   element: <Quiz />,
        // },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
