import React from 'react'
import { Dice6 } from 'lucide-react'
import GradientCard from './GradientCard.jsx'

export default function EmotionRoulette() {
  return (
    <GradientCard className="animate-on-scroll">
      <h3 className="text-lg font-bold text-red-300 mb-4">Emotion Roulette</h3>
      <div className="text-center">
        <div className="text-6xl mb-4 hover:animate-spin transition-all duration-300">
          <Dice6 className="w-16 h-16 mx-auto text-red-400" />
        </div>
        <button className="bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-full text-white font-semibold hover:from-red-500 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30">
          Spin for Random Battle
        </button>
      </div>
    </GradientCard>
  )
}