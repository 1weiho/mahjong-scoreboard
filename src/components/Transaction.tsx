import { Player } from "../interfaces/Player"
import { ResultType } from "../interfaces/ResultType"

interface Props {
  resultType: ResultType
  player: Player[]
  roundName: string
  winnerPlayer: Player
  loserPlayer: Player[]
}

const handleCalculateTransaction = () => {}

const Transaction = ({ resultType, player, roundName, winnerPlayer, loserPlayer }: Props) => {
  return (
    <div>
      <div className="mb-12 flex flex-col space-y-3 items-center">
        <label>請輸入牌型台數，無須算入莊家、連莊、自摸台數</label>
        <div className="space-x-3">
          <input
            type="text"
            className="bg-white shadow-md rounded-md h-12 w-12 text-center text-2xl font-semibold outline-none"
          />
          <span className="text-lg">台</span>
        </div>
      </div>
      <button
        className="bg-blue-500 text-white shadow-md hover:shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest"
        onClick={handleCalculateTransaction}
      >
        繼續
      </button>
    </div>
  )
}

export default Transaction
