import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import { AboutPage, HomePage } from "../pages";

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
        { path: "/", element: <AboutPage /> },
      ],
    },
  ]);
  return { routes };
};

export default useHandleRoutes;
