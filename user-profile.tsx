import { Sword, Trophy, TrendingUp, Clock, User } from 'lucide-react'

export default function UserProfile() {
  const user = {
    name: "John Doe",
    rating: 1850,
    gamesPlayed: 250,
    winRate: 62,
    averageGameTime: "15 minutes",
    recentGames: [
      { opponent: "Jane Smith", result: "Win", date: "2023-05-15" },
      { opponent: "Mike Johnson", result: "Loss", date: "2023-05-14" },
      { opponent: "Sarah Brown", result: "Draw", date: "2023-05-13" },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <Sword className="mr-2 text-purple-500" />
          User Profile
        </h1>
        <div className="flex mb-8">
          <div className="w-1/3">
            <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User size={64} className="text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-center">{user.name}</h2>
          </div>
          <div className="w-2/3 pl-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Trophy className="mr-2 text-yellow-500" />
                  <span className="font-bold">Rating</span>
                </div>
                <span className="text-2xl">{user.rating}</span>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center mb-2">
                  <TrendingUp className="mr-2 text-green-500" />
                  <span className="font-bold">Win Rate</span>
                </div>
                <span className="text-2xl">{user.winRate}%</span>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Sword className="mr-2 text-purple-500" />
                  <span className="font-bold">Games Played</span>
                </div>
                <span className="text-2xl">{user.gamesPlayed}</span>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Clock className="mr-2 text-blue-500" />
                  <span className="font-bold">Avg. Game Time</span>
                </div>
                <span className="text-2xl">{user.averageGameTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Games</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Opponent</th>
                <th className="p-2 text-left">Result</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {user.recentGames.map((game, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{game.opponent}</td>
                  <td className="p-2">
                    <span className={`font-bold ${
                      game.result === 'Win' ? 'text-green-500' :
                      game.result === 'Loss' ? 'text-red-500' :
                      'text-yellow-500'
                    }`}>
                      {game.result}
                    </span>
                  </td>
                  <td className="p-2">{game.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}