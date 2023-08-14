import React, { useState } from "react";
import Context from "./Context/Context";
import Allcomp from "./Component/Allcomp";

function App() {
  const [text, setText] = useState("");

  const obj = {
    name: "zameer",
    age: "24",
  };

  return (
    <>
      <Context.Provider value={{ text, setText, obj }}>
        <Allcomp />
      </Context.Provider>
    </>
  );
}

export default App;
