import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import { AboutPage, HomePage } from "../pages";
import ContactUs from "../pages/ContactUs";
import AboutSection from "../pages/Home/components/AboutSection";
import OurWorkSection from "../pages/Home/components/OurWorkSection";
import News from "../pages/News";
import Designs from "../pages/Services/Design/Designs";
import SoftWareService from "../pages/Services/Software/Software";
import DigitalMarketing from "../pages/Services/DigitalMarketing";
import Events from "../pages/Services/Events";
import Photography from "../pages/Services/Photography";
import Advertising from "../pages/Services/Advertising";

const useHandleRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          children: [
            {
              path: "#about-us",
              element: <AboutSection />,
            },
            {
              path: "#our-work",
              element: <OurWorkSection />,
            },
            {
              path: "#news",
              element: <News />,
            },
          ],
        },
        { path: "about-us", element: <AboutPage /> },
        { path: "contact-us", element: <ContactUs /> },

        {
          path: "our-services/software",
          element: <SoftWareService />,
        },
        {
          path: "our-services/designs",
          element: <Designs />,
        },
        {
          path: "our-services/DigitalMarketing",
          element: <DigitalMarketing />,
        },
        {
          path: "our-services/Events",
          element: <Events />,
        },
        {
          path: "our-services/Photography",
          element: <Photography />,
        },
        {
          path: "our-services/Advertising",
          element: <Advertising />,
        },
        { path: "news", element: <News /> },
      ],
    },
  ]);
  return { routes };
};

export default useHandleRoutes;
