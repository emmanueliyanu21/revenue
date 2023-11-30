import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Loader from "../components/Loader";
const routes = [
  {
    path: "/",
    isExact: true,
    component: React.lazy(() => import("../../pages/revenue")),
  },
];

const NotFound = () => (
  <Box>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </Box>
);

function PageRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, component: Component, isExact }) => (
          <Route
            key={path}
            exact={isExact}
            path={path}
            element={<Component />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default PageRoutes;
