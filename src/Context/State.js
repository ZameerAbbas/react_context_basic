import App from "../App";
import Context from "./Context";

import React, { useState } from "react";

const State = () => {
  const [text, setText] = useState("");

  return (
    <Context.Provider value={{ text, setText }}>
      <App />
    </Context.Provider>
  );
};

export default State;
