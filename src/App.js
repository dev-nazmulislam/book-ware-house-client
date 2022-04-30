import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllBooks from "./components/AllBooks/AllBooks";
import AddItems from "./components/Dashboard/AddItems/AddItems";
import Chart from "./components/Dashboard/Chart/Chart";
import Dashboard from "./components/Dashboard/Dashboard";
import Help from "./components/Dashboard/Help/Help";
import ManageItem from "./components/Dashboard/ManageItems/ManageItem";
import ManageTeam from "./components/Dashboard/ManageTeam/ManageTeam";
import ManageUser from "./components/Dashboard/ManageUser/ManageUser";
import UpdateItem from "./components/Dashboard/UpdateItem/UpdateItem";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Singup from "./components/Register/Singup";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allbook" element={<AllBooks />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="manageitem" element={<ManageItem />}>
            <Route path=":itemid" element={<UpdateItem />} />
          </Route>
          <Route path="additem" element={<AddItems />} />
          <Route path="user" element={<ManageUser />} />
          <Route path="team" element={<ManageTeam />} />
          <Route path="chart" element={<Chart />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
