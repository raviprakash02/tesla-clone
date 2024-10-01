"use client";

import { useState } from "react";

const Section1 = () => {
  const [activeTab, setActiveTab] = useState("Vehicles");

  return (
    <div className="p-4">
      {/* Tab Navigation [Conditional rendering concept] */}
      <div className="flex justify-around border-b-2 mb-4">
        <button
          className={`py-2 px-4 ${
            activeTab === "Vehicles" ? "border-b-4 border-black" : ""
          }`}
          onClick={() => setActiveTab("Vehicles")}
        >
          Vehicles
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "Energy" ? "border-b-4 border-black" : ""
          }`}
          onClick={() => setActiveTab("Energy")}
        >
          Energy
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "Vehicles" ? (
        <div className="grid grid-cols-3 gap-4">
          {/* Features and Charging */}
          <div>
            <h3 className="font-semibold">Features and Charging</h3>
            <ul className="space-y-2">
              <li>Autopilot</li>
              <li>Software Updates</li>
              <li>Upgrades</li>
              <li>Supercharging</li>
              <li>Home Charging</li>
              <li>Security Features</li>
            </ul>
          </div>

          {/* Service and Collision Repair */}
          <div>
            <h3 className="font-semibold">Service and Collision Repair</h3>
            <ul className="space-y-2">
              <li>Do It Yourself Guides</li>
              <li>Schedule a Service Visit</li>
              <li>Find a Collision Center</li>
              <li>Roadside Assistance</li>
              <li>Vehicle Warranty</li>
              <li>Tire Care and Repair</li>
              <li>Service Portal</li>
            </ul>
          </div>

          {/* Tesla Account */}
          <div>
            <h3 className="font-semibold">Tesla Account</h3>
            <ul className="space-y-2">
              <li>Add a Vehicle</li>
              <li>Account Support</li>
              <li>Tesla App</li>
              <li>Refer and Earn</li>
              <li>Financing & Leasing</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {/* Powerwall */}
          <div>
            <h3 className="font-semibold">Powerwall</h3>
            <ul className="space-y-2">
              <li>How Powerwall Works</li>
              <li>System Design</li>
              <li>Prepare for Installation</li>
              <li>Tesla App for Energy</li>
              <li>Get Help and Schedule Service</li>
              <li>Documents</li>
              <li>
                <a href="#" className=" text-blue-500">
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          {/* Solar Roof */}
          <div>
            <h3 className="font-semibold">Solar Roof</h3>
            <ul className="space-y-2">
              <li>Why Solar Roof</li>
              <li>Installation Overview</li>
              <li>Installation Process</li>
              <li>Troubleshooting Your System</li>
              <li>Frequently Asked Questions</li>
              <li>Monitoring</li>
              <li>
                <a href="#" className=" text-blue-500">
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          {/* Solar Panels */}
          <div>
            <h3 className="font-semibold">Solar Panels</h3>
            <ul className="space-y-2">
              <li>Why Tesla Solar</li>
              <li>Solar Panel Sizing and Design</li>
              <li>Turn On Your System</li>
              <li>Billing</li>
              <li>Troubleshooting Your System</li>
              <li>Transferring Ownership</li>
              <li>
                <a href="#" className=" text-blue-500">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
