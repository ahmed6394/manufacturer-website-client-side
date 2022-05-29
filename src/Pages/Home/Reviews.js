import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Review from "./Review";

const Reviews = () => {
  const [user] = useAuthState(auth);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://calm-lake-90811.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <section className="my-28">
      <div>
        <h3 className="text-3xl font-bold text-primary text-center my-3">
          Consumer Reviews
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} user={user} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
