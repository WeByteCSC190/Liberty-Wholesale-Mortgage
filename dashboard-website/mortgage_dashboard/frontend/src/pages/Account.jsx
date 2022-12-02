import React, { useState, useEffect } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

export default function Account() {
  let [accountInfo, setAccountInfo] = useState([]);
  const [formValue, setformValue] = React.useState({
    address_1: "",
    address_2: "",
    fName: "",
    lName: "",
    email: "",
    bio: "",
    ssn: "",
    username: "",
    zip_code: "",
    city: "",
    state: "",
    role: "",
  });

  useEffect(() => {
    //Get Account Info
    getAccount();
  }, []);

  function getAccount() {
    const getAccountUrl = `${process.env.REACT_APP_API_URL}/accounts/users/info`;
    api({
      method: "GET",
      url: getAccountUrl,
    })
      .then((response) => {
        const data = response.data;
        setAccountInfo(data);
        setformValue(data);
        console.log(data);
        return data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("address_1", formValue.address_1);
    formData.append("address_2", formValue.address_2);
    formData.append("fName", formValue.fName);
    formData.append("lName", formValue.lName);
    formData.append("bio", formValue.bio);
    formData.append("email", formValue.email);
    // formData.append("nmlsID", formValue.nmlsID);
    formData.append("ssn", formValue.ssn);
    formData.append("zip_code", formValue.zip_code);
    formData.append("city", formValue.city);
    formData.append("state", formValue.state);
    formData.append("role", formValue.role);

    const updateAccountUrl =
      `${process.env.REACT_APP_API_URL}/accounts/users/update_profile/` +
      accountInfo.id +
      `/`;
    // console.log(updateAccountUrl);
    api({
      method: "PUT",
      url: updateAccountUrl,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((response) => {
        const data = response.data;
        setAccountInfo(data);
        console.log(data);
        return data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-slate-100 rounded-lg mx-auto md:px-8 xl:px-0 py-5 h-auto w-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 divide-y divide-gray-200 mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0 py-5"
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      defaultValue={accountInfo.username}
                      onChange={handleChange}
                      autoComplete="username"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="bio"
                      name="bio"
                      onChange={handleChange}
                      autocomplete="bio"
                      rows={3}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue={accountInfo.bio}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences about yourself.
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <div className="mt-1">
                    <select
                      id="role"
                      name="role"
                      selectedValue={accountInfo.role}
                      onChange={handleChange}
                      autoComplete="role"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={accountInfo.role} selected disabled>
                        {accountInfo.role}
                      </option>
                      <option>Loan Officer</option>
                      <option>Loan Processor</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="fName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      defaultValue={accountInfo.fName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      defaultValue={accountInfo.lName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* <div className="sm:col-span-3"> */}
                {/*   <label */}
                {/*     htmlFor="country" */}
                {/*     className="block text-sm font-medium text-gray-700" */}
                {/*   > */}
                {/*     Country */}
                {/*   </label> */}
                {/*   <div className="mt-1"> */}
                {/*     <select */}
                {/*       id="country" */}
                {/*       name="country" */}
                {/*       autoComplete="country-name" */}
                {/*       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
                {/*     > */}
                {/*       <option>United States</option> */}
                {/*       <option>Canada</option> */}
                {/*       <option>Mexico</option> */}
                {/*     </select> */}
                {/*   </div> */}
                {/* </div> */}

                <div className="sm:col-span-6">
                  <label
                    htmlFor="address_1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address_1"
                      id="address_1"
                      defaultValue={accountInfo.address_1}
                      onChange={handleChange}
                      autoComplete="address_1"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="address_2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Secondary Street address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address_2"
                      id="address_2"
                      defaultValue={accountInfo.address_2}
                      onChange={handleChange}
                      autoComplete="address_2"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      defaultValue={accountInfo.city}
                      autoComplete="city"
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      defaultValue={accountInfo.state}
                      autoComplete="state"
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="zip_code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="zip_code"
                      id="zip_code"
                      defaultValue={accountInfo.zip_code}
                      onChange={handleChange}
                      autoComplete="zip_code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Account Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information can only be changed by the administrator
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    NMLS ID
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="nmlsID"
                      id="nmlsID"
                      value={accountInfo.nmlsID}
                      onChange={handleChange}
                      autoComplete="nmlsID"
                      className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-300"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*           <div className="pt-8"> */}
            {/*             <div> */}
            {/*               <h3 className="text-lg font-medium leading-6 text-gray-900"> */}
            {/*                 Notifications */}
            {/*               </h3> */}
            {/*               <p className="mt-1 text-sm text-gray-500"> */}
            {/*                 We'll always let you know about important changes, but you pick */}
            {/*                 what else you want to hear about. */}
            {/*               </p> */}
            {/*             </div> */}
            {/*             <div className="mt-6"> */}
            {/*               <fieldset> */}
            {/*                 <legend className="sr-only">By Email</legend> */}
            {/*                 <div */}
            {/*                   className="text-base font-medium text-gray-900" */}
            {/*                   aria-hidden="true" */}
            {/*                 > */}
            {/*                   By Email */}
            {/*                 </div> */}
            {/*                 <div className="mt-4 space-y-4"> */}
            {/*                   <div className="relative flex items-start"> */}
            {/*                     <div className="flex h-5 items-center"> */}
            {/*                       <input */}
            {/*                         id="comments" */}
            {/*                         name="comments" */}
            {/*                         type="checkbox" */}
            {/*                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
            {/*                       /> */}
            {/*                     </div> */}
            {/*                     <div className="ml-3 text-sm"> */}
            {/*                       <label */}
            {/*                         htmlFor="comments" */}
            {/*                         className="font-medium text-gray-700" */}
            {/*                       > */}
            {/*                         Comments */}
            {/*                       </label> */}
            {/*                       <p className="text-gray-500"> */}
            {/*                         Get notified when someones posts a comment on a posting. */}
            {/*                       </p> */}
            {/*                     </div> */}
            {/*                   </div> */}
            {/*                   <div className="relative flex items-start"> */}
            {/*                     <div className="flex h-5 items-center"> */}
            {/*                       <input */}
            {/*                         id="candidates" */}
            {/*                         name="candidates" */}
            {/*                         type="checkbox" */}
            {/*                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
            {/*                       /> */}
            {/*                     </div> */}
            {/*                     <div className="ml-3 text-sm"> */}
            {/*                       <label */}
            {/*                         htmlFor="candidates" */}
            {/*                         className="font-medium text-gray-700" */}
            {/*                       > */}
            {/*                         Candidates */}
            {/*                       </label> */}
            {/*                       <p className="text-gray-500"> */}
            {/*                         Get notified when a candidate applies for a job. */}
            {/*                       </p> */}
            {/*                     </div> */}
            {/*                   </div> */}
            {/*                   <div className="relative flex items-start"> */}
            {/*                     <div className="flex h-5 items-center"> */}
            {/*                       <input */}
            {/*                         id="offers" */}
            {/*                         name="offers" */}
            {/*                         type="checkbox" */}
            {/*                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
            {/*                       /> */}
            {/*                     </div> */}
            {/*                     <div className="ml-3 text-sm"> */}
            {/*                       <label */}
            {/*                         htmlFor="offers" */}
            {/*                         className="font-medium text-gray-700" */}
            {/*                       > */}
            {/*                         Offers */}
            {/*                       </label> */}
            {/*                       <p className="text-gray-500"> */}
            {/*                         Get notified when a candidate accepts or rejects an */}
            {/*                         offer. */}
            {/*                       </p> */}
            {/*                     </div> */}
            {/*                   </div> */}
            {/*                 </div> */}
            {/*               </fieldset> */}
            {/*               <fieldset className="mt-6"> */}
            {/*                 <legend className="contents text-base font-medium text-gray-900"> */}
            {/*                   Push Notifications */}
            {/*                 </legend> */}
            {/*                 <p className="text-sm text-gray-500"> */}
            {/*                   These are delivered via SMS to your mobile phone. */}
            {/*                 </p> */}
            {/*                 <div className="mt-4 space-y-4"> */}
            {/*                   <div className="flex items-center"> */}
            {/*                     <input */}
            {/*                       id="push-everything" */}
            {/*                       name="push-notifications" */}
            {/*                       type="radio" */}
            {/*                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
            {/*                     /> */}
            {/*                     <label */}
            {/*                       htmlFor="push-everything" */}
            {/*                       className="ml-3 block text-sm font-medium text-gray-700" */}
            {/*                     > */}
            {/*                       Everything */}
            {/*                     </label> */}
            {/*                   </div> */}
            {/*                   <div className="flex items-center"> */}
            {/*                     <input */}
            {/*                       id="push-email" */}
            {/*                       name="push-notifications" */}
            {/*                       type="radio" */}
            {/*                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
            {/*                     /> */}
            {/*                     <label */}
            {/*                       htmlFor="push-email" */}
            {/*                       className="ml-3 block text-sm font-medium text-gray-700" */}
            {/*                     > */}
            {/*                       Same as email */}
            {/*                     </label> */}
            {/*                   </div> */}
            {/*                   <div className="flex items-center"> */}
            {/*                     <input */}
            {/*                       id="push-nothing" */}
            {/*                       name="push-notifications" */}
            {/*                       type="radio" */}
            {/*                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
            {/*                     /> */}
            {/*                     <label */}
            {/*                       htmlFor="push-nothing" */}
            {/*                       className="ml-3 block text-sm font-medium text-gray-700" */}
            {/*                     > */}
            {/*                       No push notifications */}
            {/*                     </label> */}
            {/*                   </div> */}
            {/*                 </div> */}
            {/*               </fieldset> */}
            {/*             </div> */}
            {/*           </div> */}
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
