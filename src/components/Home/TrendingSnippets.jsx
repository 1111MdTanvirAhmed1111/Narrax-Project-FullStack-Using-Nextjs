import React from 'react'
import GradientCard from './GradientCard.jsx'

const trendingSnippets = [
  { text: "The last person on Earth heard a knock at the door...", category: "😱 Horror", votes: "2.3k" },
  { text: "I love you, she said. But I'm from the future...", category: "🤯 Mindblow", votes: "1.9k" },
  { text: "My dog started talking. I wish he hadn't...", category: "😂 Funny", votes: "1.7k" }
]

const TrendingSnippet = ({ snippet }) => (
  <div className="p-3 bg-red-950/50 rounded-lg border border-red-500/30 hover:bg-red-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
    <p className="text-gray-300 text-sm">"{snippet.text}"</p>
    <span className="text-red-400 text-xs">{snippet.category} • {snippet.votes} votes</span>
  </div>
)

export default function TrendingSnippets() {
  return (
    <GradientCard className="animate-on-scroll">
      <h3 className="text-lg font-bold text-red-300 mb-4">Trending Snippets</h3>
      <div className="space-y-3">
        {trendingSnippets.map((snippet, index) => (
          <TrendingSnippet key={index} snippet={snippet} />
        ))}
      </div>
    </GradientCard>
  )
}