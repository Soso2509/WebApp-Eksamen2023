
import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

import { type Activities } from "@/types"

const prisma = new PrismaClient()

const createActivity = (): Activities => {
  return {
    id: faker.string.uuid(),
    date: new Date(),
    updatedAt:new  Date,
    name: "Aking",
    tags: ["Ski", "snø"],
  }
}

async function main() {
  await prisma.user.deleteMany({})
  await prisma.user.create({
    data: {
      id: faker.string.uuid(),
      gender: "Male",
      sport: "Ski",
    },
  })
  const publishedUser = await prisma.user.create({
    data: {
      id: "3",
      gender: "Female",
      sport: "triatlon",
    },
  })

const activities = Array(10).fill(null).map(createActivity)

for (const activity of activities) {
  await prisma.activities.create({
    data: {
      ...activity,
      user: {
        connect: {
          id: publishedUser.id,
        },
      },
    },
  })
}
}

main().catch((err) => {
  console.error("Failed seed", err)
})
