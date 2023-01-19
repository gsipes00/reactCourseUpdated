import React, { useEffect } from "react";

const Alert = ({ type, msg, showAlert, list }) => {
  // show alert and remove
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
