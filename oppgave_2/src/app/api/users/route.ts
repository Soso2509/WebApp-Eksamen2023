import type { NextRequest } from "next/server"

import * as usersController from "@/features/users/users.controller"

export async function GET() {
  return usersController.listUsers()
}

export async function POST(request: NextRequest) {
  return usersController.createUser(request)
}
