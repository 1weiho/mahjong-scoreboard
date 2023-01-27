export const WIND_TYPE = [
  { id: "East", name: "東" },
  { id: "West", name: "西" },
  { id: "South", name: "南" },
  { id: "North", name: "北" },
]

export type Player = {
  wind: typeof WIND_TYPE[number]
  name: string
}

export type AmountRule = {
  bottom: number
  table: number
}

export type Transaction = {
  from: Player
  to: Player
  amount: number
}

export type Round = {
  wind: typeof WIND_TYPE[number]
  round: typeof WIND_TYPE[number]
  dealerNum: number
  result: Transaction[]
  time: number
}

export type Game = {
  UUID: string
  timestamp: number
  players: Player[]
  round: Round[] | null
}
