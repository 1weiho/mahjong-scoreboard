import { Transaction } from "./Transaction"
import { WIND_TYPE } from "./WindType"

export interface Round {
  wind: typeof WIND_TYPE[number]
  round: typeof WIND_TYPE[number]
  dealerNum: number
  result: Transaction[]
  time: number
}
