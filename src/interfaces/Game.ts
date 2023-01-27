import { Player } from "./Player"
import { Round } from "./Round"

export interface Game {
  UUID: string
  timestamp: number
  players: Player[]
  round: Round[] | null
}
