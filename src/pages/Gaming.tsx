import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GamePanel from "../components/GamePanel"
import PlayerCard from "../components/PlayerCard"
import { Game } from "../interfaces/Game"
import { Round } from "../interfaces/Round"

const Gaming = () => {
  const [gameData, setGameData] = useState<Game>()
  const [currentRoundInfo, setCurrentRoundInfo] = useState<Round>()
  const { gameId } = useParams<string>()

  const fetchGameData = () => {
    let gameDataLocal: Game[] = JSON.parse(localStorage.getItem("gameData") as string)
    const gameDataTarget: Game = gameDataLocal.filter((item: Game) => item.UUID === gameId)[0]
    setGameData(gameDataTarget)
  }

  useEffect(() => {
    fetchGameData()
  }, [])

  const handleRoundEnd = () => {}

  // This effect is used to save the current round information when the gameData state changed
  useEffect(() => {
    if (gameData?.round != null) {
      const roundCount = gameData.round.length
      setCurrentRoundInfo(gameData.round[roundCount - 1])
    }
  }, [gameData])

  return (
    <div className="h-full w-full p-12">
        <div className="grid grid-rows-3 h-full w-full auto-rows-auto">
          <div className="row-span-1 flex justify-center items-start">
      {gameData?.players && currentRoundInfo && (
            <PlayerCard
              wind={gameData?.players[2].wind}
              name={gameData?.players[2].name}
              score={gameData?.players[2].score}
              dealerWind={currentRoundInfo?.round}
            />
          </div>
          <div className="row-span-1 flex justify-between items-center">
            <PlayerCard
              wind={gameData?.players[3].wind}
              name={gameData?.players[3].name}
              score={gameData?.players[3].score}
              dealerWind={currentRoundInfo?.round}
            />
              <GamePanel windName={currentRoundInfo?.wind.name} roundName={currentRoundInfo?.round.name} />
            <PlayerCard
              wind={gameData?.players[1].wind}
              name={gameData?.players[1].name}
              score={gameData?.players[1].score}
              dealerWind={currentRoundInfo?.round}
            />
          </div>
          <div className="row-span-1 flex justify-center items-end">
            <PlayerCard
              wind={gameData?.players[0].wind}
              name={gameData?.players[0].name}
              score={gameData?.players[0].score}
              dealerWind={currentRoundInfo?.round}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gaming
