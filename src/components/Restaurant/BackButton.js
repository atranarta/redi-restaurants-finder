import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();

  return (
    <button className="button-back" onClick={() => history.goBack()}>
      Back
    </button>
  );
};

export default BackButton;
