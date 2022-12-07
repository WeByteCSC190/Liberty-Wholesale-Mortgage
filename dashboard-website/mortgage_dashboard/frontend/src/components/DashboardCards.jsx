import React, { useState, useEffect } from "react";
import api from "../services/api";

const DashboardCards = () => {
  const [leadStats, setLeadStats] = useState(0);
  const [borrowerStats, setBorrowerStats] = useState(0);
  const [lenderStats, setLenderStats] = useState(0);

  useEffect(() => {
    api
      .get(`${process.env.REACT_APP_API_URL}/api/leads/total/`)
      .then((response) => setLeadStats(response.data));
    api
      .get(`${process.env.REACT_APP_API_URL}/api/borrowers/total/`)
      .then((response) => setBorrowerStats(response.data));
    api
      .get(`${process.env.REACT_APP_API_URL}/api/lender/total/`)
      .then((response) => setLenderStats(response.data));
  }, []);
  const stats = [
    { name: "Total Leads", stat: leadStats },
    { name: "Total Borrowers", stat: borrowerStats },
    { name: "Total Lenders", stat: lenderStats },
  ];

  return (
    <div>
      {/* <h3 className="text-lg font-medium leading-6 text-gray-900 mt-8"> */}
      {/*   Last 30 days */}
      {/* </h3> */}
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DashboardCards;
