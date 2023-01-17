import React, { useContext } from "react";
import logo from "../../assets/images/orgIcon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
const Header = () => {
  const { orgData} = useContext(AppContext)
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" w-100v fixed top-0 left-0 h-16 flex justify-center items-center p-2 bg-blue-header text-dark-grey-text ">
      <div className="flex justify-between items-center max-w-7xl w-100v">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="h-[3rem] cursor-pointer"
          src={logo}
          alt="Dhiway"
        />
        <p className="font-medium text-lg">
          {location.pathname === "/" ? (
            <p className="cursor-default">Organisations</p>
          ) : `${orgData.name}`
}
        </p>
      </div>
    </div>
  );
};

export default Header;
