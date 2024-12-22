import React from "react";

function Page() {
  return (
    <div>
      <div className="text-black flex flex-row p-4 space-x-6 w-full">
        {/* Left Column */}
        <div className="flex flex-col space-y-6 w-full  md:w-1/4">
          <div className="h-32 bg-white rounded-lg flex items-center justify-center">
            Widget 1
          </div>
          <div className="h-56 bg-white rounded-lg flex items-center justify-center">
            Widget 4
          </div>
          <div className="md-custom:hidden h-48 bg-orange-400 rounded-lg flex items-center justify-center">
            Widget 3
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col space-y-6 w-full  md:w-1/4">
          <div className="h-52 bg-white rounded-lg flex items-center justify-center">
            Widget 2
          </div>

          <div className="h-24 bg-white rounded-lg flex items-center justify-center">
            Widget 5
          </div>
          <div className="md-custom:hidden h-48 bg-orange-400 rounded-lg flex items-center justify-center">
            Widget 6
          </div>
        </div>

        {/* Right Column - Only shown in md-custom screen sizes */}
        <div className="flex-col space-y-6 hidden md-custom:flex w-full  md:w-1/4">
          <div className="h-48 bg-orange-400 rounded-lg flex items-center justify-center">
            Widget 3
          </div>
          <div className="h-48 bg-orange-400 rounded-lg flex items-center justify-center">
            Widget 6
          </div>
        </div>
      </div>

      {/* For screens wider than 1000px */}
      <div className="block md-custom:hidden text-center">
        for screen width &gt;1000px
      </div>

      {/* For screens with width <= 1000px */}
      <div className="hidden text-center md-custom:flex">
        for screen width &lt;= 1000px
      </div>
    </div>
  );
}

export default Page;
