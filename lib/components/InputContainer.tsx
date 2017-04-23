import * as React from "react";
import {TextArea} from "./Input";
import {Display} from "./Display";
import m from "../marker";

/* will communicate with the store 
   for display purposes, it takes in default 'values'*/
export default class InputContainer extends React.Component<{},State> {
  parsedVal: JSX.Element; 
  constructor() {
    super();
    this.state = {value: ''};
    this.parsedVal = null;
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event: any) {
    event.persist();
    var val = m.containsMarkDown(event.target.value); 
  console.log(val);
    this.parsedVal = React.createElement(val, null, event.target.value);
    this.setState(() => ({
      value: event.target.value
    }));

  }

  render() {
    return (
      <div>
      <TextArea
        value={this.state.value}
        handleChange={this.handleChange} //make this parse the text
      />
      <Display value={this.parsedVal} />
      </div>
    );
  }
}

interface State {
  value: string;
}
