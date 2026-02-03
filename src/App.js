import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen bg-richblack-900">
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

       <Routes>

        <Route path="/" element={<Home/>}> </Route>

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>

        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>

        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
          }></Route>
       </Routes>
    </div>
  )
}

export default App;
