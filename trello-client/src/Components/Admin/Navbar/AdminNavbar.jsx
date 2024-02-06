import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from '../../../Context/ThemeContext';
import { useSidebarOpen } from "../../../Context/SidebarContext";
import CalanderModal from "../../../Modal/Admin/CalanderModal";


function NavBar() {
  //   const dispatch = useDispatch();
  const { theme } = useTheme()
  const navigate = useNavigate();
  const { toggleChange } = useSidebarOpen()
  const [isCalenderModalOpen, setIsCalenderModalOpen] = useState(false);

  // Calender Modal Function
  const openCalenderModal = () => {
    setIsCalenderModalOpen(true);
  };

  const closeModal = () => {
    setIsCalenderModalOpen(false);
  };

  const list = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };



  return (
    <>
      {isCalenderModalOpen ? <CalanderModal isOpen={isCalenderModalOpen} closeModal={closeModal} /> : ''}
      <nav className={`fixed top-0 z-50 w-full   bg-black border-gray-700  ${theme == 'dark' ? 'bg-black' : 'bg-white'} `}>
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          {/* <Notification /> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">

              {/* Toggle Button to Open Side bar */}
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => {
                  //   dispatch(openSidebar());

                }}
              >
                <svg onClick={toggleChange}
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

            </div>
          </div>

          <div className="flex justify-end">
            {/* Notification and Profile */}
            <div class="flex items-end ">
              {/* Icons */}
              <ul className="flex">

                <li className="text-white mr-2 ">
                  <a

                    href="#"
                    className={`  hover:bg-gray-900 rounded-lg group ${window.location.pathname === "/dashboard"
                      ? 'bg-red-900' : ''}`}
                  >
                    <div onClick={openCalenderModal} className=" w-10 mr-3 h-10  flex flex-col items-center justify-center">
                      <img className="flex items-center" src="calendar.png" width={30} alt="" />
                      <span className={`text-sm text-center w-16  ${theme == 'dark' ? 'text-white' : 'text-gray-500'}  `}>Calender</span>
                    </div>
                  </a>
                </li>


                <li className="text-white mr-2 ">
                  <a
                    onClick={() => { }}
                    href="#"
                    className={`  hover:bg-gray-900 rounded-lg group ${window.location.pathname === "/dashboard"
                      ? 'bg-red-900' : ''}`}
                  >
                    <div className=" w-15 h-10  flex flex-col items-center justify-center">
                      <img className="flex items-center" src="notification.png" width={30} alt="" />
                      <span className={`text-sm text-center w-16   ${theme == 'dark' ? 'text-white' : 'text-gray-500'}`}>Notification</span>
                    </div>
                  </a>
                </li>


                <li className="text-white mr-2 ">
                  <a
                    onClick={() => { }}
                    href="#"
                    className={`  hover:bg-gray-900 rounded-lg group ${window.location.pathname === "/dashboard"
                      ? 'bg-red-900' : ''}`}
                  >
                    <div className=" w-20 ml-2 h-10  flex flex-col items-center justify-center">
                      <img className="flex items-center" src="sms.png" width={30} alt="" />
                      <span className={`text-sm text-center w-16   ${theme == 'dark' ? 'text-white' : 'text-gray-500'}`}>Inbox</span>
                    </div>
                  </a>
                </li>

                <li className="text-white mr-2 ">
                  <a
                    onClick={() => { }}
                    href="#"
                    className={`  hover:bg-gray-900 rounded-lg group ${window.location.pathname === "/dashboard"
                      ? 'bg-red-900' : ''}`}
                  >
                    <div className=" w-20 h-10  flex flex-col items-center justify-center">
                      <img className="flex items-center" src="Leave.png" width={30} alt="" />
                      <span className={`text-sm text-center w-16   ${theme == 'dark' ? 'text-white' : 'text-gray-500'}`}>Leave</span>
                    </div>
                  </a>
                </li>

                <li className="text-white mr-2 ">
                  <a
                    onClick={() => { }}
                    href="#"
                    className={`  hover:bg-gray-900 rounded-lg group ${window.location.pathname === "/dashboard"
                      ? 'bg-red-900' : ''}`}
                  >
                    <div className=" w-20 h-10  flex flex-col items-center justify-center">
                      <img className="flex items-center" src="profile-add.png" width={30} alt="" />
                      <span className={`text-sm text-center w-16   ${theme == 'dark' ? 'text-white' : 'text-gray-500'}`}>Attendance</span>
                    </div>
                  </a>
                </li>

                <li className="text-white mr-2 ">
                  <a
                    onClick={() => { }}
                    href="#"
                    className={`  hover:bg-gray-900 rounded-full group ${window.location.pathname === "/dashboard"
                      ? 'bg-red-900' : ''}`}
                  >
                    <div className=" w-20 h-10  flex flex-col items-center justify-center">
                      <img className="flex items-center" src="Avatar.png" width={40} alt="" />

                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}

export default NavBar;

