import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Experience
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  FullStack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Freelance
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  November 2023 - Now
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Frontend Development: Building responsive and interactive user
                  interfaces (UI) using languages such as HTML, CSS, and
                  JavaScript. This involves designing layouts, user
                  interactions, and integrating with the backend. Backend
                  Development: Building the server-side logic and
                  functionalities of the application using various backend
                  technologies such as Node.js and Firebase, Database
                  Management: Designing database schemas, creating and managing
                  databases, and writing queries to access and manipulate data.
                  This may involve using relational databases such as MySQL,
                  PostgreSQL, or SQL Server, as well as NoSQL databases like
                  MongoDB or Redis, depending on the project's requirements.
                </p>
              </div>
            </div>
            <div className="mt-10 relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Virtual Internship Program
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Forage
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  May 2023 - August 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Lyft: Back-End Engineering Virtual Experience Program:
                  Software Architecture, Unit Testing, Test-Driven Development.
                  BlackBird: Software Engineering Virtual Experience Program:
                  Collaborate Using GitHub with Propeller, Build And Verify Your
                  Code with Harrison AI, Utilize An Open Source Project with
                  Morse Micro. Walmart: Advanced Software Engineering Virtual
                  Experience Program
                </p>
              </div>
            </div>

            <div className="mt-10 relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Driver GoCar
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  PT. Aplikasi Karya Anak Bangsa (Mitra)
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  May 2019 - December 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Provide excellent customer service, greeting passengers
                  politely and assisting them with their belongings if needed.
                  Communicate with passengers in a clear and respectful manner,
                  addressing any inquiries or concerns. Ensure passenger safety
                  by obeying traffic rules and regulations and driving
                  responsibly.
                </p>
              </div>
            </div>
            <div className="mt-10 relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Admin & General Affair
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  PT. Putra Citanusa
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  August 2015 - April 2019
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Arrange and create attendance records for financial employees,
                  specifically cashiers. Perform server audits by reconciling
                  physical cash received by cashiers with the system records.
                  Manage the parking system, including issuing tickets,
                  collecting fees, and providing accurate change to customers.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack JavaScript Immersive Program
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Hacktiv8
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  February 2023 - July 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Hactiv8's 4-month Intensive Fullstack JavaScript Program:
                  Learn fundamentals and latest tech. Frontend (React/Vue.js),
                  Backend (Node.js/Express), databases, APIs, deployment.
                  Hands-on projects and tech tests. Experienced instructors.
                  Graduate as a successful fullstack web developer.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
