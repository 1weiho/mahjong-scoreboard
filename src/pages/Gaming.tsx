import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PlayerCard from "../components/PlayerCard"
import { Game } from "../interfaces/Game"

const Gaming = () => {
  const [gameData, setGameData] = useState<Game>()
  const { gameId } = useParams<string>()

  const fetchGameData = () => {
    let gameDataLocal: Game[] = JSON.parse(localStorage.getItem("gameData") as string)
    const gameDataTarget: Game = gameDataLocal.filter((item: Game) => item.UUID === gameId)[0]
    setGameData(gameDataTarget)
  }

  useEffect(() => {
    fetchGameData()
  }, [])

  return (
    <div className="h-full w-full p-12">
      {gameData?.players && (
        <div className="grid grid-rows-3 h-full w-full auto-rows-auto">
          <div className="row-span-1 flex justify-center items-start">
            <PlayerCard
              wind={gameData?.players[2].wind}
              name={gameData?.players[2].name}
              score={gameData?.players[2].score}
            />
          </div>
          <div className="row-span-1 flex justify-between items-center">
            <PlayerCard
              wind={gameData?.players[3].wind}
              name={gameData?.players[3].name}
              score={gameData?.players[3].score}
            />
            <PlayerCard
              wind={gameData?.players[1].wind}
              name={gameData?.players[1].name}
              score={gameData?.players[1].score}
            />
          </div>
          <div className="row-span-1 flex justify-center items-end">
            <PlayerCard
              wind={gameData?.players[0].wind}
              name={gameData?.players[0].name}
              score={gameData?.players[0].score}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gaming
