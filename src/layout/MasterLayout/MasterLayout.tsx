import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/Navigation";

// interface IProps {}

const MasterLayout = () => {
  return (
    <>
      <Header />
      <main className=" ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
