import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div className="drawer-content text-center">
        <h2 className="text-2xl  text-primary">Welcome to your Dashboard</h2>
        <Outlet></Outlet>
        {/* <!-- Page content here --> */}
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageTools">Manage Tools</Link>
              </li>
              <li>
                <Link to="/dashboard/addTools">Add Tools</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/review">My reviews</Link>
              </li>
              <li>
                <Link to="/dashboard/profile">My Profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
