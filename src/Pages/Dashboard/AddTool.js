import React from "react";
import { useForm } from "react-hook-form";

const AddTool = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <div>
      <h1 class="text-5xl font-bold text-primary text-center">Add a tool</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="text"
            placeholder="Item Name"
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
            {...register("pric", {
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
