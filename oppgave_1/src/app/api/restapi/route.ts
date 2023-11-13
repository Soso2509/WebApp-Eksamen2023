import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { type Task } from "@/types"
import { prisma } from "@/lib/prisma";

// const tasks: Task[] = [
//   {
//     id: "124",
//     text: "Skriv resultatet av regneoperasjonen",
//     type: "add",
//     data: "9|4",
//   },
// ]

const tasksFromPrisma = await prisma.task.findMany();


// TODO: Denne skal brukes til å "samle" svarene (om du ikke bruker database)
const answers = new Map<Task["id"], { attempts: number }>()

export function PUT(request: NextRequest) {
  const count = request.nextUrl.searchParams.get("count")
  if (!count)
    return NextResponse.json({ success: false, error: "Invalid count" })
  return NextResponse.json({ success: true, data: tasksFromPrisma }, { status: 207 })
}

export function GET(request: NextRequest) {
  const count = -1
  if (!count)
    return NextResponse.json({ success: false, error: "Invalid count" })
  return NextResponse.json({ success: true, data: tasksFromPrisma }, { status: 200 })
}
