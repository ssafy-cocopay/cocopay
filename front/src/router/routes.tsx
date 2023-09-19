import React from "react";
import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "@/constants/path";

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    // errorElement: <NotFoundPage />
    // TODO: 404page 생성
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
