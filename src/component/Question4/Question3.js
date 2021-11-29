import React, { useState } from "react";
import QuestionNo2 from "../Question2";
class Example extends React.Component {
  render() {
    return (
      <div>
        <div>Children ({this.props.children.length}):</div>
        {this.props.children}
      </div>
    );
  }
}

export default class Widget extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>question4(children props)</h1>
        </div>
        <div>
          First <code>Example</code>:
        </div>
        <Example>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Example>
        <div>
          Second <code>Example</code> with different children:
        </div>
        <Example>
          <div>A</div>
          <div>B</div>
        </Example>
      </div>
    );
  }
}
