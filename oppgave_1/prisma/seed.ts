import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const taskData = [
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "9|4" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "50|91" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "54|91" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "5|9" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "9|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "8|4" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "100|91" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "154|91" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "50|9" },
  { text: "Skriv resultatet av regneoperasjonen", type: "add", data: "90|5" },
 
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "9|5" }, 
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "70|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "80|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "45|9" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "83|11" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "10|5" }, 
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "54|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "13|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "10|9" },
  { text: "Skriv resultatet av regneoperasjonen", type: "subtract", data: "15|11" },


  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|80" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|7" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|8" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|6" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "11|8" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|8" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "8|9" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "6|6" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "3|4" },
  { text: "Skriv resultatet av regneoperasjonen", type: "multiply", data: "2|10" },


  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "10|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "10|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "16|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "8|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "30|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "12|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "12|4" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "50|5" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "40|2" },
  { text: "Skriv resultatet av regneoperasjonen", type: "divide", data: "90|2" },
  
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
