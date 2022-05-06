import React from "react";
import { Link } from "react-router-dom";
import useBook from "../../../Hooks/useBook";
import Cart from "../../Shared/Cart/Cart";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaDribbble,
} from "react-icons/fa";
import "./Home.css";
import serviceOne from "../../../assets/images/ser-1.jpg";
import serviceTwo from "../../../assets/images/ser-2.jpg";
import serviceThree from "../../../assets/images/ser-3.jpg";
import serviceFour from "../../../assets/images/ser-4.jpg";
import Review from "../../Review/Review";
import Loading from "../../Shared/Loading/Loading";

const Home = () => {
  const [books] = useBook();

  return (
    <div>
      {/* Inventory section Start hare */}
      {books ? (
        <section className="row mx-auto book-container container my-5">
          <h1 className="text-center text-primary">Our Inventory Items</h1>
          {books.slice(0, 6).map((book) => (
            <Cart key={book._id} book={book} />
          ))}
          <Link className="text-center mb-3" to="/allbook">
            Show all Book
          </Link>
        </section>
      ) : (
        <Loading />
      )}

      {/* Service section start here (Bonus-1)  */}
      <section className="my-5 container">
        <h2 className="text-center">Services We Provide</h2>
        <p className="text-center">
          Through our experienced operations team we can handle various kind of
          supply chain operations and services
        </p>
        <div className="row mx-0">
          <div className="col-12 col-md-6 col-lg-3 p-2">
            <img className="w-100" src={serviceOne} alt="" />
            <p className="text-center my-2">
              On-Demand Warehousing Space Services
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-link text-decoration-none">
                Read More
              </button>
              <span className="d-flex gap-2">
                <span>Share:</span>
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaDribbble />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2">
            <img className="w-100" src={serviceTwo} alt="" />
            <p className="text-center my-2">
              Kitting, Packing and Other Customized Operation
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-link text-decoration-none">
                Read More
              </button>
              <span className="d-flex gap-2">
                <span>Share:</span>
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaDribbble />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2">
            <img className="w-100" src={serviceThree} alt="" />
            <p className="text-center my-2">Value Added Services</p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-link text-decoration-none">
                Read More
              </button>
              <span className="d-flex gap-2">
                <span>Share:</span>
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaDribbble />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2">
            <img className="w-100" src={serviceFour} alt="" />
            <p className="text-center my-2">
              Distribution and Reverse Logistics
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-link text-decoration-none">
                Read More
              </button>
              <span className="d-flex gap-2">
                <span>Share:</span>
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaDribbble />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Review section start here (Bonus-2) */}
      <section>
        <Review />
      </section>
    </div>
  );
};

export default Home;
