import { useEffect, useState } from "react"
import InitPlayer from "./InitPlayer"
import { Player } from "./Player"
import { GameData } from "./GameData"

function App() {
  const [gameData, setGameData] = useState<GameData>()
  const [players, setPlayers] = useState<Player[]>([])

  // Check if the player info is in the local storage first
  useEffect(() => {
    if ("gameData" in localStorage) {
      const gameDataLocal = JSON.parse(localStorage.getItem("gameData") as string) as GameData
      setPlayers(gameDataLocal.players)
    }
  }, [])

  // Sync the gameData between state and localStorage when gameData changed
  useEffect(() => {
    localStorage.setItem("gameData", JSON.stringify(gameData))
    return () => {
      localStorage.removeItem("gameData")
    }
  }, [gameData])

  // Save player data to gameData when players changes
  useEffect(() => {
    setGameData({ ...gameData, players: players })
  }, [players])

  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      {players.length == 0 && <InitPlayer setPlayers={setPlayers} />}
    </div>
  )
}

export default App
