"use client"
import { useState, type ReactNode } from "react"

import { type Task } from "@/types"


interface Props {
  children: ReactNode;
  next: () => void;
  prev: () => void;
  taskIndex: number;
  tasks: Task[];
}


export default function Tasks({ children, next, prev, taskIndex }: Props) {
  const tasks: Task[] = [
    {
      id: "123",
      oppgave:"1",
      text: "Skriv resultatet av regneoperasjonen",
      type: "add",
      data: "9|2",
    
    },
    {
      id: "234",
      oppgave:"2",
      text: "Skriv resultatet av regneoperasjonen",
      type: "add",
      data: "3|2",
    
    }, 
    {
      id: "356",
      oppgave:"3",
      text: "Skriv resultatet av regneoperasjonen",
      type: "multiply",
      data: "3|2",
      
    },
  ]

  
  const currentTask = tasks[taskIndex];
  
  return (
    
    <section className= "flex flex-col justify-center items-center gap-10">
    
       <article className="flex-1 gap-20"key={currentTask.id}>
          <p>{currentTask.type}</p>
          <h3>{currentTask.text}</h3>
          <p>{currentTask.data}</p>
        </article>
      {children}
    </section>
  )
}
