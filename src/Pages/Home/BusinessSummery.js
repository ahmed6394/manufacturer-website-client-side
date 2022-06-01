import React from "react";

const BusinessSummery = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-primary text-center my-3">
        Business Overview
      </h3>
      <div class="stats stats-vertical lg:stats-horizontal shadow px-12">
        <div class="stat">
          <div class="stat-title">Annual Revenue</div>
          <div class="stat-value text-primary">$1.2M</div>
          <div class="stat-desc">21% more than last year</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Service Center</div>
          <div class="stat-value text-secondary">100+</div>
          <div class="stat-desc">45% more than last year</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary"></div>
          <div class="stat-value">85%</div>
          <div class="stat-title">Available Spareparts</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary"></div>
          <div class="stat-value">60%</div>
          <div class="stat-title">Avarage Anual Growth</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary"></div>
          <div class="stat-value">100K +</div>
          <div class="stat-title">Consumer</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
