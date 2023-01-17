import React from "react";
import logo from "../../assets/images/orgIcon.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Header = () => {
  const {orgId} = useParams()
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
          ) : location.pathname.includes("/view") ? (
            <p className="cursor-default">
              <span className="cursor-pointer" onClick={()=> navigate('/')}>Org</span> <span>/</span> Registries
            </p>
          ) : location.pathname.includes("/records") ? (
            <p className="cursor-default">
              <span className="cursor-pointer" onClick={()=> navigate('/')}>Org</span> <span>/</span> <span className="cursor-pointer" onClick={()=> navigate(-1)}>Registries</span>  <span>/</span> Records
            </p>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;
