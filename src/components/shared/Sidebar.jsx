import React from "react";
import {NavLink} from 'react-router-dom'
import {
  RiHome6Line,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,

  RiAddCircleFill,
} from "react-icons/ri";
import ThemeToggle from '../ToggelTheme'

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`dark:bg-custom-secondary-black bg-custom-purpure-light fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <img className="rounded-full w-[60px] h-[60px] mx-auto" src="/logo.svg" alt="" />
          </li>
          <li className=" p-4 rounded-tl-xl rounded-bl-xl">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <RiHome6Line className="text-2xl" />
            </NavLink>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <RiAddCircleFill className="text-2xl" />
            </NavLink>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </NavLink>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </NavLink>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </NavLink>
          </li>
          <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="#"
              className="group-hover:custom-purpure-dark-light p-4 flex justify-center rounded-xl text-custom-purpure-dark-light dark:group-hover:text-white transition-colors"
            >
              <ThemeToggle className="text-2xl" />
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
