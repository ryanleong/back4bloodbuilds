import React from "react";

const Header = (): JSX.Element => {
  return (
    <div className="mb-6 py-4 border-b-2 border-gray-600">
      <div className="flex container mx-auto px-4">
        <h1 className="font-Teko text-5xl">
          BACK<span className="text-red-600">4</span>BLOOD Builds
        </h1>
      </div>
    </div>
  );
};

export default Header;
