import { WIND_TYPE } from "../interfaces/WindType"

interface Props {
  wind: typeof WIND_TYPE[number]
  name: string
  score: number
  dealerWind: typeof WIND_TYPE[number]
}

function PlayerCard({ wind, name, score, dealerWind }: Props) {
  return (
    <div className="bg-white drop-shadow-md hover:drop-shadow-lg duration-200 rounded-md px-5 py-3 w-64 h-fit flex items-center justify-between">
      <div className="flex flex-col">
        <span>{wind.name}</span>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl font-semibold">{name}</span>
          {wind.id === dealerWind.id && (
            <span className="bg-rose-500 text-white px-2 py-1 text-xs rounded-full tracking-widest flex justify-center items-center">
              莊家
            </span>
          )}
        </div>
      </div>
      {score > 0 && <span className="text-xl text-emerald-500 font-bold">+ {score}</span>}
      {score === 0 && <span className="text-xl text-slate-500 font-bold">+ {score}</span>}
      {score < 0 && <span className="text-xl text-rose-500 font-bold">- {score}</span>}
    </div>
  )
}

export default PlayerCard
