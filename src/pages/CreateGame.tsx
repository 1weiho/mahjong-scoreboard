import { useState } from "react"
import PlayerNameInput from "../components/PlayerNameInput"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import { Game } from "../interfaces/Game"
import { WIND_TYPE } from "../interfaces/WindType"

const CreateGame = () => {
  const [player1, setPlayer1] = useState<string>("")
  const [player2, setPlayer2] = useState<string>("")
  const [player3, setPlayer3] = useState<string>("")
  const [player4, setPlayer4] = useState<string>("")
  const navigate = useNavigate()

  const handleSave = () => {
    let gameDataLocal: Game[] = []
    if ("gameData" in localStorage) {
      gameDataLocal = JSON.parse(localStorage.getItem("gameData") as string)
    }

    const newGame: Game = {
      UUID: uuidv4(),
      timestamp: Date.now(),
      players: [
        { wind: WIND_TYPE[0], name: player1, score: 0 },
        { wind: WIND_TYPE[1], name: player2, score: 0 },
        { wind: WIND_TYPE[2], name: player3, score: 0 },
        { wind: WIND_TYPE[3], name: player4, score: 0 },
      ],
      round: [{ wind: WIND_TYPE[0], round: WIND_TYPE[0], dealerNum: 0, result: [], time: 0 }],
    }

    gameDataLocal.push(newGame)
    localStorage.setItem("gameData", JSON.stringify(gameDataLocal))
    navigate(`/game/${newGame.UUID}`)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-12 mt-80">設定玩家名稱</h1>
      <form className="flex flex-col items-center" onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-8 mb-12">
          <PlayerNameInput wind="東" setPlayer={setPlayer1} />
          <PlayerNameInput wind="南" setPlayer={setPlayer2} />
          <PlayerNameInput wind="西" setPlayer={setPlayer3} />
          <PlayerNameInput wind="北" setPlayer={setPlayer4} />
        </div>
        <button
          className="bg-blue-500 text-white drop-shadow-md hover:drop-shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
          type="submit"
        >
          儲存
        </button>
      </form>
    </div>
  )
}

export default CreateGame
