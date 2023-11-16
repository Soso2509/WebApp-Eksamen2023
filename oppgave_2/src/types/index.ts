export type Sessing = {
    date: string
    name: string
    tags: string[]
    activity: string
    questionQuantity: string
    intervals:[{duration: string, intensity: string}]
}