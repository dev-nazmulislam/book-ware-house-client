import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseInit";
import ViewReview from "../viewReview/ViewReview";

const Review = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  const [textField, setDescription] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const name = user?.displayName;
  const img = "https://i.ibb.co/M8pgDX9/1024px-User-avatar-svg.png";
  const time = Date().toLocaleString();
  const description = textField;

  useEffect(() => {
    fetch("https://mighty-dusk-49836.herokuapp.com/reviewCount")
      .then((res) => res.json())
      .then((data) => setPageCount(Math.ceil(data.count / 3)));
  }, []);

  useEffect(() => {
    fetch(`https://mighty-dusk-49836.herokuapp.com/reviews?page=${page}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [page]);

  const handleComment = () => {
    if (!user) {
      navigate("/login");
    } else {
      const review = { name, img, time, description };
      fetch("https://mighty-dusk-49836.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          const newReview = [...reviews, review];
          setReviews(newReview);
          alert("user Added successfully");
        });
    }
  };

  return (
    <div className="container">
      <div className="my-5">
        <hr />
        <hr />
        <h4>Add Your Comment!!</h4>
        <textarea
          onBlur={(e) => setDescription(e.target.value)}
          id=""
          rows="5"
          style={{ width: "75%" }}
        ></textarea>
        <br />
        <button onClick={handleComment} className="btn btn-primary ms-2">
          Post Comment
        </button>
        <hr />
        <hr />
      </div>
      <div>
        {reviews.map((review) => (
          <ViewReview key={review._id} review={review} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        {[...Array(pageCount).keys()].map((number, i) => (
          <button
            key={i}
            onClick={() => setPage(number)}
            className={`me-2 ${
              page === number ? "bg-primary text-light" : "bg-light"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Review;
