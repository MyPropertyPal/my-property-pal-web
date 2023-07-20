import React from "react";
import Link from "next/link";
import Image from "next/image";

function GuestHome() {
  /**
   * Static Image
   */
  const mapBoxStatImg =
    "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+040cfb(-122.4848,37.7768),pin-s+040dfa(-121.9888,37.5768),pin-s+040dfa(-122.0848,37.6768),pin-s+040dfa(-122.2444,37.8268)/-122.2848,37.7768,7.8,8,50/800x600@2x?access_token=pk.eyJ1IjoiaGNoYWxpbjk4IiwiYSI6ImNsZzI5MHE3cTAzNXYzaHFwZnkzOGo4czEifQ.ElOOIOXuiZACF4j0219Wqw";

  return (
    // Hero section
    <div
      // page container
      className="flex
   "
    >
      <div
        // content container
        className="
      mx-auto w-[90%]
      h-screen
      flex-col
     "
      >
        {/* title */}
        <p className=" h-30 md:h-10 mx-auto my-10  font-bold text-4xl justify-center text-center">
          Real estate CRM for{" "}
          <span className="underline decoration-blue-400 decoration-4 decoration">
            nomadic
          </span>{" "}
          real estate investors
        </p>
        {/* FIRST SECTION */}
        <div className="flex flex-col h-[200px]  justify-left text-center text  justify-around ">
          {/* TOP */}
          <p className="w-[80%] m-auto">
            Built by a real estate investor, for real estate investors of all
            sizes. My Property Pal is a cutting edge real estate management
            stystem designed to help you live a nomadic lifestyle abroad. All
            while maintaining and scaling your business to fit your lifestyle.
            Our technologies makes living your best life abroad easy.
          </p>
          <div className="flex  justify-center self-center mt-5">
            <Link
              href="/Signup"
              className=" text-center flex rounded-lg  h-10 w-[100px] bg-blue-400 m-auto"
            >
              <p className="flex m-auto ">Sign up</p>
            </Link>
          </div>
        </div>
        {/* middle seciont w/ background */}
        <div className="h-full  z-10 relative mt-10 bg-slate-100 pt-5 rounded-t-[20%]">
          {/* blue bg */}
          {/* <div className="absolute h-full mx-10 w-[60%] top-20 left-[25%] md:top-20 z-0 bg-blue-400 rounded-t-[20%] md:rounded-t-[40%]"></div> */}
          {/* black box */}
          <p className="text-slate-800 text-center pt-8 text-3xl ">
            Visualize your portfolio with mapbox
          </p>
          <div
            className=" relative w-[70%] md:w-[50%] h-[400px] md:h-[400px] z-10 m-auto bg-slate-900 border-[#D39852]
          border-[3px] rounded-3xl mt-5"
          >
            <Image
              className=" rounded-3xl object-cover "
              src={mapBoxStatImg}
              fill={true}
              unoptimized={false}
              alt="Static photo of mapbox api"
            />
          </div>
        </div>
        {/* BOTTOM */}
        {/* Background */}
      </div>
    </div>
  );
}

export default GuestHome;
