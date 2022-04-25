import { useState } from "react";
import "../style/question.css";
import question from "../assets/questions";
import Description from "./description";

const Question = () => {
  const [menuVal, setMenuVal] = useState("question");
  const handleClick = (val, event) => {
    setMenuVal(val);
  };

  return (
    <div className="questionWrapper">
      <div className="menuWrapper">
        <div
          className={menuVal == "question" ? "active" : null}
          onClick={() => handleClick("question")}
        >
          Question
        </div>
        <div
          className={menuVal == "submission" ? "active" : null}
          onClick={() => handleClick("submission")}
        >
          Submissions
        </div>
        <div
          className={menuVal == "solution" ? "active" : null}
          onClick={() => handleClick("solution")}
        >
          Solution
        </div>
      </div>
      <Description id={question.id}
      title = {question.title}
      tag = {question.tag}
      ques = {question.ques}
      ex1 = {question.ex1}
      ex2 = {question.ex2}
      constraints = {question.constraints}
      />
    </div>
  );
};

export default Question;
