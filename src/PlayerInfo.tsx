import { Player } from "./Player"

interface Props {
  players: Player[]
}

function PlayerInfo({ players }: Props) {
  return (
    <div className="rounded-lg bg-white shadow-md absolute top-10 left-10 p-3 px-6">
      <h1 className="tracking-widest text-xl mb-3">玩家資訊</h1>
      <table className="text-start">
        <thead>
          <tr>
            <th className="pr-8">風向</th>
            <th className="pr-8">名稱</th>
            <th className="pr-8">分數</th>
          </tr>
        </thead>
        <tbody>
          {players.map((d) => (
            <tr key={d.wind.id}>
              <td>{d.wind.name}</td>
              <td>{d.name}</td>
              <td>{d.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerInfo
