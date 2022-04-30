import React from "react";
import "./ViewReview.css";
import { FaUserAlt, FaReply } from "react-icons/fa";
import { IoIosHeartDislike } from "react-icons/io";

const ViewReview = ({ review }) => {
  const { name, description, img, time } = review;

  return (
    <div className="comment">
      <div className="d-flex flex-column flex-md-row align-items-center w-100">
        <div className="comment-profile my-5">
          {img ? (
            <img src={img} alt="" />
          ) : (
            <FaUserAlt className="profile-img" />
          )}
        </div>
        <div className="ms-3 bg-light p-2 w-100">
          <div className="d-flex justify-content-between mb-3">
            <h4>
              {name} (<span className="fs-6">{time}</span>)
            </h4>
            <div>
              <IoIosHeartDislike className="mx-1" />
              <FaReply className="mx-1" />
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewReview;
