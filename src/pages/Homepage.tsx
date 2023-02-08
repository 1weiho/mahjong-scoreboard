import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-12 mt-80">
        歡迎使用 <span className="text-sky-600">麻將計分板</span>
      </h1>
      <div className="flex space-x-6">
        <Link
          to="create-game"
          className="bg-white shadow-md rounded-md px-5 py-3 w-64 flex flex-col text-start hover:shadow-lg duration-200"
        >
          <span className="text-2xl font-semibold mb-2">創建遊戲</span>
          <span className="text-slate-700">創建一個新的遊戲，並設定玩家名稱</span>
        </Link>
        <Link
          to="game-history"
          className="bg-white shadow-md rounded-md px-5 py-3 w-64 flex flex-col text-start hover:shadow-lg duration-200"
        >
          <span className="text-2xl font-semibold mb-2">歷史紀錄</span>
          <span className="text-slate-700">檢視所有歷史紀錄，可查看詳細遊戲結果</span>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
