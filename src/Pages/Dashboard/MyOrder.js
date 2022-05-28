import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [purchaseItem, setPurchaseItem] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/purchase?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          /* if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          } */
          return res.json();
        })
        .then((data) => {
          setPurchaseItem(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h2>My Orders: </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {purchaseItem.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.item}</td>
                <td>{a.price}</td>
                <td>{a.orderQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
