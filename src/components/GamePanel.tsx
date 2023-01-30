interface Props {
  windName: string
  roundName: string
}

const GamePanel = ({ windName, roundName }: Props) => {
  return (
    <div className="bg-white drop-shadow-md hover:drop-shadow-lg duration-200 rounded-md px-5 py-3 flex flex-col text-center">
      <span className="text-2xl font-semibold mb-2">
        {windName}風{roundName}局
      </span>
      <button className="bg-blue-500 text-white drop-shadow-md hover:drop-shadow-lg rounded-lg px-3 py-2 w-24 duration-200 tracking-widest">
        結束
      </button>
    </div>
  )
}

export default GamePanel
