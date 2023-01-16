import React, { useEffect, useState } from "react";
import {FiArrowRight} from 'react-icons/fi'

const Home = () => {
  const today = new Date();
  const dateFormat = new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'medium',
  })
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
      {orgs.map((org) => {
        return <div key = {org.id}
        className="grid gap-4 border rounded shadow-md bg-grey-extra-light hover:scale-105 hover:transition-transform">
          <div className="p-4">
          <h6 className="py-2">{org.name}</h6>
          <p className="font-light text-xs text-grey-text">Last Updated: {dateFormat.format(today)}</p>
          </div>
          <div className="flex justify-between items-center text-grey-text bg-grey-light py-3 px-2
          hover:text-blue-button hover:transition-colors">
          <p className="text-sm w-[80%] truncate">{org.description}</p>
          <FiArrowRight className="w-[15%] text-lg hover:transition-transform hover:translate-x-2"/>
          </div>
        </div>
      })}
    </div>
  );
};

export default Home;
