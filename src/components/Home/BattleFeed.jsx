import React from 'react'
import BattleCard from './BattleCard.jsx'

const battles = [
  {
    id: 1247,
    title: "Horror Battle #1247",
    status: "LIVE",
    statusColor: "bg-red-600/20 text-red-300",
    prompt: "You wake up in a room you've never seen before...",
    stories: [
      { id: "A", title: "Story A", content: "The darkness consumed everything around me as I realized...", votes: 60 },
      { id: "B", title: "Story B", content: "The cold floor beneath my feet told me something was wrong...", votes: 40 }
    ]
  },
  {
    id: 1246,
    title: "Romantic Battle #1246",
    status: "FINISHED",
    statusColor: "bg-green-600/20 text-green-300",
    prompt: "The last message you sent was...",
    stories: [
      { id: "A", title: "Story A - WINNER", content: "Three dots. That's all it took to end everything we had...", votes: 80 },
      { id: "B", title: "Story B", content: "I love you. But you'll never see this message...", votes: 20 }
    ]
  }
]

export default function BattleFeed() {
  return (
    <div className="space-y-4 animate-on-scroll">
      <h2 className="text-2xl font-bold text-red-300 drop-shadow-lg shadow-red-500/50">
        Live Battle Feed
      </h2>
      {battles.map((battle) => (
        <BattleCard key={battle.id} battle={battle} />
      ))}
    </div>
  )
}