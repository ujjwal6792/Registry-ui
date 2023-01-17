import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeCards from "../../components/homeCards";

const RegistryView = () => {
  const { orgId } = useParams();
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    if (orgId) {
      fetch(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/v1/${orgId}/spaces?registry=1`,
        { method: "GET" }
      )
        .then((response) => response.json())
        .then((response) => {
          setSpaces(response.spaces);
          console.log(response.spaces);
        });
    }
  }, [orgId]);
  return (
    <div className="w-100 grid grid-cols-4 gap-3 mt-4 pt-20">
      {spaces.map((space) => {
        return (
            <HomeCards
              id={space.id}
              name={space.name}
              updateDate={space.updatedAt}
              description={space.description}
            />
        );
      })}
    </div>
  );
};

export default RegistryView;
