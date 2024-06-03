import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products/:id", element: <ProductDetail /> },
    ],
  },
]);
export default route;
