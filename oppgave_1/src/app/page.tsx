"use server"

import Answer from "@/components/Answer"
import Header from "@/components/Header"
import Progress from "@/components/Progress"
import ProgressXTasks from "@/components/ProgressXTasks"
import Task from "@/components/Tasks"
import Tasks from "@/components/Tasks"
import TaskText from "@/components/Text"
import { prisma } from "@/lib/prisma"


export default async function Home() {

  const tasksFromPrisma = await prisma.task.findMany();
  
  return (
    <main>
      {/* {JSON.stringify(result)} */}
      <Header title={1} />
      <ProgressXTasks tasks={tasksFromPrisma}/>
      <TaskText text={"Hva blir resultatet av regneoperasjonen?"} />
    </main>
  )
}
