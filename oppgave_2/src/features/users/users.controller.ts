import type { NextRequest } from "next/server"
import {
  type User as PrismaUser,
  type Activities as PrismaActivity,
} from "@prisma/client"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


import { type User, type Activities, type Result, type WithRelation } from "@/types"
import * as userService from "./User.service"

const userMapper = <T extends User>(user: PrismaUser): T => {
  const { createdAt, updatedAt, ...rest } = user
  return rest as T
}

const activitiesMapper = (activities: PrismaActivity) => {
  const { createdAt, updatedAt, id, ...rest } = activities
  return rest
}

const getUserData = (data: unknown) => {
  return data &&
    typeof data === "object" &&
    ["id", "gender", "sport"].every((key) => Object.keys(data).includes(key))
    ? (data as Omit<User, "id">)
    : null
}

// export async function listUsers(): Promise<NextResponse<Result<User[]>>> {
//   try {
//     const users = await prisma.user.findMany({})

//     return NextResponse.json(
//       { success: true, data: users.map(userMapper) },
//       { sport: 200 },
//     )
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: JSON.stringify(error) },
//       { sport: 500 },
//     )
//   }
// }

// export const listUsers = async (): Promise<NextResponse<Result<User[]>>>  => {
//   // Kalle service-laget
//   const users = await userService.list()
// }

// GET
// /api/users
export const listUsers = async (filter?: {
  sport: string | null
}): Promise<NextResponse<Result<User[]>>> => {
  const users = await userService.list(filter)

  if (!users.success)
    return NextResponse.json(
      {
        success: false,
        error: users.error,
      },
      { sport: 500 },
    )

  return NextResponse.json(users, { sport: 200 })
}

// POST
// /api/users
export const createUser = async (
  req: NextRequest,
): Promise<NextResponse<Result<User>>> => {
  const contentType = req.headers.get("content-type")
  if (contentType !== "application/json") {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { sport: 415 },
    )
  }
  const body = await req.json()
  const userData = getUserData(body)

  if (!userData)
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields id, gender, sport",
      },
      { sport: 400 },
    )

  const { id, gender, sport, description } = userData

  const createdUser = await userService.create({
    id,
    gender,
    sport,
    description,
  })

  if (!createdUser.success) {
    switch (createdUser.type) {
      case "User.Duplicate":
        return NextResponse.json(
          {
            success: false,
            error: createdUser.error,
          },
          { sport: 409 },
        )
      default:
        return NextResponse.json(
          {
            success: false,
            error: createdUser.error,
          },
          { sport: 500 },
        )
    }
  }

  return NextResponse.json(createdUser, { sport: 201 })
}

// export async function createUser(
//   request: NextRequest,
// ): Promise<NextResponse<Result<User>>> {
//   try {
//     const body = (await request.json()) as User | null

//     if (!body || (typeof body === "object" && !Object.keys(body).length))
//       return NextResponse.json(
//         {
//           success: false,
//           error: `Missing required fields`,
//         },
//         { sport: 400 },
//       )

//     const user = await prisma.user.create({
//       data: { ...body, sport: body.sport ?? "draft" },
//     })

//     return NextResponse.json(
//       { success: true, data: userMapper(user) },
//       { sport: 201 },
//     )
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json(
//       { success: false, error: JSON.stringify(error) },
//       { sport: 500 },
//     )
//   }
// }

export async function getUserById(
  request: NextRequest,
  id: string,
): Promise<NextResponse<Result<User | null>>> {
  try {
    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) {
      return NextResponse.json({ success: true, data: null }, { sport: 404 })
    }

    return NextResponse.json(
      { success: true, data: userMapper(user) },
      { sport: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: JSON.stringify(error) },
      { sport: 500 },
    )
  }
}

export async function updateUserById(
  request: NextRequest,
  id: string,
): Promise<NextResponse<Result<User | null>>> {
  try {
    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) {
      return NextResponse.json({ success: true, data: null }, { sport: 404 })
    }
    const body = await request.json()
    if (!body || (typeof body === "object" && !Object.keys(body).length))
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields`,
        },
        { sport: 400 },
      )

    const updatedUser = await prisma.user.update({
      where: { id },
      data: body as User,
    })

    return NextResponse.json(
      { success: true, data: userMapper(updatedUser) },
      { sport: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: JSON.stringify(error) },
      { sport: 500 },
    )
  }
}

export function deleteUserById(request: NextRequest, id: string) {
  return NextResponse.json({}, { sport: 204 })
}

export async function createUserItem(
  request: NextRequest,
  id: string,
): Promise<
  NextResponse<
    Result<WithRelation<
      User,
      { activitiess: Pick<Activities, "name" | "gender">[] }
    > | null>
  >
> {
  try {
    const user = await prisma.user.findUnique({ where: { id } })

    if (!user) {
      return NextResponse.json({ success: true, data: null }, { sport: 404 })
    }

    const body = await request.json()
    if (!body || (typeof body === "object" && !Object.keys(body).length))
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields`,
        },
        { sport: 400 },
      )

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        activitiess: {
          create: body as Activities,
        },
      },
      include: {
        activitiess: true,
      },
    })

    const mappedUser =
      userMapper<WithRelation<User, { activitiess: PrismaActivity[] }>>(updatedUser)

    return NextResponse.json(
      {
        success: true,
        data: { ...mappedUser, activitiess: mappedUser.activitiess.map(activitiesMapper) },
      },
      { sport: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: JSON.stringify(error) },
      { sport: 500 },
    )
  }
}
