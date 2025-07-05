import React from 'react'
import StoryCard from './StoryCard.jsx'

export default function BattleCard({ battle }) {
  return (
    <div className="bg-gradient-to-r from-red-950/80 to-black/80 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 shadow-2xl shadow-red-500/10 hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-red-300">{battle.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${battle.statusColor}`}>
          {battle.status}
        </span>
      </div>
      <p className="text-gray-300 mb-4">Prompt: "{battle.prompt}"</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {battle.stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {battle.status === 'LIVE' ? (
            ['🤯', '😂', '😭', '❤️', '😱'].map((emoji, index) => (
              <button key={index} className="hover:scale-125 transition-all duration-300 text-xl">
                {emoji}
              </button>
            ))
          ) : (
            <span className="text-sm text-gray-400">❤️ 234 😭 156 🤯 89</span>
          )}
        </div>
        <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          battle.status === 'LIVE' 
            ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 hover:scale-105 shadow-lg shadow-red-500/30' 
            : 'bg-red-950/50 text-red-300 border border-red-500/30 hover:bg-red-500/20'
        }`}>
          {battle.status === 'LIVE' ? 'Vote Now' : 'View Full Stories'}
        </button>
      </div>
    </div>
  )
}