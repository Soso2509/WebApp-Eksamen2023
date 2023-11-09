import { type ReactNode } from "react"

import { type Task } from "@/types"

export default function Tasks({ children }: { children: ReactNode }) {
  const tasks: Task[] = [
    {
      id: "123",
      text: "Skriv resultatet av regneoperasjonen",
      data: "9|2",
      type: "add",
    },
    {
      id: "234",
      text: "Skriv resultatet av regneoperasjonen",
      data: "3|2",
      type: "add",
    },
    {
      id: "356",
      text: "Skriv resultatet av regneoperasjonen",
      data: "3|2",
      type: "multiply",
    },
  ]
  return (
    <section className= "flex flex-col justify-center items-center gap-10">
      {tasks.map((task) => (
        <article className="flex-1 gap-20"key={task.id}>
          <p>{task.type}</p>
          <h3>{task.text}</h3>
          <p>{task.data}</p>
        </article>
      ))}
      {children}
    </section>
  )
}
