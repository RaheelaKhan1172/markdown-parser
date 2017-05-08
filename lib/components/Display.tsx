import * as React from "react";


function createMarkup(val) {
  return {__html: val};
}

export const Display = (props) => (
  <div className="display">
    {props.value.map((elem,ind) => (
      <div dangerouslySetInnerHTML={createMarkup(elem.parsed)} />
    ))}
  </div>
);
