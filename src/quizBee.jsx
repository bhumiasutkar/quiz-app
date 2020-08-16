import React, { Component } from "react";
import quizService from "./quizServices/queData";
import QuestionBox from "./component/questionBox";
import Result from "./component/result";

import QuePanel from "./singlequiz/quepanel";

class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };
  getQuestionData = () => {
    quizService().then((question) => {
      this.setState({ questionBank: question });
    });
  };
  componentDidMount() {
    this.getQuestionData();
  }
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  playAgain = () => {
    this.getQuestionData();
    this.setState({
      score: 0,
      responses: 0,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title">Qize app</div>
          </div>
          <div className="col-md-12">
            <div className="panel">
              {this.state.questionBank.length > 0 &&
                this.state.responses < 5 &&
                this.state.questionBank.map(
                  ({ question, answers, correct, questionId }) => (
                    <QuestionBox
                      question={question}
                      options={answers}
                      key={questionId}
                      selected={(answer) => this.computeAnswer(answer, correct)}
                    />
                  )
                )}
              {this.state.responses === 5 ? (
                <Result score={this.state.score} playAgain={this.playAgain} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="singleQuiz">
          <QuePanel />
        </div>
      </div>
    );
  }
}
export default QuizBee;
