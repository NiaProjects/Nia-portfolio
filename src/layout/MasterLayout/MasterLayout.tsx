import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Navigation";

// interface IProps {}

const MasterLayout = () => {
  return (
    <>
      <main className=" overflow-hidden">
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default MasterLayout;
