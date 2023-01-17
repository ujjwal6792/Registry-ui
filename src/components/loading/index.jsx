import React from "react";
import Loading from "../../assets/images/Loading.gif";

const LoadingDhiway = () => {
  return (
    <div className="fixed top-0 left-0 w-100v h-100v flex items-center justify-center">
      <img className="h-20v" src={Loading} alt="Loading" />
    </div>
  );
};

export default LoadingDhiway;
