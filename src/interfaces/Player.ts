import { WIND_TYPE } from "./WindType"

export interface Player {
  wind: typeof WIND_TYPE[number]
  name: string
}
