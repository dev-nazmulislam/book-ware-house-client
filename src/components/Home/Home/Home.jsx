import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBook from "../../../Hooks/useBook";
import Cart from "../../Shared/Cart/Cart";
import "./Home.css";
import serviceOne from "../../../assets/images/ser-1.jpg";
import serviceTwo from "../../../assets/images/ser-2.jpg";
import serviceThree from "../../../assets/images/ser-3.jpg";
import serviceFour from "../../../assets/images/ser-4.jpg";

const Home = () => {
  const [books] = useBook();
  return (
    <div>
      <section className="row mx-auto container my-5">
        <h1 className="text-center text-primary">Our Inventory Items</h1>
        {books.slice(0, 6).map((book) => (
          <Cart key={book._id} book={book} />
        ))}
        <Link className="text-center mb-3" to="/allbook">
          Show all Book
        </Link>
      </section>
      <section className="my-5 container">
        <h2 className="text-center">Services We Provide</h2>
        <p className="text-center">
          Through our experienced operations team we can handle various kind of
          supply chain operations and services
        </p>
        <div className="row mx-0">
          <div className="col-3">
            <img className="w-100" src={serviceOne} alt="" />
            <p className="text-center my-2">
              On-Demand Warehousing Space Services
            </p>
            <button className="btn btn-link d-block mx-auto text-decoration-none">
              Read More
            </button>
          </div>
          <div className="col-3">
            <img className="w-100" src={serviceTwo} alt="" />
            <p className="text-center my-2">
              Kitting, Packing and Other Customized Operation
            </p>
            <button className="btn btn-link d-block mx-auto text-decoration-none">
              Read More
            </button>
          </div>
          <div className="col-3">
            <img className="w-100" src={serviceThree} alt="" />
            <p className="text-center my-2">Value Added Services</p>
            <button className="btn btn-link d-block mx-auto text-decoration-none">
              Read More
            </button>
          </div>
          <div className="col-3">
            <img className="w-100" src={serviceFour} alt="" />
            <p className="text-center my-2">
              Distribution and Reverse Logistics
            </p>
            <button className="btn btn-link d-block mx-auto text-decoration-none">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
