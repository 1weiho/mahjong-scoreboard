import { useEffect, useState } from "react"
import { GameState } from "../interfaces/GameState"
import { Player } from "../interfaces/Player"

interface Props {
  player: Player[]
  setWinnerPlayer: (winnerPlayer: Player) => void
  setLoserPlayer: (loserPlayer: Player[]) => void
  setGameState: (state: GameState) => void
}
const ChuckSelect = ({ player, setWinnerPlayer, setLoserPlayer, setGameState }: Props) => {
  const [selectingChucker, setSelectingChucker] = useState(true)
  const [selectingWinner, setSelectingWinner] = useState(false)
  const [chucker, setChucker] = useState<Player>()
  const [winner, setWinner] = useState<Player>()

  const handleSelectChuck = (player: Player) => {
    setChucker(player)
    setSelectingChucker(false)
    setSelectingWinner(true)
  }

  const handleSelectWinner = (player: Player) => {
    setWinner(player)
    setSelectingWinner(false)
  }

  const handleCancel = () => {
    setGameState("waiting")
  }

  // handle return data back to game panel
  useEffect(() => {
    if (chucker && winner) {
      setWinnerPlayer(winner)
      setLoserPlayer([chucker])
      setGameState("inTransaction")
    }
  }, [chucker, winner])

  return (
    <div>
      {selectingChucker && (
        <div>
          <div className="text-start mb-4">
            <span>
              請選擇 <span className="text-rose-500">放槍</span> 玩家
            </span>
          </div>
          <div className="flex justify-center space-x-4">
            {player.map((d) => (
              <button
                className="bg-blue-500 text-white drop-shadow-md hover:drop-shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
                key={d.wind.id}
                onClick={() => handleSelectChuck(d)}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
      )}
      {selectingWinner && (
        <div>
          <div className="text-start mb-4">
            <span>
              請選擇 <span className="text-emerald-500">獲勝</span> 玩家
            </span>
          </div>
          <div className="flex justify-center space-x-4">
            {player.map((d) =>
              d.wind.id === chucker?.wind.id ? (
                <button
                  className="bg-slate-500 text-white drop-shadow-md hover:drop-shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
                  key={d.wind.id}
                  disabled
                >
                  {d.name}
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white drop-shadow-md hover:drop-shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
                  key={d.wind.id}
                  onClick={() => handleSelectWinner(d)}
                >
                  {d.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
      <button className="tracking-widest mt-6" onClick={handleCancel}>
        取消
      </button>
    </div>
  )
}

export default ChuckSelect
