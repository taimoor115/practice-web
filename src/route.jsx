import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
export default route;
