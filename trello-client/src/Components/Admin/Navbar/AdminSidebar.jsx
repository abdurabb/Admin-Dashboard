import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from '../../../Context/ThemeContext';
import { useSidebarOpen } from '../../../Context/SidebarContext';


function SideBar() {

    const { theme, toggleTheme } = useTheme()
    const { sidebarOpen } = useSidebarOpen()
    const navigate = useNavigate();

    const [toggleSidebar, setToggleSidebar] = useState(false)
    const [droping, setDroping] = useState(false);


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    

    return (

        <aside
            id="logo-sidebar"
            className={`fixed  top-0 left-0 z-30  w-64 h-screen pt-20 transition-transform 
            
          sm:translate-x-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'
                } ${! sidebarOpen ?'hidden sm:block':'' } overflow-y-auto  `} // Use hidden and sm:block to control visibility
            aria-label="Sidebar"
        >
            <div className={` h-full px-3 pb-4 overflow-y-auto      ${theme == 'dark' ? 'bg-black' : 'bg-white'} `}>
                <ul class="space-y-9 font-medium ">
                    {/* Logo */}
                    <div className="mt-0">
                        <a
                            href="#"
                            className={`flex  border-b hover:bg-gray-900 rounded-lg group `}
                        >
                            <img src="Logo.png" alt="" />
                        </a>
                    </div>

                    {/*  Details */}
                    <li>
                        <div className="border-b p-2 " >
                            {/* Dash Board */}
                            <a
                                onClick={() => {

                                    // navigate("/dashboard");
                                    // dispatch(openSidebar());
                                }}
                                href="#"
                                className={`flex  items-center p-2 hover:bg-gray-900 rounded-lg group ${window.location.pathname === "/admin"
                                    ? `${theme == 'dark' ? 'bg-gray-900':'bg-gray-500'}`
                                    : ''}`}
                            >
                                <img src="darhboard_alt.png" width={25} alt="" />
                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Board</span>
                            </a>

                            {/* Home */}
                            <a
                                onClick={() => {

                                    // navigate("/dashboard");
                                    // dispatch(openSidebar());
                                }}
                                href="#"
                                className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                    ? 'bg-red-900' : ''}`}
                            >
                                <img src="Vector.png" width={25} alt="" />
                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Home</span>
                            </a>

                            {/* Mail */}
                            <a
                                onClick={() => {

                                    // navigate("/dashboard");
                                    // dispatch(openSidebar());
                                }}
                                href="#"
                                className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                    ? 'bg-red-900' : ''}`}
                            >
                                <img src="image 192.png" width={25} alt="" />
                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Mail</span>
                            </a>

                            {/* Mail */}
                            <a
                                onClick={() => {

                                    // navigate("/dashboard");
                                    // dispatch(openSidebar());
                                }}
                                href="#"
                                className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                    ? 'bg-red-900' : ''}`}
                            >
                                <img src="gg_feed.png" width={25} alt="" />
                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Feed</span>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className={`ms-3 flex justify-between ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >
                            <div>
                                BOARDS
                            </div>
                            <div>
                                <button> <img width={25} src={`${theme == 'dark' ? 'basil_plus-outline blue.png' : 'basil_plus-outline black.png'}`} alt="" /> </button>
                            </div>
                        </div>
                        {/* Board 1 */}
                        <a
                            onClick={() => {
                                // setDroping(true)
                                setDroping((prevStatus) => (prevStatus === true ? false : true));
                                // navigate("/dashboard");
                                // dispatch(openSidebar());
                            }}
                            href="#"
                            className={`flex justify-between   mt-2 items-center hover:bg-gray-500  p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                ? 'bg-gray-900' : ''}`}
                        >

                            <div className=" flex p-2">
                                <img src="FrameName.png" width={25} height={25} className="h-25" alt="" />
                                <span className={`ms-3   ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Name</span>
                            </div>

                            <div className="">
                                {droping ? <button className=""> <img src='arrow-Up.png' alt="" width={30} height={30} /> </button> :
                                    <button className=" "> <img src='arrow-down.png' alt="" width={30} height={30} /> </button>
                                }
                            </div>
                        </a>
                        {
                            droping ?

                                <div>
                                    <ul>

                                        <li>
                                            <a
                                                onClick={() => {
                                                    // navigate("/dashboard");
                                                    // dispatch(openSidebar());
                                                }}
                                                href="#"
                                                className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                                    ? 'bg-red-900' : ''}`}
                                            >
                                                <img src="gg_feed.png" width={25} alt="" />
                                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Road Map</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                onClick={() => {
                                                    // navigate("/dashboard");
                                                    // dispatch(openSidebar());
                                                }}
                                                href="#"
                                                className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                                    ? 'bg-red-900' : ''}`}
                                            >
                                                <img src="gg_feed.png" width={25} alt="" />
                                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Task</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                onClick={() => {
                                                    // navigate("/dashboard");
                                                    // dispatch(openSidebar());
                                                }}
                                                href="#"
                                                className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group ${window.location.pathname === "/dashboard"
                                                    ? 'bg-red-900' : ''}`}
                                            >
                                                <img src="gg_feed.png" width={25} alt="" />
                                                <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Members</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                : ''
                        }
                    </li>

                    <li className=" pt-4 mt-32 border-t">
                        {/* logout */}
                        <a
                            onClick={() => {
                                // navigate("/dashboard");
                                // dispatch(openSidebar());
                            }}
                            href="#"
                            className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group `}
                        >
                            <img src="Icons.png" width={25} alt="" />
                            <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >Log Out</span>
                        </a>

                        {/* Dark Mode */}
                        <a
                            onClick={() => {
                                // navigate("/dashboard");
                                // dispatch(openSidebar());
                            }}
                            href="#"
                            className={`flex  mt-2 items-center hover:bg-gray-900 p-2 rounded-lg group `}
                        >
                            <img src="IconsDark.png" width={25} alt="" />
                            <span className={`ms-3  ${theme == 'dark' ? 'text-gray-50' : 'text-black'}  `} >
                                {theme === 'dark' ?
                                    <div className="flex">
                                        <span className={`  text-gray-50 `} >Light Mode </span>
                                        <button onClick={toggleTheme} className="ml-8"> <img src="Switch toggle.png" width={32} alt="" /> </button>
                                    </div>

                                    :
                                    <div className="flex">
                                        <span className={`  text-black    `} >Dark Mode</span>
                                        <button onClick={toggleTheme} className="ml-8"> <img src="Switch toggleLight.png" width={32} alt="" /> </button>
                                    </div>
                                }
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
