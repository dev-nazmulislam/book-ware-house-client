import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineAreaChart,
  AiFillEdit,
  AiFillFileAdd,
  AiOutlineUsergroupAdd,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import "./Dashboard.css";
import useBook from "../../Hooks/useBook";

const Dashboard = () => {
  const [books] = useBook();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <section className="row px-0 mx-0">
        <div className="col-12 col-md-2 shadow asid-menu">
          {
            <section className="d-flex p-2 my-2">
              <p>
                <Link className="me-2" to="/dashboard">
                  <AiFillHome />
                </Link>
              </p>
              <p> {location.pathname}</p>
            </section>
          }
          <input
            onChange={(e) => navigate(`/dashboard/search/${e.target.value}`)}
            className="rounded-pill text-center mb-2"
            type="search"
            placeholder="Search Item"
          />
          <div className="side-menu rounded px-2">
            <Link
              className="d-flex text-dark align-items-center text-decoration-none"
              to="/dashboard/manageitem"
            >
              <p className="me-3 fs-4">{<AiFillEdit />}</p>
              <p className="mt-2">Manage Items</p>
              <p className="ms-auto mt-2">{<MdKeyboardArrowRight />}</p>
            </Link>
          </div>
          <div className="side-menu rounded px-2">
            <Link
              className="d-flex text-dark align-items-center text-decoration-none"
              to="/dashboard/additem"
            >
              <p className="me-3 fs-4">{<AiFillFileAdd />}</p>
              <p className="mt-2">Add Items</p>
              <p className="ms-auto mt-2">{<MdKeyboardArrowRight />}</p>
            </Link>
          </div>
          <div className="side-menu rounded px-2">
            <Link
              className="d-flex text-dark align-items-center text-decoration-none"
              to="/dashboard/user"
            >
              <p className="me-3 fs-4">{<AiOutlineUserAdd />}</p>
              <p className="mt-2">Manage User</p>
              <p className="ms-auto mt-2">{<MdKeyboardArrowRight />}</p>
            </Link>
          </div>
          <div className="side-menu rounded px-2">
            <Link
              className="d-flex text-dark align-items-center text-decoration-none"
              to="/dashboard/team"
            >
              <p className="me-3 fs-4">{<AiOutlineUsergroupAdd />}</p>
              <p className="mt-2">Manage Team</p>
              <p className="ms-auto mt-2">{<MdKeyboardArrowRight />}</p>
            </Link>
          </div>
          <div className="side-menu rounded px-2">
            <Link
              className="d-flex text-dark align-items-center text-decoration-none"
              to="/dashboard/chart"
            >
              <p className="me-3 fs-4">{<AiOutlineAreaChart />}</p>
              <p className="mt-2">Chart</p>
              <p className="ms-auto mt-2">{<MdKeyboardArrowRight />}</p>
            </Link>
          </div>
          <div className="side-menu rounded px-2">
            <Link
              className="d-flex text-dark align-items-center text-decoration-none"
              to="/dashboard/help"
            >
              <p className="me-3 fs-4">{<FiHelpCircle />}</p>
              <p className="mt-2">Help Guide</p>
              <p className="ms-auto mt-2">{<MdKeyboardArrowRight />}</p>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-10">
          <section className="container px-4">
            <div className="row gx-3 my-4">
              <div className="col">
                <div
                  style={{ backgroundColor: "#1FA9D7" }}
                  className="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">{books.length}</p>
                  <h4 className="text-center">Products</h4>
                </div>
              </div>
              <div className="col">
                <div
                  style={{ backgroundColor: "#63C2DF" }}
                  className="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">
                    {books.reduce((a, b) => +a + +b.stockQuantity, 0)}
                  </p>
                  <h4 className="text-center">Quantity</h4>
                </div>
              </div>
              <div className="col">
                <div
                  style={{ backgroundColor: "#FEC106" }}
                  className="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">
                    {books.reduce(
                      (a, b) => +a + +b.price * +b.stockQuantity,
                      0
                    )}
                  </p>
                  <h4 className="text-center">Price</h4>
                </div>
              </div>
              <div className="col">
                <div
                  style={{ backgroundColor: "#F96C6C" }}
                  className="text-light p-3 border rounded shadow"
                >
                  <p className="fs-3 text-center">00</p>
                  <h4 className="text-center">User Login</h4>
                </div>
              </div>
            </div>
          </section>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
