import { useState } from "react"
import { GameState } from "../interfaces/GameState"
import { ResultType } from "../interfaces/ResultType"
import { Player } from "../interfaces/Player"
import ChuckSelect from "./ChuckSelect"
import Transaction from "./Transaction"

interface Props {
  windName: string
  roundName: string
  player: Player[]
}

const GamePanel = ({ windName, roundName, player }: Props) => {
  const [gameState, setGameState] = useState<GameState>("waiting")
  const [resultType, setResultType] = useState<ResultType>()
  const [winnerPlayer, setWinnerPlayer] = useState<Player>()
  const [loserPlayer, setLoserPlayer] = useState<Player[]>([])

  return (
    <div className="bg-white shadow-md duration-200 rounded-md px-5 py-6 flex flex-col items-center justify-center text-center w-1/2 h-1/2">
      <span className="text-2xl font-semibold mb-4">
        {windName}風{roundName}局
      </span>
      {gameState === "waiting" && (
        <div className="flex justify-center space-x-6">
          <button
            className="bg-blue-500 text-white shadow-md hover:shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
            onClick={() => {
              setGameState("inResultSelecting")
              setResultType("chuck")
            }}
          >
            放槍
          </button>
          <button
            className="bg-blue-500 text-white shadow-md hover:shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
            onClick={() => {
              setGameState("inResultSelecting")
              setResultType("self")
            }}
          >
            自摸
          </button>
          <button
            className="bg-blue-500 text-white shadow-md hover:shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
            onClick={() => {
              setGameState("inResultSelecting")
              setResultType("draw")
            }}
          >
            流局
          </button>
        </div>
      )}
      {gameState === "inResultSelecting" && resultType === "chuck" && (
        <ChuckSelect
          player={player}
          setWinnerPlayer={setWinnerPlayer}
          setLoserPlayer={setLoserPlayer}
          setGameState={setGameState}
        />
      )}
      {gameState === "inTransaction" && resultType && winnerPlayer && loserPlayer && (
        <Transaction
          resultType={resultType}
          player={player}
          roundName={roundName}
          winnerPlayer={winnerPlayer}
          loserPlayer={loserPlayer}
        />
      )}
    </div>
  )
}

export default GamePanel
