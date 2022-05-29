import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchageModal = ({ purchaseItem, setPurchaseItem }) => {
  const { _id, name, minOrder, quantity, price } = purchaseItem;
  const [user] = useAuthState(auth);
  const handlePurchase = (e) => {
    e.preventDefault();
    // const orderQuantity = e.target.orderQuantity.value;
    // console.log(_id, name, orderQuantity);
    const purchase = {
      itemId: _id,
      item: name,
      price: price,
      user: user.email,
      userName: user.displayName,
      orderQuantity: e.target.orderQuantity.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };

    fetch("https://calm-lake-90811.herokuapp.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast("Order Successful");
        }

        setPurchaseItem(null);
      });
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
            <h4>
              User Name:{" "}
              <span className="text-black font-semibold">
                {user?.displayName || ""}
              </span>
            </h4>
            <h4>
              User Email:{" "}
              <span className="text-black font-semibold">
                {user?.email || ""}
              </span>
            </h4>

            <input
              required
              name="phone"
              type="text"
              placeholder="your phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              required
              name="address"
              type="text"
              placeholder="your address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              required
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
