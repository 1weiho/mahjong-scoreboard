import { Player } from "../interfaces/Player"

function PlayerCard({ wind, name, score }: Player) {
  return (
    <div className="border border-slate-400 rounded-md px-5 py-3 w-64 h-fit flex items-center justify-between">
      <div className="flex flex-col">
        <span>{wind.name}</span>
        <span className="text-2xl font-semibold mb-2">{name}</span>
      </div>
      {score > 0 && <span className="text-xl text-emerald-500 font-bold">+ {score}</span>}
      {score === 0 && <span className="text-xl text-slate-500 font-bold">+ {score}</span>}
      {score < 0 && <span className="text-xl text-rose-500 font-bold">- {score}</span>}
    </div>
  )
}

export default PlayerCard
