import React, { Component } from "react";
import "./App.css";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    let rv = null;
    if (!isQuizEnd) {
      rv = (
        <div className="QuizQuestion">
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        </div>
      );
    } else {
      rv = <QuizEnd />;
    }
    return rv;
  }
  showNextQuestion() {
    this.setState({
      ...this.state,
      quiz_position: this.state.quiz_position + 1,
    });
  }
}

export default Quiz;
