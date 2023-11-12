"use server"

import Answer from "@/components/Answer"
import Header from "@/components/Header"
import Progress from "@/components/Progress"
import ProgressXTasks from "@/components/ProgressXTasks"
import Task from "@/components/Tasks"
import Tasks from "@/components/Tasks"
import TaskText from "@/components/Text"



export default async function Home() {
  const response = await fetch("http://localhost:3000/api/restapi", {
    method: "get",
  })

  

  const result = await response.json()

  const tasks: typeof Task[] = (result as {data: typeof Task[]}).data




  return (
    <main>
      {JSON.stringify(result)}
      <Header title={1} />
      <TaskText text={"Hva blir resultatet av regneoperasjonen?"} />
      <ProgressXTasks tasks={tasks}/>
    </main>
  )
}
