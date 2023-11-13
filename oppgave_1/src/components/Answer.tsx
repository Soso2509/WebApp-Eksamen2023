"use client"

import { useState } from "react"
import type { FormEvent, MouseEvent } from "react"


// Use TypeScript type alias for better readability
type AnswerProps = {
  onSubmit: (answer: number) => void;
};

export default function Answer({ onSubmit }: AnswerProps) {
  const [answer, setAnswer] = useState<number | ''>(0);

  const send = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(answer);
  };

  const update = (event: FormEvent<HTMLInputElement>) => {
  
     setAnswer(event.currentTarget.valueAsNumber);
  };

  return (
    <div>
      <label htmlFor="answer">Answer</label>
      <input
        name="answer"
        type="number"
        placeholder="Enter your answer here"
        onInput={update}
      />
      {3 * 2 === answer ? "Well done!" : null}
      <button onClick={send}>Send</button>
    </div>
  );
}



// export default function Answer() {
//   const [answer, setAnswer] = useState(0)

//   const send = (event: MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault()
//     console.log(answer)
//   }

//   const update = (event: FormEvent<HTMLInputElement>) => {
//     setAnswer(event.currentTarget.valueAsNumber)
//   }

//   return (
//     <div>
//       <label htmlFor="answer">Svar</label>
//       <input
//         name="answer"
//         type="text"
//         placeholder="Sett svar her"
//         onInput={update}
//       />
//       {9 + 2 === answer ? "Bra jobbet!" : null}
//       <button onClick={send}>Send</button>
//     </div>
//   )
// }
