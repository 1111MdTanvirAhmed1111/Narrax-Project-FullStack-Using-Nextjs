import React from 'react'
import GradientCard from './GradientCard.jsx'

const upcomingChallenges = [
  { title: "3-Sentence Horror", time: "Starts in 2 hours", action: "Join Queue" },
  { title: "Plot Twist Only", time: "Starts tomorrow", action: "Set Reminder" }
]

const UpcomingChallenge = ({ challenge }) => (
  <div className="p-3 bg-red-950/50 rounded-lg border border-red-500/30 hover:scale-105 transition-all duration-300">
    <h4 className="text-red-300 font-semibold">{challenge.title}</h4>
    <p className="text-gray-400 text-sm">{challenge.time}</p>
    <button className="mt-2 bg-red-600 px-3 py-1 rounded-full text-white text-sm hover:bg-red-500 hover:scale-105 transition-all duration-300">
      {challenge.action}
    </button>
  </div>
)

export default function UpcomingChallenges() {
  return (
    <GradientCard className="animate-on-scroll">
      <h3 className="text-lg font-bold text-red-300 mb-4">Upcoming Challenges</h3>
      <div className="space-y-3">
        {upcomingChallenges.map((challenge, index) => (
          <UpcomingChallenge key={index} challenge={challenge} />
        ))}
      </div>
    </GradientCard>
  )
}