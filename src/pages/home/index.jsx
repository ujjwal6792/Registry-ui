import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import HomeCards from '../../components/homeCards'

const Home = () => {
  const navigate = useNavigate()
  const [orgs, setOrgs] = useState([
    {
      name: "Home",
      id: 2,
      description: "A place where we belong",
    },
    {
      name: "Work",
      id: 3,
      description: "A place where we end up eventually",
    },
    {
      name: "farm house",
      id: 4,
      description: "A place which we all want to own",
    },
    {
      name: "Vacation Home",
      id: 1,
      description: "An escape from the slavery",
    },
  ]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/v1/orgs?registry=1`)
      .then((response) => response.json())
      .then((data) => {
        setOrgs(orgs =>  [...orgs, ...data.orgs]);
        console.log(data);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <div className="w-100 grid grid-cols-4 gap-3 mt-4 pt-16">
      {orgs.map((org) => <HomeCards key={org.id} onClick={()=>navigate('/registry/view')} id={org.id} description={org.description} name={org.name}/>)}
    </div>
  );
};

export default Home;
