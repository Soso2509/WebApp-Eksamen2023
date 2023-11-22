import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const taskData = [
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "9|4" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "10|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|7" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "9|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "5|9" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "9|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "16|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|80" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "80|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "54|91" },
  
];

async function createTasks() {
  try {
    await prisma.task.deleteMany();


    const taskPromises = taskData.map((task) =>
      prisma.task.create({
        data: task,
      })
    );

    await Promise.all(taskPromises);
    console.log("Tasks created successfully!");
  } catch (error) {
    console.error("Error creating tasks:", error);
  } finally {
    await prisma.$disconnect(); 
  }
}

createTasks();