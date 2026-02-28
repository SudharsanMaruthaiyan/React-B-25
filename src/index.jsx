import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { ProductCard, ProductSection } from "./components/ProductSection";
import Counter from "./components/Counter";
import Comments from "./components/Comments";

const headingReactElement = React.createElement(
  "h1",
  { id: "red" },
  "Hello world developer",
); // <h1>Hello World </h1>

// They are introducing JSX
// JSX => HTML in JS ( HTML like syntax ) => ( xml like systax )

const paraElement = <h1>Hello para...</h1>;

// Browser understand JS
// Browser understand JSX

// babel.js                           // Browser
// JSX => React.createElement()  ==> JS object

const Layout = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("Ram");

  const [valid, setValid] = useState("true");

  useEffect(() => {
    console.log("useEffect Called");
    setCount(count + 1); // render
  }, [name, valid]);

  console.log(count);
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductSection />
      {/* <h1>Count {count}</h1>
      <p>ParaElement</p>
      <h1>Name: {name}</h1>
      <button
        onClick={() => {
          setName("Sam");
        }}
      >
        Change
      </button>
      <h2>{valid}</h2>
      <button
        onClick={() => {
          setValid("false");
        }}
      >
        Update
      </button> */}
      {/* <Counter />
      <Comments /> */}
      <Footer />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Layout />);
