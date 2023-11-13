import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const tasks = [
  {
    id: "123",
    // oppgave: "1",
    text: "Skriv resultatet av regneoperasjonen",
    type: "add",
    data: "9|2",
  },
  {
    id: "234",
    // oppgave: "2",
    text: "Skriv resultatet av regneoperasjonen",
    type: "add",
    data: "3|2",
  },
  {
    id: "356",
    // oppgave: "3",
    text: "Skriv resultatet av regneoperasjonen",
    type: "multiply",
    data: "3|2",
  },
]

const createTasks = async () => {
  const feedPromises = tasks.map(async (task) => {
    await prisma.task.create({
      data: {
        ...task,
      },
    })
  })

  // [ Promise { <pending> }, Promise { <pending> } ]
  console.log(feedPromises)

  await Promise.all(feedPromises)
}

async function main() {
  console.log("Run")
  // await createTasks() // Call the createTasks function
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
 