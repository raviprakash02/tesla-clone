"use client";

import React from "react";

function Threed() {
  return (
    <div>
      <div
        className="sketchfab-embed-wrapper"
        style={{
          backgroundColor: "transparent",
          zIndex: 9999, // Higher value for visibility
          position: "absolute", // Use absolute or fixed for z-index to work
          top: 0,
          left: 0,
          width: "100%",
          height: "1000px",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          title="Parrot"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/c7d4e3e1ab884fe7af8e8f72bdf5359b/embed?autospin=1&autostart=1&preload=1"
        ></iframe>
      </div>
    </div>
  );
}

export default Threed;
