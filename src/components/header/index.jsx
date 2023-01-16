import React, { useEffect } from "react";
import logo from '../../assets/images/orgIcon.png'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
//   useEffect(() => {
//     console.log(import.meta.env.VITE_API_ENDPOINT);
//   });
  return <div className="cursor-pointer w-100v fixed top-0 left-0 h-16 flex justify-center items-center p-2 bg-blue-header text-white ">
    <div className="flex justify-between items-center max-w-7xl w-100v">
    <img onClick={()=> {navigate('/')}} className="h-[3rem]" src={logo} alt="" />
    <p className="font-medium text-lg">Registry</p>
    </div>
    </div>;
};

export default Header;
