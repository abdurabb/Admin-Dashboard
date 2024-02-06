import React from "react";
// import { useNavigate } from "react-router-dom";

import AdminSidebar from '../../Components/Admin/Navbar/AdminSidebar'
import NavBar from '../../Components/Admin/Navbar/AdminNavbar'
import Content from "../../Components/Admin/Navbar/Content";
import { Outlet } from "react-router-dom";

function Home() {
    // const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <AdminSidebar />
            <Content>
                <Outlet />
            </Content>
        </>
    );
}

export default Home;
