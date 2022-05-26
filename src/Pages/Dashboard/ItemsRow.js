import React from "react";

const ItemsRow = ({ item, index, refetch, setDeletingItem }) => {
  const { name, minOrder, img, quantity } = item;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{minOrder}</td>
      <td>{quantity}</td>
      <td>
        <label
          for="delete-confirm-modal"
          class="btn  btn-xs btn-error modal-button"
          onClick={() => setDeletingItem(item)}
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default ItemsRow;
