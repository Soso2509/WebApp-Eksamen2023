import { faker } from "@faker-js/faker"
import { PrismaClient, User } from "@prisma/client"

//https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
const prisma = new PrismaClient({})

async function main() {
  console.log("Run")
  const users = [
    { id: " 1", gender: "Mann", sport: "Ski" },
    { id: " 1", gender: "Kvinne", sport: "Langrenn" },
  ]

  await prisma.user.deleteMany({})

  // const amountOfUsers = 10;
  // const users: User[] = [];

  // for (let i = 0; i < amountOfUsers; i++) {
  //   const firstName = faker.name.firstName()
  //   const lastName = faker.name.lastName()

  const user = await prisma.user.create({
    data: {
      id: "1",
      gender: "Mann",
      sport: "Ski",
      meta: {
        hartrate: 168,
        watt: 340,
        speed: 20
      },
      activities: [
        {
          id:" 111",
          date: new Date("2019-01-16 09:00:00"),
        },
      })
    })

    // [ Promise { <pending> }, Promise { <pending> } ]
    console.log(usersPromises)
    await Promise.all(usersPromises)
  }

  async function main() {
    console.log("Start seeding ...")
    await createUsers()
    console.log("Seeding finished.")
  }
}

main()
