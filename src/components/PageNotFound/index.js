import React from "react";
import BackButton from "../Restaurant/BackButton";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div>
      <BackButton />
      <div className="error_wrapper">
        <p className="error_message">
          Sorry, this page cannot be found on our site..
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
