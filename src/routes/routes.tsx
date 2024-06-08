import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import { AboutPage, HomePage } from "../pages";
import Services from "../pages/Services";
import News from "../pages/News";
import SoftWareService from "../pages/Services/Software/Software";
import ContactUs from "../pages/ContactUs";

const useHandleRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "about-us", element: <AboutPage /> },
        { path: "contact-us", element: <ContactUs /> },

        {
          path: "our-services/software",
          element: <SoftWareService />,
        },

        { path: "news", element: <News /> },
      ],
    },
  ]);
  return { routes };
};

export default useHandleRoutes;
