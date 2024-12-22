import React from "react";

function page() {
  return (
    <div>
      <div className=" text-black grid grid-cols-2 md-custom:grid-cols-3 gap-4 p-4">
        <div className="md-custom:order-1 h-32 bg-white rounded-lg flex items-center justify-center ">
          Widget 1
        </div>
        <div className=" md-custom:order-2 h-52 bg-white rounded-lg flex items-center justify-center ">
          Widget 2
        </div>

        <div className="md-custom:order-4 h-56 bg-white rounded-lg flex items-center justify-center ">
          Widget 4
        </div>
        <div className="md-custom:order-5 h-24 bg-white rounded-lg flex items-center justify-center ">
          Widget 5
        </div>
        <div className=" md-custom:order-3 h-48 bg-orange-400  rounded-lg flex items-center justify-center ">
          Widget 3
        </div>
        <div className="md-custom:order-6 h-48 bg-orange-400 rounded-lg flex items-center justify-center ">
          Widget 6
        </div>
      </div>
      <div className="block md-custom:hidden text-center">
        for screen width &gt;1000px
      </div>
      <div className="hidden  text-center md-custom:flex   ">
        for screen width &lt;= 1000px
      </div>
    </div>
  );
}

export default page;
