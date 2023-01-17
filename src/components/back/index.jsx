import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context";

const BackButton = (props) => {
  const {orgData} = useContext(AppContext)
  const navigate = useNavigate();
  const { link } = props;
  return (<>
    <div
      className="cursor-pointer flex items-center shadow-md w-fit px-2 py-1 mb-2 rounded"
      onClick={() => navigate(link)}
      >
      {" "}
      <IoIosArrowBack /> <span>Back</span>
    </div>
    <span className="text-grey-text mb-2 capitalize">
          {location.pathname === "/" ? (
            <small className="cursor-default">Home</small>
          ) : location.pathname.includes("/view") ? (
            <small className="cursor-default">
              <span className="cursor-pointer" onClick={()=> navigate('/')}>Home</span> <span>/</span> {orgData?.name} <span>/</span> Registries
            </small>
          ) : location.pathname.includes("/records") ? (
            <small className="cursor-default">
              <span className="cursor-pointer" onClick={()=> navigate('/')}>Home</span> <span>/</span> {orgData?.name} <span>/</span>  <span className="cursor-pointer" onClick={()=> navigate(-1)}>Registries</span>  <span>/</span> Records
            </small>
          ) : (
            ""
          )}

        

        </span>
    </>
  );
};

export default BackButton;
