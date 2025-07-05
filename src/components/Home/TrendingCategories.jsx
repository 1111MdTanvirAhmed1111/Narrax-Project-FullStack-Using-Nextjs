import React from 'react'
import GradientCard from './GradientCard.jsx'

const trendingCategories = [
  { emoji: '😱', label: 'Horror', battles: 47 },
  { emoji: '😂', label: 'Funny', battles: 32 },
  { emoji: '😭', label: 'Sad', battles: 28 },
  { emoji: '❤️', label: 'Romantic', battles: 25 },
  { emoji: '😬', label: 'Cringe', battles: 19 },
  { emoji: '🤯', label: 'Mindblow', battles: 15 }
]

const TrendingCategory = ({ category }) => (
  <div className="bg-red-950/50 rounded-xl p-4 border border-red-500/30 hover:bg-red-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
    <div className="text-center">
      <span className="text-3xl mb-2 block group-hover:animate-bounce">{category.emoji}</span>
      <h3 className="text-red-300 font-bold">{category.label}</h3>
      <p className="text-gray-400 text-sm">{category.battles} active battles</p>
    </div>
  </div>
)

export default function TrendingCategories() {
  return (
    <GradientCard className="animate-on-scroll">
      <h2 className="text-xl font-bold text-red-300 mb-4">Trending Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {trendingCategories.map((category, index) => (
          <TrendingCategory key={index} category={category} />
        ))}
      </div>
    </GradientCard>
  )
}