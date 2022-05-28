import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email, displayName } = user;
  return (
    <div>
      <h1 class="text-2xl font-bold text-primary text-center">My Profile</h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="font-bold text-1xl text-center">{displayName}</h2>
          <p>{email}</p>
          <input
            type="text"
            placeholder="Education"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Location"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Phone"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <div class="card-actions justify-center">
            <button class="btn btn-sm btn-primary text-white uppercase">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
