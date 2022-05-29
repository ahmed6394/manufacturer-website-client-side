import React from "react";
import award1 from "../../images/award1.jpg";
import award2 from "../../images/award2.jpg";

const Achievements = () => {
  return (
    <div className="my-12">
      <h1 class="text-3xl font-bold text-primary text-center my-3">
        Our Achievements
      </h1>
      <div className="grid grid-cols-2 gap-5 content-center ">
        <div class="card bg-base-100 shadow-xl flex-col lg:flex-row">
          <figure>
            <img src={award1} alt="" class="max-w-sm rounded-lg shadow-2xl" />
          </figure>
          <div class="card-body">
            <h1 class="text-3xl font-bold">
              Sin Chew Business Excellence Awards 2021
            </h1>
            <p>
              One of the most trusted and prestigious business awards programs
              in Malaysia, Sin Chew Business Excellence Awards emphasize on
              strategic management approaches and has been the highest accolades
              for the enterprises.
            </p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl flex-col lg:flex-row">
          <figure>
            <img src={award2} alt="" class="max-w-sm rounded-lg shadow-2xl" />
          </figure>
          <div class="card-body">
            <h1 class="text-3xl font-bold">The Golden Bull Award 2017, 2019</h1>
            <p>
              Acknowledged as the most prestigious and representative annual
              business award, the Golden Bull Award honors the best of SMEs in
              Malaysia by giving them due recognition for their hard-earned
              success and outstanding achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
