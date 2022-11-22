import { useState } from "react";
import { Dialog, Switch, Transition } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/24/outline";
// import "../components/Account.css";
//

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Account = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);
  return (
    <div className="bg-slate-50">
      <button
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <a href="/" className="no-underline text-white text-xl">
          Go Home
        </a>
      </button>
      <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
        <main className="flex-1">
          <div className="relative mx-auto max-w-4xl md:px-8 xl:px-0">
            <div className="pt-10 pb-16">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Settings
                </h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                <div className="py-6">
                  {/* Description list with inline editing */}
                  <div className="mt-10 divide-y divide-gray-200">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Profile
                      </h3>
                      <p className="max-w-2xl text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                    <form className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
                      <div className="grid grid-cols-1 sm:grid-cols-6 sm:gap-x-6">
                        <div className="col-span-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500">
                            First Name
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">Chelsea Hagon</span>
                          </dd>
                        </div>
                        <div className="col-span-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Last Name
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">Chelsea Hagon</span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                      </div>
                    </form>
                    <div className="mt-2">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500">
                            UserName
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">Chelsea Hagon</span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>

                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Name
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">Chelsea Hagon</span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Email
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">
                              chelsea.hagon@example.com
                            </span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Address
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">123 Mariot Ave</span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>

                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Role
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">
                              Human Resources Manager
                            </span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="mt-10 divide-y divide-gray-200">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Account
                      </h3>
                      <p className="max-w-2xl text-sm text-gray-500">
                        Manage how information is displayed on your account.
                      </p>
                    </div>
                    <div className="mt-6">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Date format
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">DD-MM-YYYY</span>
                            <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Update
                              </button>
                              <span
                                className="text-gray-300"
                                aria-hidden="true"
                              >
                                |
                              </span>
                              <button
                                type="button"
                                className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                              >
                                Remove
                              </button>
                            </span>
                          </dd>
                        </div>
                        <Switch.Group
                          as="div"
                          className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5"
                        >
                          <Switch.Label
                            as="dt"
                            className="text-sm font-medium text-gray-500"
                            passive
                          >
                            Automatic timezone
                          </Switch.Label>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <Switch
                              checked={automaticTimezoneEnabled}
                              onChange={setAutomaticTimezoneEnabled}
                              className={classNames(
                                automaticTimezoneEnabled
                                  ? "bg-purple-600"
                                  : "bg-gray-200",
                                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  automaticTimezoneEnabled
                                    ? "translate-x-5"
                                    : "translate-x-0",
                                  "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                )}
                              />
                            </Switch>
                          </dd>
                        </Switch.Group>
                        <Switch.Group
                          as="div"
                          className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5"
                        >
                          <Switch.Label
                            as="dt"
                            className="text-sm font-medium text-gray-500"
                            passive
                          >
                            Auto-update applicant data
                          </Switch.Label>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <Switch
                              checked={autoUpdateApplicantDataEnabled}
                              onChange={setAutoUpdateApplicantDataEnabled}
                              className={classNames(
                                autoUpdateApplicantDataEnabled
                                  ? "bg-purple-600"
                                  : "bg-gray-200",
                                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  autoUpdateApplicantDataEnabled
                                    ? "translate-x-5"
                                    : "translate-x-0",
                                  "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                )}
                              />
                            </Switch>
                          </dd>
                        </Switch.Group>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-10 divide-y divide-gray-200">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Admin
                      </h3>
                      <p className="max-w-2xl text-sm text-gray-500">
                        These settings cannot be changed by the user
                      </p>
                    </div>
                    <div className="mt-6">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500">
                            Nmls ID
                          </dt>
                          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">483945XXXX</span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Account;
