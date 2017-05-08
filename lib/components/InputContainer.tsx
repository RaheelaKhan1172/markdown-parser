import * as React from "react";
import {TextArea} from "./Input";
import {Display} from "./Display";
import m from "../marker";

export default class InputContainer extends React.Component<{},State> {
  parsedVal: JSX.Element[]; 
  constructor() {
    super();
    this.state = {value: ''};
    this.parsedVal = []
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event: any) {
    this.parsedVal = [];
    event.persist();
    console.log("the event", event.key);
    console.log(event.target.value, "the entered value");
    var val = m.containsMarkDown(event.target.value);
    
    console.log("THE VAL", val);
    if (val) {
    for (var i = 0; i < val.length; i++) {
      this.parsedVal[i] = val[i]; 
    } 
    }
    
    console.log(this.parsedVal); 

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
