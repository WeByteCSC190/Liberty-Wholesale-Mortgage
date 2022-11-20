import React from "react";
import Navbar from "../../components/NavbarAdmin";

export default function RecentlyDeleted() {
  return (
    <>
      <div className="Header">
        <Navbar />
      </div>
      <div className="Content">
        <p className="Page-Title">Recovery Bin</p>
      </div>
    </>
  );
}
