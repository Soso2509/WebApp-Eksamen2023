export type Task = {
  id: string
  oppgave: `${number}`
  text: string
  type: "add" | "divide" | "multiply" | "subtract"
  data: `${number}|${number}`
}

export type Type = "add" | "subtract" | "multiply" | "divide"
