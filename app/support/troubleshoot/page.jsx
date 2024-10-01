import React from "react";

const CleanVehicleReport = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        How to View and Request Your 2023 IRA Clean Vehicle Report
      </h1>
      <p className="text-gray-600 mb-4">
        Your 2023 Clean Vehicle Report (IRS form 15400) is available by request
        through your Tesla Account. You will need this document to claim your
        2023 EV tax credit.
      </p>
      <p className="text-gray-600 mb-4">
        To view and download your Clean Vehicle Report, follow these steps:
      </p>
      <ol className="list-decimal list-inside mb-4 text-gray-600">
        <li>
          Go to{" "}
          <a href="https://tesla.com/contactus" className="text-blue-500">
            tesla.com/contactus
          </a>
          .
        </li>
        <li>Sign in using your Tesla Account email and password.</li>
        <li>From the dropdown, select ‘Generate 2023 IRA Document.’</li>
        <li>Complete the form.</li>
        <li>Tap ‘Submit.’</li>
      </ol>
      <p className="text-gray-600 mb-4">
        Your Clean Vehicle Report document will be available in your Tesla
        Account 24 hours after you submit your request.
      </p>
      <p className="text-gray-600 mb-4">
        To view and download your Clean Vehicle Report, submit your document
        request and follow these steps:
      </p>
      <ol className="list-decimal list-inside mb-4 text-gray-600">
        <li>Sign in to your Tesla Account.</li>
        <li>Select ‘Documents.’</li>
        <li>Select ‘IRA Clean Vehicle Credit Report.’</li>
      </ol>
      <p className="text-gray-600">
        If your Clean Vehicle Report document is not available, contact the
        Customer Support team.{" "}
        <a href="https://www.irs.gov" className="text-blue-500">
          Review the IRS website
        </a>{" "}
        for a full list of requirements.
      </p>
    </div>
  );
};

export default CleanVehicleReport;
