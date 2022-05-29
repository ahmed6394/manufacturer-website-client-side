import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://calm-lake-90811.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  return (
    <div className="my-12">
      <h1 class="text-5xl font-bold text-primary text-center">Our Tools</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
