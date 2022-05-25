import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  //   const [laoding, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  //   if (laoding) {
  //     return "data is loading";
  //   }
  return (
    <div className="my-12">
      <h1 class="text-5xl font-bold text-primary text-center">
        Available Tools
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
