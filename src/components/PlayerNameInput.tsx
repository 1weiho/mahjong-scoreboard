interface Props {
  wind: string
  setPlayer: (newPlayer: string) => void
}

const PlayerNameInput = ({ wind, setPlayer }: Props) => {
  return (
    <div className="border border-slate-400 rounded-md px-5 py-3 w-64 flex flex-col text-start">
      <span className="text-2xl font-semibold mb-2">{wind}風</span>
      <input
        className="text-slate-700 bg-transparent outline-none"
        placeholder="請輸入玩家名稱"
        onChange={(e) => setPlayer(e.target.value)}
      />
    </div>
  )
}

export default PlayerNameInput
