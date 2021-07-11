import React from "react";

const MyPragraph = (props) => {
  console.log("P running");
  return <p>{props.children}</p>;
};

export default MyPragraph;
