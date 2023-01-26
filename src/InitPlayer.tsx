import { useState } from "react"
import { Player, WIND_TYPE } from "./Player"

interface Props {
  setPlayers: (newPlayer: Player[]) => void
}

function InitPlayer({ setPlayers }: Props) {
  const [player1, setPlayer1] = useState<Player>({ name: "", wind: WIND_TYPE[0], score: 0 })
  const [player2, setPlayer2] = useState<Player>({ name: "", wind: WIND_TYPE[1], score: 0 })
  const [player3, setPlayer3] = useState<Player>({ name: "", wind: WIND_TYPE[2], score: 0 })
  const [player4, setPlayer4] = useState<Player>({ name: "", wind: WIND_TYPE[3], score: 0 })

  return (
    <form
      className="h-1/2 w-1/4 rounded-lg shadow-md bg-white flex flex-col px-12 space-y-8 items-center"
      onSubmit={() => setPlayers([player1, player2, player3, player4])}
    >
      <h1 className="text-center text-2xl tracking-widest text-slate-900 mt-12">初始化玩家</h1>
      <input
        type="text"
        placeholder="東 - 玩家 1"
        className="border-2 border-slate-200 rounded-md p-3 w-full"
        onChange={(e) => setPlayer1((prevState) => ({ ...prevState, name: e.target.value }))}
        required
      />
      <input
        type="text"
        placeholder="西 - 玩家 2"
        className="border-2 border-slate-200 rounded-md p-3 w-full"
        onChange={(e) => setPlayer2((prevState) => ({ ...prevState, name: e.target.value }))}
        required
      />
      <input
        type="text"
        placeholder="南 - 玩家 3"
        className="border-2 border-slate-200 rounded-md p-3 w-full"
        onChange={(e) => setPlayer3((prevState) => ({ ...prevState, name: e.target.value }))}
        required
      />
      <input
        type="text"
        placeholder="北 - 玩家 4"
        className="border-2 border-slate-200 rounded-md p-3 w-full"
        onChange={(e) => setPlayer4((prevState) => ({ ...prevState, name: e.target.value }))}
        required
      />
      <button
        className="border-cyan-700 border-2 rounded-lg px-3 py-2 w-24 text-cyan-700 hover:bg-cyan-700 hover:text-white duration-150 tracking-widest"
        type="submit"
      >
        繼續
      </button>
    </form>
  )
}

export default InitPlayer
