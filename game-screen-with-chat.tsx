import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sword, User, Cpu, Clock, Send } from 'lucide-react'

export default function GameScreenWithChat() {
  const [gameType, setGameType] = useState<'pvp' | 'pve'>('pvp')
  const [timeLeft, setTimeLeft] = useState({ white: 600, black: 600 }) // 10 minutes per player
  const [chatMessages, setChatMessages] = useState<{ sender: string; message: string }[]>([])
  const [newMessage, setNewMessage] = useState('')

  // Placeholder for chess board state
  const [boardState, setBoardState] = useState(Array(64).fill(null))

  const renderSquare = (i: number) => {
    const row = Math.floor(i / 8)
    const col = i % 8
    const isLight = (row + col) % 2 === 0
    return (
      <div
        key={i}
        className={`aspect-square flex items-center justify-center text-2xl ${
          isLight ? 'bg-gray-200' : 'bg-gray-400'
        }`}
      >
        {boardState[i]}
      </div>
    )
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { sender: 'You', message: newMessage.trim() }])
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <Sword className="mr-2 text-purple-500" />
          Chess Game with Chat
        </h1>
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setGameType('pvp')}
            className={`mr-4 ${gameType === 'pvp' ? 'bg-purple-500' : 'bg-gray-300'}`}
          >
            <User className="mr-2" /> Player vs Player
          </Button>
          <Button
            onClick={() => setGameType('pve')}
            className={gameType === 'pve' ? 'bg-purple-500' : 'bg-gray-300'}
          >
            <Cpu className="mr-2" /> Player vs Computer
          </Button>
        </div>
        <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
          <div className="w-full md:w-3/4 pr-0 md:pr-8 mb-8 md:mb-0 flex flex-col justify-between">
            <div className="flex justify-between mb-4">
              <div className="flex items-center bg-purple-100 rounded-full px-4 py-2">
                <User className="mr-2 text-purple-500" />
                <span className="font-bold text-purple-700">Player 1</span>
              </div>
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
                <Clock className="mr-2 text-gray-700" />
                <span className="font-bold text-gray-800">{Math.floor(timeLeft.white / 60)}:{(timeLeft.white % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
            <div className="aspect-square w-full max-w-[600px] mx-auto">
              <div className="grid grid-cols-8 gap-0 h-full">
                {[...Array(64)].map((_, i) => renderSquare(i))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center bg-purple-100 rounded-full px-4 py-2">
                {gameType === 'pvp' ? <User className="mr-2 text-purple-500" /> : <Cpu className="mr-2 text-purple-500" />}
                <span className="font-bold text-purple-700">{gameType === 'pvp' ? 'Player 2' : 'Computer'}</span>
              </div>
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
                <Clock className="mr-2 text-gray-700" />
                <span className="font-bold text-gray-800">{Math.floor(timeLeft.black / 60)}:{(timeLeft.black % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 md:pl-8 md:border-l flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">Chat</h2>
            <div className="flex-grow overflow-y-auto mb-4 bg-gray-100 rounded p-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="font-bold">{msg.sender}:</span> {msg.message}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
              <Input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit">
                <Send className="mr-2" /> Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}