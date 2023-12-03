export type Activities = {
  id: string
  date: Date
  updatedAt: Date
  name?: string
  tags?: string[]
  question?: Question[]
  intervals?: Interval[]
  Goal?: Goal
}

export type User = {
  id: string
  userID?: string
  gender: string
  sport: string
}

export type Meta = {
  id: string
  date: Date
  heartrate: number
  watt: number
  speed: number
}
export type Tag = {
  id: string
  tag: string
}

export type Goal = {
  id: string
  name: string
  deadline: Date
  comment?: string
  compId?: Competition
  userId: User
}

export type Competition = {
  id: string
  name: string
  date: Date
  place: string
  goal?: string
  type?: string
  priority: string
  comment?: string
}
export type Question = {
  id: string
  question: string
  type: string
}

export type Interval = {
  id: string
  duration: number
  intensity: number
}

export type Data<T> = {
  success: true
  data: T
}

export type ResultError = {
  success: false
  type?: string
  error: string
}

export type Result<T> = Data<T> | ResultError

export type WithRelation<T, U> = T & U
