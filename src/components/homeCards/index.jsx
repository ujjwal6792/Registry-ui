import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HomeCards = (props) => {
  const { id, name, updateDate, description, onClick, logo } = props;
  const today = new Date();
  const dateFormat = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "medium",
  });
  return (
    <div
      key={id}
      onClick={onClick}
      className="cursor-pointer flex flex-col justify-between gap-4 border rounded shadow-md bg-grey-extra-light hover:scale-105 hover:transition-transform w-full"
    >
      <div className="p-4 flex box-border  justify-between">
        <div className="w-3/4">
          <h6 className="py-2 capitalize text-grey">{name}</h6>
          <p className="font-light text-xs text-grey-text">
            Last Updated: {updateDate?.slice(0,10) || dateFormat.format(today)}
          </p>
        </div>
        <div className="w-1/4 flex justify-center items-center" >
        <img className="max-h-12" src={logo} />
        </div>
      </div>
      <div
        className="flex justify-between items-center text-grey-text bg-grey-light py-3 px-2
          hover:text-blue-button hover:transition-colors "
      >
        <p className="text-sm w-[80%] truncate capitalize">{description}</p>
        <FiArrowRight className="w-[15%] text-lg hover:transition-transform hover:translate-x-2 " />
      </div>
    </div>
  );
};

export default HomeCards;
