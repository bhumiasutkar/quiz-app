import React, { Component } from "react";
class QueBox extends Component {
  render() {
    const { data, handleAnswers } = this.props;
    const Options = ({ answer }) => {
      return <div className="ans-option">{answer}</div>;
    };
    const shuffleAns = [data.correct_answer, ...data.incorrect_answers];
    return (
      <div>
        <div className="que">
          <h4>{data.question}</h4>
        </div>
        <div className="ansGroup">
          <Options
            onClick={() => this.handleAnswers(shuffleAns[0])}
            answer={shuffleAns[0]}
          />
          <Options
            onClick={() => this.handleAnswers(shuffleAns[1])}
            answer={shuffleAns[1]}
          />
          <Options
            onClick={() => this.handleAnswers(shuffleAns[2])}
            answer={shuffleAns[2]}
          />
          <Options
            onClick={() => this.handleAnswers(shuffleAns[3])}
            answer={shuffleAns[3]}
          />
        </div>
      </div>
    );
  }
}

export default QueBox;
