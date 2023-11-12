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
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextQuestion = () => {
    setCurrentTaskIndex((prev) => prev + 1);
    console.log("next");

   
  };

  const prevQuestion = () => {
    setCurrentTaskIndex((prev) => prev - 1);
    console.log("prev");
  };

  return (
    <div>
      <Answer />
      <Tasks tasks={tasks} next={nextQuestion} prev={prevQuestion} taskIndex={currentTaskIndex} />
      <Progress nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
    </div>
  );
}

