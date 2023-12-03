import { faker } from '@faker-js/faker';
import { PrismaClient, User } from "@prisma/client"

//https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
const prisma = new PrismaClient({})

async function main() {
  console.log("Run")

  // await prisma.user.deleteMany({})

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
        {
          id:"222",
          date: new Date("2020-01-16 09:00:00"),
          name: "Unike ski øvelser",
          tags: [
            "snø",
            "rulleski",
            "styrke"
          ],
          questions: [
            {
              id:" 11",
              question: "Hvordan var treninga?",
              type: "radio:mood"
            },
            {
              id:" 12",
              question: "var du uthvilt før?",
              type: "radio:range"
            }
          ],
          intervals: [
            {
              id:" 21",
              duration: 12,
              intensity: 3
            }
          ]
        }
      ]
      }
    });

    //users.push(user);

    const returnUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      }
    })

    console.log(returnUser)
  }
  
  //const addUsers = async () => await prisma.user.createMany({ data: users });

  //addUsers();
  
//}


main()
