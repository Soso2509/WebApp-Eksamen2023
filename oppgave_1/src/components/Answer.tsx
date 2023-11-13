"use client"

import { useState } from "react"
import type { FormEvent, MouseEvent } from "react"

export default function Answer() {
  const [answer, setAnswer] = useState(0)

  const firstQuestionAnswer = 11;
  const secondQuestionAnswer = 5;
  const thirdQuestionAnswer = 6;

  const send = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(answer)
  }

  const update = (event: FormEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.valueAsNumber)
    // console.log("yo")
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <label htmlFor="answer">Svar</label>
      <input
        name="answer"
        type="text"
        placeholder="Sett svar her"
        onInput={update}
      />
      {9 + 2 === answer ? "Bra jobbet!" : null}
      <button onClick={send}>Send</button>
    </div>
  )
}
