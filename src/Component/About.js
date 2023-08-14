import React, { useContext } from "react";
import Context from "../Context/Context";

const About = () => {
  const { text, setText } = useContext(Context);
  const {obj}= useContext(Context)
  return (
    <div>
      About
      <h1>{text}</h1>
      <button onClick={()=>setText("this is about section")}>display text</button>
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
    </div>
  );
};

export default About;
