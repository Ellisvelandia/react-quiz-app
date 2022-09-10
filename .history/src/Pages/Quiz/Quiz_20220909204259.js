import { useEffect, useState } from "react";
import React from "react";
import "./Quiz.css";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
  

    }, [questions]);

  return <div>Quiz</div>;
};

export default Quiz;
