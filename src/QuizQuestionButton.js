import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <button onClick={() => this.handleClick(this.props.button_text)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
  handleClick(val) {
    this.props.clickHandler(val);
  }
}
export default QuizQuestionButton;
