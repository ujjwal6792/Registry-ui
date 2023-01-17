import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/back";

const SpaceRecords = () => {
  const { orgId, spaceId } = useParams();
  const [count, setCount] = useState();
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_API_ENDPOINT
      }/api/v1/${orgId}/${spaceId}/records?registry=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setCount(response?.count);
        setRecords(response?.records);
      });
  }, []);
  return (
    <div className="pt-20">
      <BackButton link = {`/registry/view/${orgId}`}/>
      <div className="flex justify-between border-b p-2">
        <h5>Records</h5>
        <h6>Showing {`1-${count} of ${count}`}</h6>
      </div>
      <div className="grid mt-4">
        <div className="grid grid-cols-4 gap-2 text-start text-grey-text shadow-md p-2 bg-[#FBF2EC] mb-2">
          <p>TITLE</p>
          <p>STATUS</p>
          <p>RECIPIENTS</p>
          <p className="text-end mr-4">ISSUED ON</p>
        </div>  
        {records.map((record) => {
          return (
            <div className="grid grid-cols-4 gap-2 text-dark-grey-text text-start shadow-sm p-2">
              <p className="text-start">{record.title}</p>
              <span>
                {record.anchorTime ? (
                  <p className="text-active-green">Issued</p>
                ) : (
                  <p className="text-red-600">Revoked</p>
                )}
              </span>
              <p>{record.recipients[0]}</p>
              <p className="text-end mr-4">{record.createdAt?.slice(0,10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpaceRecords;
