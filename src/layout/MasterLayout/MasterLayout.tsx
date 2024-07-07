import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/Navigation";
import { useTranslation } from "react-i18next";

// interface IProps {}

const MasterLayout = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Header />
      <main
        className={`overflow-hidden ${
          i18n.language === "ar" ? "rtl" : "ltr"
        } bg-[#FFFDFB]`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
