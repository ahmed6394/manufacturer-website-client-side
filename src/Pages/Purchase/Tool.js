import React from "react";

const Tool = ({ tool, setPurchaseItem }) => {
  const { img, description, price, name, minOrder, quantity } = tool;
  return (
    <div class="card w-96 bg-base-100 shadow-xl my-5">
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

        <div className="card-actions justify-center">
          <label
            htmlFor="purchase-modal"
            onClick={() => setPurchaseItem(tool)}
            className="btn btn-sm btn-primary text-white uppercase"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tool;
