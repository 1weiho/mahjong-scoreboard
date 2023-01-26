export const WIND_TYPE = [
  { id: "East", name: "東" },
  { id: "West", name: "西" },
  { id: "South", name: "南" },
  { id: "North", name: "北" },
]

export type Player = {
  name: string
  score: number
  wind: typeof WIND_TYPE[number]
}
