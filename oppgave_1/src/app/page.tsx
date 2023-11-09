import Answer from "@/components/Answer"
import Header from "@/components/Header"
import Progress from "@/components/Progress"
import Task from "@/components/Tasks"
import Tasks from "@/components/Tasks"
import TaskText from "@/components/Text"

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/restapi", {
    method: "get",
  })

  const taskAmount = await fetch("http://localhost:3000/api/restapi?antall=10", {
  method: "get",
})
  const result = await response.json()

  const tasks: Task[] = result.data

  const gg = null;

  return (
    <main>
      {JSON.stringify(result)}
      <Header />
      <Tasks>
        <Answer />
      </Tasks>
      {/* <Task /> */}
      <TaskText text={"Hva blir resultatet av regneoperasjonen?"} />
      <Progress tasks={tasks}/>
    </main>
  )
}
