import React from "react";
import { Outlet } from "react-router-dom";
import Heder from "../../components/Navigation/Header/Heder";

// interface IProps {}

const MasterLayout = () => {
  return (
    <>
      <main className=" overflow-hidden">
        <Heder />
        <Outlet />
      </main>
    </>
  );
};

export default MasterLayout;
