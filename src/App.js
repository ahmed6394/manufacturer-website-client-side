import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddTool from "./Pages/Dashboard/AddTool";
import ManageTools from "./Pages/Dashboard/ManageTools";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Share/Footer";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="addTool" element={<AddTool></AddTool>}></Route>
        <Route path="manageTool" element={<ManageTools></ManageTools>}></Route>
        {/* <Route path="" element={}></Route>
        <Route path="" element={}></Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
