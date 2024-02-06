import React from "react";
import { Outlet, useLocation } from "react-router-dom";

function Content() {
    return (
        <div className="pt-8   sm:ml-64  ">
            <div class="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-8">
                <Outlet />
            </div>
        </div>
    );
}

export default Content;
