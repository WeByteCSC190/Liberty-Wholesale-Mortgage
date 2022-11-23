import * as React from "react";
import "../components/Dashboard.css";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Milestone from "../components/Milestone";
import RecentLeads from "../components/RecentLeads";
import RecentBorrowers from "../components/RecentBorrowers";
import AnnouncementsWidget from "../components/AnnouncementsWidget";
import DashboardCards from "../components/DashboardCards";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-full">
      <Navbar />
      <main className="-mt-24 pb-8 py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Dashboard</h1>
          <Milestone />
          <DashboardCards />
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Recent
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <RecentLeads />
                  <RecentBorrowers />
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Announcements
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <AnnouncementsWidget />
                  {/*<div className="p-6"> Your content </div>*/}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
