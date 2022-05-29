import React from "react";

const Review = ({ review, user }) => {
  const { rating, description } = review;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>User Name: *****</p>
        <div className="flex items-center">
          <div>
            <h4 className="text-xl">Rating: {rating}/5</h4>
          </div>
        </div>

        <p>About tools: {description}</p>
      </div>
    </div>
  );
};

export default Review;
