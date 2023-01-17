import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCards from "../../components/homeCards";
import { AppContext } from "../../context";

const Home = () => {
  const { addOrgData } = useContext(AppContext);
  const navigate = useNavigate();
  const [orgs, setOrgs] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/v1/orgs?registry=1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setOrgs(data.orgs);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <div className="w-100 grid grid-cols-4 gap-3 mt-4 pt-20">
      {orgs.map((org, i) => (
        <HomeCards
          key={org.id + i}
          onClick={() => {
            addOrgData(org ? org : { name: "Org" });
            navigate(`/registry/view/${org.id}`);
          }}
          id={org.id + i}
          description={org.description}
          name={org.name}
          logo={org.logo}
        />
      ))}
    </div>
  );
};

export default Home;
