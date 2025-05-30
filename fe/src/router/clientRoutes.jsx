import Home from "../pages/client/Home";
import Contact from "../pages/client/Contact";
import About from "../pages/client/About";

const clientRoutes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
];

export default clientRoutes;
