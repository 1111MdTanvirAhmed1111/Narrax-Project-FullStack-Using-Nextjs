import React from 'react'
import GradientCard from './GradientCard.jsx'

const hallOfFame = [
  { rank: '👑', title: 'Horror King', wins: 47, color: 'bg-gradient-to-r from-yellow-500/20 to-red-500/20', border: 'border-yellow-500/30', text: 'text-yellow-300' },
  { rank: '🥈', title: 'Sad Slayer', wins: 34, color: 'bg-red-950/50', border: 'border-red-500/30', text: 'text-red-300' },
  { rank: '🥉', title: 'Funny Phantom', wins: 29, color: 'bg-red-950/50', border: 'border-red-500/30', text: 'text-red-300' }
]

const HallOfFameItem = ({ item }) => (
  <div className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${item.color} ${item.border}`}>
    <span className="text-xl">{item.rank}</span>
    <div>
      <h4 className={`font-bold ${item.text}`}>{item.title}</h4>
      <p className="text-gray-400 text-sm">{item.wins} wins this week</p>
    </div>
  </div>
)

export default function HallOfFame() {
  return (
    <GradientCard className="animate-on-scroll">
      <h3 className="text-lg font-bold text-red-300 mb-4">Hall of Fame</h3>
      <div className="space-y-3">
        {hallOfFame.map((item, index) => (
          <HallOfFameItem key={index} item={item} />
        ))}
      </div>
    </GradientCard>
  )
}