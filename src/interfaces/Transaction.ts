import { Player } from "./Player"

export interface Transaction {
  from: Player
  to: Player
  amount: number
}
