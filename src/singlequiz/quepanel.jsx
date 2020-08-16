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
  const handleAnswer = (ans) => {};
  return questions.length > 0 ? (
    <div className="col-md-12">
      <QueBox data={questions[0]} handleAnswers={handleAnswer()} />
    </div>
  ) : (
    <p>Hey, we are loading ...</p>
  );
}

export default QuePanel;
