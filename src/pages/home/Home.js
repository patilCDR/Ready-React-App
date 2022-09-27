import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center p-4 m-4" style={{ fontSize: "20rem" }}>
        HOME
      </h1>
      <Footer />
    </div>
  );
};

export default Home;
