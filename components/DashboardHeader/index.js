import Image from "next/image";
import React from "react";

const DashboardHeader = ({ displayName, email }) => {
  return (
    <section className="bg-bg-medium">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-8 md:pt-10 lg:pt-15">
        <div className="mt-28 text-center">
          <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-1 md:gap-2 max-w-2xl mx-auto">
            <div>
              <Image
                height={100}
                width={100}
                className="h-8 w-8 rounded-full"
                src="/user.png"
                alt="profile photo"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-3xl tracking-tight font-semibold text-gray-50">
                {displayName}
              </p>
              <p className="text-sm tracking-tight font-light text-gray-400">
                {email}
              </p>
              <p className="text-sm tracking-tight font-light text-gray-400">
                {0} XP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:-mt-10 lg:-mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#1C1B29"
            fillOpacity="1"
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default DashboardHeader;
