import * as React from "react";

export const Display = (props) => (
  <div className="display">
    {props.value.map((elem,ind) => (
      elem
    ))}
  </div>
);
