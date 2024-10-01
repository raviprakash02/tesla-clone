// src/components/SearchBar.js

import React from "react";

function SearchBar() {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}
    >
      <div className="w-full max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;
