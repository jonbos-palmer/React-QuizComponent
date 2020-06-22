import React, { Component } from "react";

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
          <ul>
            {this.props.quiz_question.answer_options.map((option) => {
              return <li key={option}>{option}</li>;
            })}
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
