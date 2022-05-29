import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const review = {
      rating: data.rating,
      description: data.description,
    };

    // send to your database
    fetch("https://calm-lake-90811.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast("Review added successfully");
          reset();
        } else {
          toast.error("Failed to add the review");
        }
      });
  };

  return (
    <div>
      <h1 class="text-2xl font-bold text-primary text-center">Add Review</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <div className="form-control w-full max-w-xs mx-auto">
          <input
            type="number"
            min="0"
            max="5"
            step="0.5"
            placeholder="Rating out of 5"
            className="input input-bordered max-w-xs"
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is Required",
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
            placeholder="Short Description"
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

        <input
          type="submit"
          value="Add"
          className="form-control btn w-full max-w-xs text-white mx-auto btn-primary"
        />
      </form>
    </div>
  );
};

export default AddReview;
