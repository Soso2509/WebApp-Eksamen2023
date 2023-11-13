import Answer from "@/components/Answer";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Tasks from "@/components/Tasks";
import Task from "@/components/Tasks";
import TaskText from "@/components/Text"
//import TaskText from "@/components/TaskText"; // Corrected the import

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/restapi", {
    method: "get",
  });
  const result = await response.json();
  const tasks = result.data;

  return (
    <main className="centered-container">
      <Header />
      <Tasks>
        {/* Pass tasks as props to Answer component */}
        <Answer tasks={tasks} />
        <TaskText text={"Hva blir resultatet av regneoperasjonen?"} />
      </Tasks>
      {/* Task and TaskText components should be used inside Tasks component */}
      {/* <Tasks>
        <Task />
        
      </Tasks> */}
      {/* Progress component should also receive tasks as props */}
      <Progress tasks={tasks} />
    </main>
  );
}




// import Answer from "@/components/Answer"
// import Header from "@/components/Header"
// import Progress from "@/components/Progress"
// import Task from "@/components/Tasks"
// import Tasks from "@/components/Tasks"
// import TaskText from "@/components/Text"

// export default async function Home() {
//   const response = await fetch("http://localhost:3000/api/restapi", {
//     method: "get",
//   })
//   const result = await response.json()
//   const tasks: Task[] = result.data

//   return (
//     <main>
//       {JSON.stringify(result)}
//       <Header />
//       <Tasks>
//         <Answer />
//       </Tasks>
//       <Task />
//       <TaskText text={"Hva blir resultatet av regneoperasjonen?"} />
//       <Progress tasks={tasks}/>
//     </main>
//   )
// }
