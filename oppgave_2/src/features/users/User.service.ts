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


//SRC: kilde: https://github.com/mariuswallin/webapp-2023/tree/main/webapp-05
export const create = async ({
  userID,
  gender,
  sport,
}: Omit<User, "id">): Promise<Result<User>> => {
  const user = await usersRepo.exist({ id: userID })
  if (!user.success) return { success: false, error: user.error }

  if (user.data) {
    return {
      success: false,
      type: "User.Duplicate",
      error: `Item with ${userID} already exist`,
    }
  }

  // sender nødvendig data for å lage en survey
  const createdSurvey = await usersRepo.create({
    userID,
    gender,
    sport,
  })

  if (!createdSurvey.success) {
    return { success: false, error: createdSurvey.error }
  }

  return { success: true, data: createdSurvey.data }
}
