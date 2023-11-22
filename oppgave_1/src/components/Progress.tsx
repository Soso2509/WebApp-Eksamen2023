"use client"

import type { MouseEvent } from "react";
import { type Task } from "../types/index";

interface ProgressProps {
  tasks: Task[];
  isCorrectAnswer: boolean;
  currentTaskIndex: number;
  setCurrentTaskIndex: (index: number) => void;
}

export default function Progress({
  tasks,
  isCorrectAnswer,
  currentTaskIndex,
  setCurrentTaskIndex
}: ProgressProps) {
  const next = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentTaskIndex(currentTaskIndex + 1);
  };

  const prev = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentTaskIndex(currentTaskIndex - 1);
  };

  return (
    <footer className="mt-4 border-t-slate-300">
      {}
      <button onClick={prev} className="bg-purple-700 text-white mr-10">
        Forrige
      </button>
      {isCorrectAnswer && (
        <button onClick={next} className="bg-teal-700 text-white ml-20">
          Neste
        </button>
      )}
    </footer>
  );
}