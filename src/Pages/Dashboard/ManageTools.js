import React, { useState } from "react";
import { useQuery } from "react-query";
import DeleteModal from "./DeleteModal";
import ItemsRow from "./ItemsRow";

const ManageTools = () => {
  const [deletingItem, setDeletingItem] = useState(null);
  console.log(deletingItem);
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch("http://localhost:5000/tools", {
      /* headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }, */
    }).then((res) => res.json())
  );

  if (isLoading) {
    return "is Loading";
  }
  return (
    <div>
      <h2 className="text-2xl">Manage Tools: {items.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Minimum Order Quantity</th>
              <th>In Stoke</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <ItemsRow
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
                setDeletingItem={setDeletingItem}
              ></ItemsRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingItem && (
        <DeleteModal
          deletingItem={deletingItem}
          refetch={refetch}
          setDeletingItem={setDeletingItem}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageTools;
