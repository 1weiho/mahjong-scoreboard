import { Routes, Route } from "react-router-dom"
import CreateGame from "./pages/CreateGame"
import GameHistory from "./pages/GameHistory"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center text-slate-900">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/game-history" element={<GameHistory />} />
      </Routes>
    </div>
  )
}

export default App
