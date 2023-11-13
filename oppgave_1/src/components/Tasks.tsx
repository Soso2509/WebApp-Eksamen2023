"use client"
import { useState, type ReactNode, useEffect } from "react"

import { type Task } from "@/types"
import { prisma } from "@/lib/prisma";


interface Props {
  children: ReactNode;
  taskIndex: number;
  data: Task[];
  
}

// export async function getServerSideProps() {
//   // Hente data fra eksternt api
//   const res = await fetch(`http://localhost:3000/api/restapi`);
//   const data = await res.json();

//   // Return the data as props
//   return { data };
// };

export default function Tasks({ children, taskIndex, data }: Props) {

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

  // const tasks = data;
 
  
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

