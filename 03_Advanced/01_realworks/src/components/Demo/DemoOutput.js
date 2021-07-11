import React from "react";
import MyPragraph from "./MyParagraph";
const DemoOutput = (props) => {
  console.log("Demo Running");
  return <MyPragraph>{props.show ? "This is New" : ""}</MyPragraph>;
};

export default React.memo(DemoOutput);
