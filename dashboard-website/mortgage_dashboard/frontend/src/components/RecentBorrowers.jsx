import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
// import "./RecentBorrowers.css";

const RecentBorrowers = () => {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/borrowers/recent/`)
      .then((response) => setBorrowers(response.data));
  }, []);

  // return (
  //   <div className="RecentBorrowers">
  //     <div className="RecentBorrowersTitle">Recently Added Borrowers</div>
  //     <ol className="RecentBorrowersColumnNames">
  //       <li>Case ID</li>
  //       <li>Date</li>
  //       <li>First Name</li>
  //       <li>Last Name</li>
  //       <li>Phone #</li>
  //     </ol>
  //     <div classNaame="RecentBorrowersTable">
  //       {borrowers.map((row) => (
  //         <ol className="RecentBorrowersData">
  //           <li>{row.caseId}</li>
  //           <li>{row.date.slice(0, 10)}</li>
  //           <li>{row.fName}</li>
  //           <li>{row.lName}</li>
  //           <li>{row.phone_num}</li>
  //         </ol>
  //       ))}
  //     </div>
  //   </div>
  // );
  //

  return (
    <div className="RecentBorrowers w-100 px-4 sm:px-6 lg:px-8 col-span-1">
      <div className="mt-8 flex flex-col">
        <div className="inline-block text-lg text-gray-900 font-extralight bg-white">
          Recently Added Borrowers
        </div>
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-[#0d397a]">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-0"
                  >
                    Case ID
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-white"
                  >
                    Phone Num
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {borrowers.map((person) => (
                  <tr key={person.caseId}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                      {person.caseId}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {person.date.slice(0, 10)}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {person.fName}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {person.lName}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {person.phone_num}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBorrowers;
