import React from "react";
import Section1 from "./components/Section1";

export default function NavBar() {
  return (
    <>
      <nav className="supportbackground p-4">
        <div className="flex items-center justify-between">
          <a href="/" className="w-fit">
            <img
              className="logo flex justify-center space-x-4 invert"
              src="/logo.svg"
              alt="logo"
            />
          </a>

          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://tesla.com/models"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Model S
              </a>
            </li>
            <li>
              <a
                href="https://tesla.com/model3"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Model 3
              </a>
            </li>
            <li>
              <a
                href="https://tesla.com/modelx"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Model X
              </a>
            </li>
            <li>
              <a
                href="https://tesla.com/modely"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Model Y
              </a>
            </li>
            <li>
              <a
                href="https://tesla.com/solarroof"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Solar Roof
              </a>
            </li>
            <li>
              <a
                href="https://tesla.com/solarpanels"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Solar Panels
              </a>
            </li>
            <li>
              <a
                href="https://www.tesla.com/cybertruck"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Cyber Truck
              </a>
            </li>
            <li>
              <a
                href="https://www.tesla.com/powerwall"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                PowerWall
              </a>
            </li>
          </ul>
          <ul className="flex justify-end space-x-4">
            <li>
              <a
                href="https://shop.tesla.com/"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium "
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-white hover:bg-gray-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Menu
              </a>
            </li>
          </ul>
        </div>
        <div
          className="h-screen bg-cover bg-center flex justify-center items-center"
          style={{
            backgroundImage: "url('https://example.com/your-image.jpg')",
          }}
        >
          <div className="w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </nav>
      <div className="pt-10 py-10 px-24"></div>
      <div class="bg-white py-10 ">
        {" "}
        {/* Trending Topics  */}
        <div class="text-center mb-10">
          {" "}
          <h2 class="text-2xl font-semibold text-gray-900 ">Trending Topics</h2>
          <div class="flex justify-center space-x-6 mt-4">
            <a
              href="/support/how-add-or-remove-vehicles-tesla-app"
              class="text-gray-600 hover:text-black"
            >
              Add a Vehicle
            </a>
            <a
              href="/support/superchargingcredits"
              class="text-gray-600 hover:text-black"
            >
              Supercharging Credits
            </a>
            <a href="/support/leasing" class="text-gray-600 hover:text-black">
              Leasing
            </a>
            <a
              href="/support/ira-clean-vehicle-report/2023"
              class="text-gray-600 hover:text-black"
            >
              IRA Clean Vehicle Report
            </a>
            <a
              href="/support/costofsolar"
              class="text-gray-600 hover:text-black"
            >
              Cost of Solar
            </a>
            <a
              href="/support/troubleshoot"
              class="text-gray-600 hover:text-black"
            >
              Troubleshoot Solar
            </a>
          </div>
        </div>
        <Section1 /> {/* conditional rendering */}
      </div>
      {/* Video Guides */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 py-10">
        <div className="lg:w-1/2 ">
          <img
            src="/images/ixZFqy5RiWR8.webp"
            alt="Video Guide"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-8">
          <h2 className="text-3xl font-semibold mb-4">Video Guides</h2>
          <p className="text-gray-600 mb-6">
            View tutorials and videos designed to educate you on the basics of
            your vehicle and energy products.
          </p>
          <a
            href="https://www.tesla.com/support/videos"
            className="underline hover:text-blue-600 mb-4 block"
          >
            View Video Guides
          </a>
          <p className="text-gray-600 mb-6">
            Explore interactive videos designed to give you a more in-depth look
            at your vehicle and its features.
          </p>
          <a
            href="https://www.tesla.com/support/interactive-videos"
            className="underline hover:text-blue-600"
          >
            Explore Interactive Videos
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 py-10">
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-8">
          <h2 className="text-3xl font-semibold mb-4">Video Guides</h2>
          <p className="text-gray-600 mb-6">
            View tutorials and videos designed to educate you on the basics of
            your vehicle and energy products.
          </p>
          <a href="#" className="underline hover:text-blue-600 mb-4 block">
            View Video Guides
          </a>
          <p className="text-gray-600 mb-6">
            Explore interactive videos designed to give you a more in-depth look
            at your vehicle and its features.
          </p>
          <a href="#" className="underline hover:text-blue-600">
            Explore Interactive Videos
          </a>
        </div>
        <div className="lg:w-1/2 ">
          <img
            src="/images/videoguide2.avif"
            alt="Video Guide"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Can’t find what you are looking for? */}
      <section className="flex flex-col items-center justify-center py-16 bg-gray-100 w-full">
        <h2 className="text-2xl font-semibold mb-4">
          Can't find what you are looking for?
        </h2>
        <p className="text-center text-gray-700  max-w-lg mb-6">
          You can now get answers to questions about your vehicle, account, and
          more in the Tesla app. Select ‘Need More Help’ which can be found
          within the ‘Help’ menu under your profile.
          <br />
          If you still can't find what you're looking for, contact customer
          support directly.
        </p>
        <button className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition">
          Contact Us
        </button>
      </section>
    </>
  );
}
