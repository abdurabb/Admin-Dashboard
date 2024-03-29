// import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Admin/Home";

import AdminRoute from "./Routes/AdminRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route path='' element={<Home />} >
          <Route path='/admin/*' element={<AdminRoute/>} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
