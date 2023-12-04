import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import * as usersController from "@/features/users/users.controller"
import { type User } from "@/types"

const users: User[] = [
  {
    id: "ddd",
    userID:"djiowf",
    gender: "male",
    sport: "løping"
  },
  {
    id: "hioe-de",
    userID:"dddd",
    gender: "female",
    sport: "svømming"
  }
]

export function GET(request: NextRequest) {
  
  return NextResponse.json({ users }, { status: 200 })
}

export async function POST(request: NextRequest) {
  return usersController.createUser(request)
}
