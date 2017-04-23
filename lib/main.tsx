import * as React from "react";
import * as ReactDOM from "react-dom";
import InputContainer from "./components/InputContainer";

export default class Parser extends React.Component<{},{}> {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <InputContainer/>
      </div>
    );
  }
}

ReactDOM.render(
  <InputContainer/>,
  document.getElementById("container")
);
