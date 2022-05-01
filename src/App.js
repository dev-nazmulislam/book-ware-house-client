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
import SearchItem from "./components/Dashboard/SearchItem/SearchItem";
import UpdateItem from "./components/Dashboard/UpdateItem/UpdateItem";
import UpdateQuntity from "./components/Dashboard/UpdateQuntity/UpdateQuntity";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Singup from "./components/Register/Singup";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import RequerAuth from "./components/Shared/RequerAuth/RequerAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allbook" element={<AllBooks />} />
        <Route
          path="/dashboard"
          element={
            <RequerAuth>
              <Dashboard />
            </RequerAuth>
          }
        >
          <Route path="manageitem" element={<ManageItem />}>
            <Route path=":itemid" element={<UpdateItem />} />
          </Route>
          <Route path="search/:text" element={<SearchItem />} />
          <Route path="additem" element={<AddItems />} />
          <Route path="quntity" element={<UpdateQuntity />} />
          <Route path="user" element={<ManageUser />} />
          <Route path="team" element={<ManageTeam />} />
          <Route path="chart" element={<Chart />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route
          path="/dashboard/search"
          element={
            <RequerAuth>
              <Dashboard />
            </RequerAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
