import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/back";
import LoadingDhiway from "../../components/loading";

const SpaceRecords = () => {
  const { orgId, spaceId } = useParams();
  const [records, setRecords] = useState([]);
  const [count, setCount] = useState();
  const [pages, setPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${
        import.meta.env.VITE_API_ENDPOINT
      }/api/v1/${orgId}/${spaceId}/records?registry=1&page=${pageIndex}&pageSize=${pageSize}&search=${search}&active=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setCount(response?.count);
        setRecords(response?.records);
        setPageSize(response?.pageSize);
        if (
          typeof response.count === "number" &&
          typeof response.pageSize === "number"
        ) {
          setPages(
            Array.from(Array(Math.ceil(response.count / response.pageSize)))
          );
          setIsLoading(false);
        }
      });
  }, [pageIndex, search]);
  return (
    <>
      <div className="pt-20">
        <BackButton link={`/registry/view/${orgId}`} />
        <div className=" shadow-md">
        <div className="flex justify-between items-end border-b mt-2 p-2">
          <h5>Records</h5>
          <input
            className="w-1/3 border-gray-300 border-[1.5px] rounded h-8 px-2"
            type="text"
            placeholder="Search Records"
            onChange={(e) => setSearch(e.target.value)}
          />
          <h6>
            Showing{" "}
            {`${(pageIndex - 1) * pageSize + 1}-${
              (pageIndex - 1) * pageSize + records.length
            } of ${count}`}
          </h6>
        </div>
        <div className="grid mt-4">
          <div className="grid grid-cols-4 gap-2 text-start text-grey-text shadow-md p-2 bg-[#FBF2EC] mb-2">
            <p>TITLE</p>
            <p>STATUS</p>
            <p>RECIPIENTS</p>
            <p className="text-end mr-4">ISSUED ON</p>
          </div>
          {isLoading ? (
            <LoadingDhiway />
          ) : records.length > 0 ? (
            records.map((record, i) => {
              return (
                <div
                  key={i}
                  className="grid grid-cols-4 gap-2 text-dark-grey-text text-start shadow-sm p-2"
                >
                  <p className="text-start">{record.title}</p>
                  <span>
                    {record.anchorTime ? (
                      <p className="text-active-green">Issued</p>
                    ) : (
                      <p className="text-red-600">Draft</p>
                    )}
                  </span>
                  <p>{record.recipients[0]}</p>
                  <p className="text-end mr-4">
                    {record.createdAt?.slice(0, 10)}
                  </p>
                </div>
              );
            })
          ) : (
            <h5 className="mx-auto text-dark-grey-text mt-12 text-xl">
              No Records Found
            </h5>
          )}
        </div>
        </div>
        <div id="pagination" className="flex justify-center gap-2 my-8">
          {pages?.map((o, i) => {
            return (
              <React.Fragment key={i}>
                <button
                  onClick={() => setPageIndex(i + 1)}
                  className={`rounded border aspect-video text-base p-2 text-center ${
                    pageIndex === i + 1 ? "bg-[#333F99] text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpaceRecords;
