import { type User, type Result } from "@/types"
import * as usersRepo from "./users.repository"

export const list = async () => {
  return true
}

// export const list = async (filter?: {
//   status: string | null
// }): Promise<Result<User[]>> => {
//   const users = await usersRepo.findMany(filter)

//   if (!users.success) return { success: false, error: users.error }

//   return { success: true, data: users.data }
// }

export const create = async ({
  id,
  gender,
  sport,
}: Omit<User, "id">): Promise<Result<User>> => {
  const bucket = await usersRepo.exist({ id: id })
  if (!bucket.success) return { success: false, error: bucket.error }

  if (bucket.data) {
    return {
      success: false,
      type: "User.Duplicate",
      error: `Item with ${id} already exist`,
    }
  }

  // sender nødvendig data for å lage en survey
  const createdSurvey = await usersRepo.create({
    id,
    gender,
    sport,
  })

  if (!createdSurvey.success) {
    return { success: false, error: createdSurvey.error }
  }

  return { success: true, data: createdSurvey.data }
}
