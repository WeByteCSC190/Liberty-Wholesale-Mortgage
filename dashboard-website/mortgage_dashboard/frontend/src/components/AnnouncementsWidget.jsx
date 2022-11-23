import api from "../services/api";
import { useState, useEffect } from "react";
import * as React from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const AnnouncementsWidget = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:8000/api/ImportantAnnouncements/")
      .then((response) => setNews(response.data));
  }, []);

  return (
    <div className="AnnouncementsWidget grid grid-cols-1 gap-4 md:row-span-2 col-span-1">
      <section aria-labelledby="announcements-title">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2
              className="text-base font-medium text-gray-900"
              id="announcements-title"
            >
              Announcements
            </h2>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {news.map((announcement) => (
                  <li key={announcement.id} className="py-5">
                    <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a
                          href={announcement.href}
                          className="hover:underline focus:outline-none"
                        >
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {announcement.date}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {announcement.content}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="/Resources"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  // return (
  //   <div className="AnnouncementsWidget mx-auto max-w-7xl sm:px-6 lg:px-8 border-4 rounded-2xl border-blue-500 justify-center flex">
  //     <div className="flex flex-col rounded-3xl bg-white place-items-center">
  //       <div className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
  //         Announcements
  //       </div>
  //
  //       <div>
  //         {news.map((row) => (
  //           <div className="overflow-hidden">
  //             <p className="text-xs text-slate-600 px-4 py-3 sm:px-3">
  //               {row.date.slice(0, 10)}
  //             </p>
  //             <div className="text-sm text-black px-2 sm:p-3">
  //               {row.content}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AnnouncementsWidget;
