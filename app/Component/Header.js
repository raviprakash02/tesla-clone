"use client";
import React, { useState } from "react";
import "./components.css";
import Link from "next/link";

export default function Header() {
  const [tab, setTab] = useState(null);

  return (
    <div>
      <div className="flex absolute top-0 justify-between items-center w-full h-[10vh] p-5 bg-transparent">
        <a href="/">
          <img className="logo " src="/logo.svg" alt="logo" />
        </a>

        <header className="w-full flex items-center justify-center text-black">
          <nav>
            <ul className="nav-links">
              <li>
                <Link
                  onClick={() => {
                    if (tab === "vehicle") {
                      setTab(null);
                    } else {
                      setTab("vehicle");
                    }
                  }}
                  href="#"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <a
                  onClick={() => {
                    if (tab === "Energy") {
                      setTab(null);
                    } else {
                      setTab("Energy");
                    }
                  }}
                  href="#"
                >
                  Energy
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    if (tab === "Charging") {
                      setTab(null);
                    } else {
                      setTab("Charging");
                    }
                  }}
                  href="#"
                >
                  Charging
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    if (tab === "Discover") {
                      setTab(null);
                    } else {
                      setTab("Discover");
                    }
                  }}
                  href="#"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    if (tab === "Shop") {
                      setTab(null);
                    } else {
                      setTab("Shop");
                    }
                  }}
                  href="#"
                >
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div>
          <header className="sidenav">
            <nav>
              <ul className="sidenav-links">
                <li>
                  <Link href="/support">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-help"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      if (tab === "Energy") {
                        setTab(null);
                      } else {
                        setTab("Energy");
                      }
                    }}
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link href="/teslaacount">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-user-round"
                    >
                      <path d="M18 20a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <div
        className={`${
          tab === null ? "h-0" : "h-96"
        } bg-white w-full absolute top-[10vh] flex overflow-hidden flex-row`}
      >
        {tab === "vehicle" && (
          <section>
            <div className="flex flex-row gap-20 pt-20 pl-20 w-full">
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
            </div>
            <div className="w-[30%] h-full border-l-2 border-black">
              sdfghjk
            </div>
          </section>
        )}
        {tab === "Energy" && (
          <section className="p-8">
            <div className="flex flex-row gap-20 pt-20 pl-20 w-full">
              <div className="flex-1">
                <div className="flex justify-around">
                  <div>
                    <h2 className="font-bold">Solar Panels</h2>
                    <ul>
                      <li>
                        <a href="#" className="text-blue-500">
                          Learn
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500">
                          Order
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold">Solar Roof</h2>
                    <ul>
                      <li>
                        <a href="#" className="text-blue-500">
                          Learn
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500">
                          Order
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold">Powerwall</h2>
                    <ul>
                      <li>
                        <a href="#" className="text-blue-500">
                          Learn
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-500">
                          Order
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold">Megapack</h2>
                    <ul>
                      <li>
                        <a href="#" className="text-blue-500">
                          Learn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-[30%] h-full border-l-2 border-black">
                <ul className="text-right">
                  <li>Schedule a Consultation</li>
                  <li>Why Solar</li>
                  <li>Incentives</li>
                  <li>Support</li>
                  <li>Partner with Tesla</li>
                  <li>Commercial</li>
                  <li>Utilities</li>
                </ul>
              </div>
            </div>
          </section>
        )}
        {tab === "Charging" && (
          <section>
            <div className="flex flex-row gap-20 pt-20 pl-20 w-full">
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
              <div>
                <img
                  className="w-72 object-contain"
                  src="/images/sticker_red.png"
                />
              </div>
            </div>
            <div className="w-[30%] h-full border-l-2 border-black">
              sdfghjk
            </div>
          </section>
        )}
        {tab === "Discover" && (
          <section className="p-8">
            <div className="flex justify-between space-x-16 p-8">
              <div>
                <h3 className="text-gray-500 font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-black">
                      Demo Drive
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Military Purchase Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Video Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-500 font-semibold mb-4">
                  Location Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-black">
                      Find Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Find a Collision Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Find a Certified Installer
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-500 font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-black">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
