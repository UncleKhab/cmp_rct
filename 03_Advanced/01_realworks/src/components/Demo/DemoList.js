import React, { useMemo } from "react";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("items sorting");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("list running");
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
