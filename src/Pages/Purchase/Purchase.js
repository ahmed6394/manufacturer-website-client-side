import React, { useEffect, useState } from "react";
import PurchageModal from "./PurchageModal";
import Tool from "./Tool";

const Purchage = () => {
  const [tools, setTools] = useState([]);
  const [purchaseItem, setPurchaseItem] = useState(null);

  useEffect(() => {
    fetch("https://calm-lake-90811.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  return (
    <div className="my-12">
      <h1 class="text-5xl font-bold text-primary text-center">
        Available Tools
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Tool
            key={tool._id}
            tool={tool}
            setPurchaseItem={setPurchaseItem}
          ></Tool>
        ))}
      </div>
      {purchaseItem && (
        <PurchageModal
          purchaseItem={purchaseItem}
          setPurchaseItem={setPurchaseItem}
        ></PurchageModal>
      )}
    </div>
  );
};

export default Purchage;
