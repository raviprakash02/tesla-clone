import React from "react";

const SuperchargingCredits = () => {
  return (
    <div className="p-8">
      {/* Sidebar */}
      <div className="w-1/4 pr-8">
        <h2 className="font-bold text-lg mb-4">In This Article</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-blue-600">Overview</li>
          <li className="cursor-pointer hover:text-blue-600">
            Locating a Supercharger
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Payments and Fees
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Free Supercharging
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            V3 Superchargers
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            V4 Superchargers
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Troubleshooting
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Additional Resources
          </li>
          <li className="cursor-pointer text-blue-600 font-bold">
            Supercharging Credits
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-6">Supercharging Credits</h2>

        {/* FAQ Section */}
        <div className="space-y-4">
          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="font-medium">
              How can I check if I have Supercharging Credits available?
            </h3>
            <p className="mt-2 text-gray-700">
              You can check your available Supercharging Credits through the
              Tesla mobile app. Navigate to the "Charging" section to view your
              balance.
            </p>
          </div>

          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="font-medium">
              What happens when I run out of Supercharging Credits?
            </h3>
            <p className="mt-2 text-gray-700">
              When your Supercharging Credits are exhausted, you will be billed
              according to your local Supercharging rates. You can add credits
              or pay-as-you-go through the Tesla app.
            </p>
          </div>

          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="font-medium">
              Can I earn additional Supercharging Credits?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes, you can earn Supercharging Credits through Tesla’s referral
              program or special promotions. Check the Tesla website or app for
              current offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperchargingCredits;
