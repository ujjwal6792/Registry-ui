import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HomeCards from "../../components/homeCards";
import { IoIosArrowBack } from "react-icons/io";
import BackButton from "../../components/back";
import LoadingDhiway from "../../components/loading";
import AppContext from "../../context";

const RegistryView = () => {
  const {addRegistryData} = useContext(AppContext)
  const { orgId } = useParams();
  const navigate = useNavigate();
  const [spaces, setSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (orgId) {
      setIsLoading(true)
      fetch(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/v1/${orgId}/spaces?registry=1`,
        { method: "GET" }
      )
        .then((response) => response.json())
        .then((response) => {
          setSpaces(response.spaces);
          setIsLoading(false)
        }).catch(err=>console.log(err));
    }
  }, [orgId]);
  return (<>
    { isLoading? <LoadingDhiway/> :
    <div className="pt-20">
      <BackButton link={'/'}/>
      <div className="w-100 grid grid-cols-4 gap-3 mt-4">
        {spaces.length>0?spaces.map((space) => {
          return (
            <HomeCards
              key={space.id}
              id={space.id}
              name={space.name}
              updateDate={space.updatedAt}
              description={space.description}
              onClick={() => {
                addRegistryData(space)
                navigate(`/registry/records/${orgId}/${space.id}`)}}
            />
          );
        }):
        <h5 className="mx-auto text-dark-grey-text mt-12 text-xl">No Registries Found</h5>
        }
      </div>
    </div>
  }
  </>);
};

export default RegistryView;
