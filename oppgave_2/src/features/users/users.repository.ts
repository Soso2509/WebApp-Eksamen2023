import { PrismaClient } from "@prisma/client"
import { type User, type Result } from "@/types"

const prisma = new PrismaClient()


export const findMany = async (filter?: {
  gender: string | null
}): Promise<Result<User[]>> => {
  try {
    const users = filter?.gender
      ? await prisma.user.findMany({
          where: { gender: filter.gender },
        })
      : await prisma.user.findMany()

    return { success: true, data: users }
  } catch (error) {
    return { success: false, error: "Failed finding users" }
  }
}

export const create = async ({
  id,
  gender,
  sport,
}: Omit<User, "id">): Promise<Result<User>> => {
  try {
    const user = await prisma.user.create({
      data: {
        id,
        sport,
        gender: gender ?? "draft",
      },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: "Failed creating user" }
  }
}

export const exist = async (
  identifier:
    | {
        id: string
      }
    | { sport: string },
): Promise<Result<User | null>> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        ...identifier,
      },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: "Failed finding user" }
  }
}
