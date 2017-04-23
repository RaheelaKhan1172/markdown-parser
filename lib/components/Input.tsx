import * as React from "react";

export const TextArea = (props) => (
  <div className="t-a">
    <textarea value={props.value}
     onChange={props.handleChange}
    />  
  </div>
);
