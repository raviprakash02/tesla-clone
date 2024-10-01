import React from "react";

const TeslaLeasing = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-lg font-semibold mb-4">In This Article</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#getting-started" className="hover:underline">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#financing" className="hover:underline">
                Financing With a Lease
              </a>
            </li>
            <li>
              <a href="#delivery" className="hover:underline">
                Taking Delivery
              </a>
            </li>
            <li>
              <a href="#payments" className="hover:underline">
                Payments and Fees
              </a>
            </li>
            <li>
              <a href="#lease-end" className="hover:underline">
                Lease-End Information
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-3/4 lg:pl-8">
          <h1 className="text-3xl font-bold mb-6">Tesla Leasing</h1>
          <p className="text-gray-600 mb-4">
            Tesla leasing offers affordable terms and convenient, monthly
            payment options to qualifying customers.
          </p>

          <h2 id="getting-started" className="text-2xl font-semibold mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600 mb-4">
            When ordering your Tesla vehicle, select as your payment method.
          </p>
          <p className="text-gray-600 mb-4">
            The Tesla leasing calculator is available in the Design Studio to
            help you determine the right payment option.
          </p>
          <p className="text-gray-600 mb-4">
            Leasing is not available for Cybertruck.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Note:</strong> Tesla leasing is not available in all states
            and additional taxes and fees may apply. These estimated lease
            payments are not guaranteed and are subject to our underwriting
            process.
          </p>
          <a href="#top" className="text-blue-500 hover:underline">
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeslaLeasing;
