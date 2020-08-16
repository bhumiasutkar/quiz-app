import React, { useState, useEffect } from "react";
import QueBox from "./queBox";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=17&type=multiple";

function QuePanel() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data.results);
      });
  }, []);
  return questions.length > 0 ? (
    <div className="col-md-12">
      <div className="que">
        <h4>{questions[0].question}</h4>
      </div>
      <div className="ansGroup">
        <div className="ans-option">{questions[0].correct_answer}</div>
        <div className="ans-option">b</div>
        <div className="ans-option">c</div>
        <div className="ans-option">d</div>
      </div>
    </div>
  ) : (
    <p>Hey, we are loading ...</p>
  );
}

export default QuePanel;
