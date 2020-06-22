import React, { Component } from "react";
import "./App.css";
import QuizQuestion from "./QuizQuestion";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    return (
      <div className="QuizQuestion">
        <QuizQuestion quiz_question={this.state.quiz_position} />
      </div>
    );
  }
}

export default Quiz;
