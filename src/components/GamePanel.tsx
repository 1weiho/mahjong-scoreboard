interface Props {
  windName: string
  roundName: string
}

const GamePanel = ({ windName, roundName }: Props) => {
  return (
    <div className="border border-slate-400 rounded-md px-5 py-3 flex flex-col text-center">
      <span className="text-2xl font-semibold mb-2">
        {windName}風{roundName}局
      </span>
      <button className="border-cyan-700 border-2 rounded-lg px-3 py-2 w-24 text-cyan-700 hover:bg-cyan-700 hover:text-white duration-150 tracking-widest">
        結束
      </button>
    </div>
  )
}

export default GamePanel
