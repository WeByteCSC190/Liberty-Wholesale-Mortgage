import * as React from "react";

const Milestone = () => {
  return (
    <div className="Milestone p-1 m-0 border-4 border-blue-500 rounded-2xl">
      <h4 className="sr-only">Status</h4>
      <p className="text-md font-medium text-stone-900">Milestones</p>
      <div className="mt-6" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-400">
          <div
            className="h-2 rounded-full bg-blue-600"
            style={{ width: "37.5%" }}
          />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div className="text-indigo-600">25 Deals Closed</div>
          <div className="text-center text-indigo-600">50 Deals Closed</div>
          <div className="text-center">100 Deals Closed</div>
          <div className="text-right">150 Deals Closed</div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
