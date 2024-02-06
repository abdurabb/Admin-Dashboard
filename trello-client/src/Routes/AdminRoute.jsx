import React from 'react'
import { Route, Routes } from "react-router-dom";
import Board from '../Pages/Admin/Board';

function AdminRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Board />} />
            </Routes>
        </>
    )
}

export default AdminRoute
