import React from "react";

const PurchageModal = ({ purchaseItem, setPurchaseItem }) => {
  const { _id, name, minOrder, quantity } = purchaseItem;
  const handlePurchase = (e) => {
    e.preventDefault();
    const orderQuantity = e.target.orderQuantity.value;
    console.log(_id, name, orderQuantity);
    setPurchaseItem(null);
  };

  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">
            You are buying{" "}
            <span className="text-primary font-bold">{name}</span>{" "}
          </h3>
          <form
            onSubmit={handlePurchase}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              name="name"
              type="text"
              readOnly
              //   value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              readOnly
              //   value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="your phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="address"
              type="text"
              placeholder="your phone address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="orderQuantity"
              type="number"
              min={minOrder}
              max={quantity}
              placeholder="Order Quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchageModal;
