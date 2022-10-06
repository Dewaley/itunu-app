import { useState,useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { BsFillHouseFill, BsBuilding } from "react-icons/bs";
import { MdHouse, MdOutlineNavigateNext } from "react-icons/md";
import { AiFillPieChart, AiFillGift, AiOutlineSetting } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { TbMessages } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";

const Nav = ({ auth }) => {
  const menuItems = [
    {
      name: "Portfolio",
      path: "",
      icon: <MdHouse />,
      end: true,
    },
    {
      name: "Investment",
      path: "/dashboard/user/investment",
      icon: <AiFillPieChart />,
    },
    {
      name: "Property",
      path: "/dashboard/user/property",
      icon: <BsBuilding />,
    },
    {
      name: "Wallet",
      path: "/dashboard/user/wallet",
      icon: <IoIosWallet />,
    },
    {
      name: "Refferal",
      path: "/dashboard/user/refferal",
      icon: <AiFillGift />,
    },
    {
      name: "Settings",
      path: "/dashboard/user/settings",
      icon: <AiOutlineSetting />,
    },
  ];

  const link = "flex items-center text-lg gap-3 text-[#597e85]";
  const activeLink = "flex items-center text-lg gap-3 text-[#4eab77]";

  const [active, setActive] = useState(false);

  return (
    <div>
      {auth && (
        <div>
          <div className='flex justify-between md:justify-end w-full text-2xl z-50'>
            <span
              className='block md:hidden cursor-pointer'
              onClick={() => setActive(true)}
            >
             <AiOutlineMenu />
            </span>
            <span>
              <HiOutlineBell />
            </span>
          </div>
          <div className={`md:hidden flex flex-col justify-between w-[30vw] min-w-[220px] bg-[#093c46] h-screen overflow-hidden py-5 pl-6 absolute top-0 transition-[left] z-40 ${active ? "left-0" : "-left-[220px]" }`}>
            <nav>
              <h1 className='flex justify-end text-2xl text-white mb-10 pr-6 cursor-pointer' onClick={() => setActive(false)}>
                <AiOutlineClose/>
              </h1>
              <ul className='flex flex-col gap-y-3'>
                {menuItems.map((item) => (
                  <li>
                    <NavLink
                      to={item.path}
                      end={item.end}
                      className={({ isActive }) =>
                        isActive ? activeLink : link
                      }
                    >
                      <span className='text-2xl'>{item.icon}</span>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className='text-[#597e85] flex flex-col gap-2 text-sm'>
              <li className='flex items-center gap-2'>
                <span className='flex h-6 w-6 rounded-full bg-[#4eab77]'></span>{" "}
                Mark Daniels
                <span className='text-2xl'>
                  <MdOutlineNavigateNext />
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-2xl'>
                  <TbMessages />
                </span>
                Help Center
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-2xl'>
                  <BiLogOut />
                </span>
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
