import * as React from "react";

const DashboardCards = () => {
  const stats = [
    { name: "New Leads", stat: "84" },
    { name: "New Borrowers", stat: "32" },
    { name: "Online Agents", stat: "7" },
  ];

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900 mt-8">
        Last 30 days
      </h3>
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
