import React from "react";

const Tool = ({ tool }) => {
  const { img, description, price, name, minOrder, quantity } = tool;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Price per unit: {price}</p>
        <p>
          <small>Minimum Order Quantity: {minOrder}</small>
        </p>
        <p>
          <small>In Stoke: {quantity}</small>
        </p>
        <p>{description}</p>
        <div class="card-actions">
          <button class="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
