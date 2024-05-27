import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import { AboutPage, HomePage } from "../pages";
import Services from "../pages/Services";
import News from "../pages/News";

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
        { path: "our-services", element: <Services /> },
        { path: "news", element: <News /> },
      ],
    },
  ]);
  return { routes };
};

export default useHandleRoutes;
