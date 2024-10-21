import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sword, Trophy, Medal, Award } from 'lucide-react'

const leaderboardData = [
  { rank: 1, name: "Magnus Carlsen", rating: 2862, wins: 152, losses: 21 },
  { rank: 2, name: "Ding Liren", rating: 2799, wins: 138, losses: 28 },
  { rank: 3, name: "Ian Nepomniachtchi", rating: 2795, wins: 131, losses: 32 },
  { rank: 4, name: "Alireza Firouzja", rating: 2785, wins: 125, losses: 35 },
  { rank: 5, name: "Fabiano Caruana", rating: 2780, wins: 122, losses: 37 },
]

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <Sword className="mr-2 text-purple-500" />
          Chess Leaderboard
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Wins</TableHead>
              <TableHead>Losses</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((player) => (
              <TableRow key={player.rank}>
                <TableCell className="font-medium">
                  {player.rank === 1 && <Trophy className="inline mr-2 text-yellow-500" />}
                  {player.rank === 2 && <Medal className="inline mr-2 text-gray-400" />}
                  {player.rank === 3 && <Award className="inline mr-2 text-orange-500" />}
                  {player.rank}
                </TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.rating}</TableCell>
                <TableCell>{player.wins}</TableCell>
                <TableCell>{player.losses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}