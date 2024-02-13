import React from "react";
import { Heading } from "../components/Heading/Heading.tsx";

const NotFound = () => {
  return (
    <React.Fragment>
      <Heading />
      <div className="mt-20">
        <h1>404: Page not found!</h1>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
