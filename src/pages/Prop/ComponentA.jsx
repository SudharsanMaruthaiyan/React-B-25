import React, { useContext, useState } from "react";
import ComponentB from "./ComponentB";
import UserStore from "../../store/userStore";

const ComponentA = () => {
  const [data, setData] = useState("Revamp");

  const setDataa = (newData) => {
    setData(newData);
  };

  const globalData = useContext(UserStore);

  console.log("globalData:", globalData);

  return (
    <div>
      <div>
        ComponentA {globalData.name} {globalData.batch}
      </div>
      <ComponentB display={data} setDataa={setDataa} />
    </div>
  );
};

export default ComponentA;
