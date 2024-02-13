import React from "react";
import { Outlet } from "react-router-dom";
import { Heading } from "../components/Heading/Heading.tsx";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Heading />
      <main className="pt-10 md:pt-20">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
