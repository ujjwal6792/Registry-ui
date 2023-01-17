import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCards from "../../components/homeCards";
import { AppContext } from "../../context";
import LoadingDhiway from "../../components/loading";

const Home = () => {
  const { addOrgData } = useContext(AppContext);
  const navigate = useNavigate();
  const [orgs, setOrgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/v1/orgs?registry=1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setOrgs(data.orgs);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingDhiway />
      ) : (
        <>
          <div className="w-full py-2 px-1 border-b">
          <h5 className="pt-20 text-2xl">Organisations</h5>
          </div>
          <div className="w-100 grid grid-cols-4 gap-4 mt-4">
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
        </>
      )}
    </>
  );
};

export default Home;
