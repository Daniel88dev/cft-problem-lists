import React from "react";
import { Outlet } from "react-router-dom";
import { Heading } from "../components/Heading/Heading.tsx";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Heading />
      <main className="flex flex-col mt-16">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
