import React from "react";
import { Outlet } from "react-router-dom";
import { Heading } from "../components/Heading/Heading.tsx";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Heading />
      <main className="flex flex-col mt-16 h-[90%] overflow-y-visible">
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
