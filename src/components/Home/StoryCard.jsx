import React from 'react'

export default function StoryCard({ story }) {
  return (
    <div className="bg-red-950/50 rounded-xl p-4 border border-red-500/30 hover:scale-105 transition-all duration-300">
      <h4 className="text-red-300 font-semibold mb-2">{story.title}</h4>
      <p className="text-gray-400 text-sm blur-sm hover:blur-none transition-all duration-300">
        {story.content}
      </p>
      <div className="mt-3 flex items-center space-x-2">
        <div className="w-full bg-red-950/50 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${story.votes}%` }}
          ></div>
        </div>
        <span className="text-red-300 text-sm font-bold">{story.votes}%</span>
      </div>
    </div>
  )
}