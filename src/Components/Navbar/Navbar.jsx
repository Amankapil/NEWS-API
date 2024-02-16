import React, { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <>
      <>
        <div className="w-full z-[99999990999999] h-[91px] px-20 bg-white bg-opacity-70 backdrop-blur-[110.60px] flex-col justify-center items-center gap-2.5 inline-flex sticky top-0">
          <div className="self-stretch pt[10px] pb-2.5 justify-between items-center inline-flex sticky top-10 ">
            <div className="w-[183px] h-[51px] pr-[6.40px] pt[16.37px] flex-col justify-center items-start gap-[14.69px] inline-flex">
              <div className="origin-top-left text-black text-xl font-normal ">
                <a href="/">Peronal Dashboard</a>
              </div>
            </div>
            <div className="justify-center items-center gap-[45px] flex max-lghidden">
              <div className="justify-start items-start gap-7 flex">
                {/* <div className="text-black text-base font-normal">
                  <div>Services</div>
                </div> */}
                <div className="text-black text-base font-normal ">
                  <a href={"/"}>Weather details</a>
                </div>
              </div>
              <a
                href={"/"}
                className="talk-btn px-4 py-2 bg-neutral-100 rounded-[30px] justify-center items-center gap-2 flex hover:bg-blue-500 transition-all text-black hover:text-white"
              >
                <div className="textblack text-base font-normal">
                  Login to dash for more information
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
