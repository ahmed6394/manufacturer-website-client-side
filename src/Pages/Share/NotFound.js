import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-body">
      <div className="not-found-text">
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
      </div>

      <div class="astronaut">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
          class="src"
        />
      </div>
    </div>
  );
};

export default NotFound;
