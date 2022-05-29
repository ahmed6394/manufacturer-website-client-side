import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddTool = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "234c5059422b0963f713cb9c92296a31";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    console.log("data", data);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.success) {
          const img = result.data.url;
          const item = {
            name: data.name,
            price: data.price,
            minOrder: data.minOrder,
            quantity: data.quantity,
            description: data.description,
            img: img,
          };
          // send to your database
          fetch("https://calm-lake-90811.herokuapp.com/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(item),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("item added successfully");
                reset();
              } else {
                toast.error("Failed to add the item");
              }
            });
        }
      });
  };

  return (
    <div>
      <h1 class="text-2xl font-bold text-primary text-center">Add tool</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Item's Name"
            className="input input-bordered max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Price per unit"
            className="input input-bordered max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Minimum Order Quantity"
            className="input input-bordered max-w-xs"
            {...register("minOrder", {
              required: {
                value: true,
                message: "Minimum order quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="In stoke quantity"
            className="input input-bordered max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "In stoke quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="file"
            placeholder="Item's Photo"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Photo is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          value="Add"
          className="form-control btn w-full max-w-xs text-white mx-auto btn-primary"
        />
      </form>
    </div>
  );
};

export default AddTool;
