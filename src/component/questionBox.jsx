import React, { useState } from "react";

// class QuestionBox extends Component {
//   render() {
//     const option = this.props.options;
//     const [setAnswer] = useState(option);
//     return (
//       <div className="QuePanel">
//         <div className="queTitle">{this.props.question}</div>
//         <div className="ans">
//           {option.map((text, index) => (
//             <button
//               className="btn"
//               key={index}
//               onClick={() => {
//                 setAnswer([text]);
//                  this.props.selected(text);
//               }}
//             >
//               {text}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="btn answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
export default QuestionBox;
