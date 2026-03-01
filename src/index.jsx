import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Counter from "./components/Counter";
import HeroSection from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";

const headingReactElement = React.createElement(
  "h1",
  { id: "red" },
  "Hello world developer",
); // <h1>Hello World </h1>

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductSection />
    </div>
  );
};

const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductDetail = () => {
  const data = useParams();

  console.log("ParamsData:", data.produtId);

  return (
    <>
      <h2>Product Details</h2>
    </>
  );
};

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
    ],
    errorElement: <ErrorPage />,
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={Route} />);
