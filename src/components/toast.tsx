import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notifyError = () => {
    toast.error("Done!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <div>
      <button onClick={notifyError}>No</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
