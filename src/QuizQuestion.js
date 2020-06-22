import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section>
          <ul key={this.props.id}>
            {this.props.quiz_question.answer_options.map((option) => {
              return <QuizQuestionButton key={option} button_text={option} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
