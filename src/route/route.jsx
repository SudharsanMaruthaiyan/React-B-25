import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import ProductDetail from "../pages/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact/Contact";
import ImagePage from "../pages/ImagePage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // navbar , footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/productdetail/:produtId", // /productDetail/asdfasdf
        element: <ProductDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/imagepage",
        element: <ImagePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Route;
