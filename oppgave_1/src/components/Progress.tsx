import { useState } from "react";
import type { MouseEvent } from "react";
import { Task } from "@/types";
import Tasks from "./Tasks";

interface Props {

  nextQuestion: () => void;
  prevQuestion: () => void;
}

export default function Progress({nextQuestion, prevQuestion }: Props) {
  const [state, setState] = useState(0);

  const next = () => {
    nextQuestion();
    setState((prev) => prev + 1);
  };

  const prev = () => {
    prevQuestion();
    setState((prev) => prev - 1);
  };

  return (
    <footer className="mt-4 border-t-slate-300">
      <p>{state}</p>
      <button onClick={prev} className="bg-purple-700 text-white">
        Forrige
      </button>
      <button onClick={next} className="bg-teal-700 text-white">
        Neste
      </button>
    </footer>
  );
}