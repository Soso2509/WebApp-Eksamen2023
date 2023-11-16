import { useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import { type Task } from "@/types";

type AnswerProps = {
  task: Task;
  onSubmitCorrectAnswer: () => void;
  onSubmitWrongAnswer: () => void;
  numAttempts: number;
  numAttemptsLeft: number;

};

export default function Answer({
  task,
  onSubmitCorrectAnswer,
  onSubmitWrongAnswer,
  numAttemptsLeft,
  numAttempts,

}: AnswerProps) {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [showNumAttempts, setShowNumAttempts] = useState(false);
  const [showCorrectAnswer, setShowAnswer] = useState(false);

  const calculateCorrectAnswer = (task: Task): number | null => {
    const [num1, num2] = task.data.split("|").map(Number);

    let result: number | null = null;

    if (task.type === "add") {
      result = num1 + num2;
    } else if (task.type === "subtract") {
      result = num1 - num2;
    } else if (task.type === "multiply") {
      result = num1 * num2;
    } else if (task.type === "divide") {
      result = num1 / num2;
    }

    return result;
  };

  const correctAnswer = calculateCorrectAnswer(task);


  const sendAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const userAnswer = Number(answer);
    const correctAnswerNumber = Number(correctAnswer);

    if (userAnswer === correctAnswerNumber) {
      setMessage("Bra jobba!!");
      setIsCorrectAnswer(true);
      onSubmitCorrectAnswer();
    } else {
      setMessage("Forsøk igjen");
      setShowNumAttempts(true);
      onSubmitWrongAnswer();
    }
  };

  const update = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const number = value === "" ? NaN : Number(value);

    if (!isNaN(number)) {
      setAnswer(number.toString());
      const correctAnswerNumber = Number(correctAnswer);

      if (number === correctAnswerNumber) {
        setMessage(null);
      } else {
        setMessage(null);
      }
    } else {
      setAnswer("");
      setMessage(null);
    }
  };

  const inputId = `answer-${task.id}- 1`;
  return (
    <div>
      <label htmlFor={inputId}>Svar</label>
      <input id={inputId} name={"answer"} type="text" placeholder="Sett svar her" onChange={update} value={answer}/>

      <button onClick={sendAnswer}>Send</button>
      {isCorrectAnswer && message && <div>{message}</div>}

      {showNumAttempts && (<div><p>{numAttemptsLeft} av {numAttempts} forsøk igjen</p></div>)}

      {!showCorrectAnswer && numAttemptsLeft === 0 && (<button onClick={() => { setShowAnswer(true); }}>Vis svaret</button>)}

      {showCorrectAnswer && correctAnswer !== null && (<div>Korrekt svar: {correctAnswer}</div>)}

    </div>
  );
}
