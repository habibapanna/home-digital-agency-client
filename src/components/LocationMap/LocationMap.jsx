import React from "react";

const LocationMap = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen">
      

      {/* Google Maps Embed (No API Key Required) */}
      <div className="w-full max-w-3xl h-96 overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Google Map Location"
          className="w-full h-full"
          src="https://www.google.com/maps?q=123/B,+Route+66,+Downtown,+Washington,+DC+20004,+US&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
