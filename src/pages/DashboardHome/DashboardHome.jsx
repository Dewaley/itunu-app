import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { BsFillHouseFill,BsWallet } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";

const DashboardHome = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>Welcome Mark</h1>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex flex-col gap-8 lg:w-[65%]'>
          <div className='grid sm:grid-cols-2 gap-8'>
            <div className='bg-white rounded shadow-md flex justify-between flex-col cursor-pointer hover:bg-[#c4efdf] p-4'>
              <div className='flex flex-col gap-1'>
                <h3>Total Investments</h3>
                <p className='text-3xl'>$0</p>
                <p className='flex items-center gap-2 text-xl'>
                  <span className="rotate-[135deg]">
                    <BiLogInCircle />
                  </span>{" "}
                  $0 ROI
                </p>
              </div>
              <div className='w-full flex justify-end'>
                <button className='border-2 border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  View Installments
                </button>
              </div>
            </div>
            <div className='bg-white rounded shadow-md flex justify-between flex-col cursor-pointer hover:bg-[#c4efdf] p-4'>
              <div className='mb-2 flex flex-col gap-1'>
                <h3>Total Properties</h3>
                <p className='text-3xl'>$0</p>
                <p className='flex items-center gap-2 text-xl'>
                  <span>
                    <BsFillHouseFill />
                  </span>{" "}
                  0 Sold
                </p>
                <p className='flex items-center gap-2 text-xl'>
                  <span className="rotate-[135deg]">
                    <BiLogInCircle />
                  </span>{" "}
                  0 Purchased
                </p>
              </div>
              <div className='w-full flex justify-end'>
                <button className='border-2 border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  Manage Properties
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-md flex flex-col gap-2 p-3">
            <h3 className="text-xl">Transaction History</h3>
            <div className="h-[60vh] flex flex-col justify-center items-center gap-2">
              <span className="flex flex-col justify-center items-center h-24 w-24 bg-[#fcf1d9] text-[#5f491a] rounded-full mb-3"><BsWallet/></span>
              <h3 className="font-medium">There's no transaction right now</h3>
              <p className="max-w-[25rem] text-center">Start Investing to see Transaction information, and it will appear here</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:w-[35%]'>
          <div className='bg-white rounded shadow-md flex flex-col gap-2 p-3'>
            <h3>Investment Listings</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <span className='flex h-12 w-12 bg-[#4eab77]'></span>
                <div className='w-full'>
                  <div className='flex justify-between w-full text-sm'>
                    <span>Court House</span>
                    <span>$100/unit</span>
                  </div>
                  <div className='flex justify-between w-full text-xs'>
                    <p className='flex items-center gap-2 bg-[#c4efdf] text-[#4eab77]  p-2 rounded-md font-medium'>
                      <span>
                        <FaUsers />
                      </span>
                      Co Fund
                    </p>
                    <p className='flex items-center gap-2 text-[#4eab77]'>
                      <span>
                        <AiOutlineLineChart />
                      </span>
                      15%
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='flex h-12 w-12 bg-[#4eab77]'></span>
                <div className='w-full'>
                  <div className='flex justify-between w-full text-sm'>
                    <span>Radson</span>
                    <span>$100/unit</span>
                  </div>
                  <div className='flex justify-between w-full text-xs'>
                    <p className='flex items-center gap-2 bg-[#c4efdf] text-[#4eab77]  p-2 rounded-md font-medium'>
                      <span>
                        <FaUsers />
                      </span>
                      Co Fund
                    </p>
                    <p className='flex items-center gap-2 text-[#4eab77]'>
                      <span>
                        <AiOutlineLineChart />
                      </span>
                      15%
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='flex h-12 w-12 bg-[#4eab77]'></span>
                <div className='w-full'>
                  <div className='flex justify-between w-full text-sm'>
                    <span>Lagoon IX</span>
                    <span>$100/unit</span>
                  </div>
                  <div className='flex justify-between w-full text-xs'>
                    <p className='flex items-center gap-2 bg-[#c4efdf] text-[#4eab77]  p-2 rounded-md font-medium'>
                      <span>
                        <FaUsers />
                      </span>
                      Co Fund
                    </p>
                    <p className='flex items-center gap-2 text-[#4eab77]'>
                      <span>
                        <AiOutlineLineChart />
                      </span>
                      15%
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='flex h-12 w-12 bg-[#4eab77]'></span>
                <div className='w-full'>
                  <div className='flex justify-between w-full text-sm'>
                    <span>Downhall</span>
                    <span>$100/unit</span>
                  </div>
                  <div className='flex justify-between w-full text-xs'>
                    <p className='flex items-center gap-2 bg-[#c4efdf] text-[#4eab77]  p-2 rounded-md font-medium'>
                      <span>
                        <FaUsers />
                      </span>
                      Co Fund
                    </p>
                    <p className='flex items-center gap-2 text-[#4eab77]'>
                      <span>
                        <AiOutlineLineChart />
                      </span>
                      15%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center my-2">
                <button className="text-[#4eab77] font-medium">See All</button>
              </div>
            </div>
          </div>
          <div className='bg-white rounded shadow-md flex flex-col gap-2 p-3'>
            <h3>Complete Registration</h3>
            <div className='flex flex-col gap-3 py-2'>
              <div className='flex justify-between items-center gap-2'>
                <div className="flex flex-col text-sm gap-1">
                  <span>Verify Account</span>
                  <span className="text-[#b3b8c0] text-xs">Get Full Access</span>
                </div>
                <button className='border-[1px] border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  Get Started
                </button>
              </div>
              <div className='flex justify-between items-center gap-2'>
                <div className="flex flex-col text-sm gap-1">
                  <span>First Investment</span>
                  <span className="text-[#b3b8c0] text-xs">Start as low as $10</span>
                </div>
                <button className='border-[1px] border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  Get Started
                </button>
              </div>
              <div className='flex justify-between items-center gap-2'>
                <div className="flex flex-col text-sm gap-1">
                  <span>Security</span>
                  <span className="text-[#b3b8c0] text-xs">Secure your account</span>
                </div>
                <button className='border-[1px] border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  Get Started
                </button>
              </div>
              <div className='flex justify-between items-center gap-2'>
                <div className="flex flex-col text-sm gap-1">
                  <span>Fund Wallet</span>
                  <span className="text-[#b3b8c0] text-xs">Add money to Wallet</span>
                </div>
                <button className='border-[1px] border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  Get Started
                </button>
              </div>
              <div className='flex justify-between items-center gap-2'>
                <div className="flex flex-col text-sm gap-1">
                  <span>Risk Assessment</span>
                  <span className="text-[#b3b8c0] text-xs">Know your risk level</span>
                </div>
                <button className='border-[1px] border-[#4eab77] text-[#4eab77] p-1.5 rounded-full'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
