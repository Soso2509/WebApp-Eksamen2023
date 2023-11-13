"use client"
import { useState } from "react";
import Answer from "./Answer";
import Progress from "./Progress";
import { Task } from "@prisma/client";
import Tasks from "./Tasks";

interface Props {
  tasks: Task[];
}

export default function ProgressXTasks({ tasks }: Props) {
  const [taskIndex, setTaskIndex] = useState(0);

  const [answer, setAnswer] = useState<number>();
  const [correctAnswer, setCorrectAnswer] = useState(false)

  const firstQuestionAnswer = 11;
  const secondQuestionAnswer = 5;
  const thirdQuestionAnswer = 6;


  const handleAnswerOnClick = (answer: number, taskIndex: number) => {
      const correctAnswer = 11;
      if(taskIndex = 0) {
        if(answer = firstQuestionAnswer) {
          setCorrectAnswer(true)
        }
      }
      if(taskIndex = 1) {
        if(answer = secondQuestionAnswer) {
          setCorrectAnswer(true)
        }
      }

      if(taskIndex = 2) {
        if(answer = thirdQuestionAnswer) {
          setCorrectAnswer(true)
        }
      }    
  }

  const nextQuestion = () => {
    setTaskIndex((next) => next+ 1);
    console.log("next");

  };

  const prevQuestion = () => {
    setTaskIndex((prev) => prev - 1);
    console.log("prev");
  };

  
  return (
    <div>
      <Answer />
      <Tasks tasks={tasks} taskIndex={taskIndex} />
      <Progress nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
    </div>
  );
}

