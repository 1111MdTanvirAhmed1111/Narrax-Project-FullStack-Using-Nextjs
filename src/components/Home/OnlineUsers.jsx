import React from 'react'
import GradientCard from './GradientCard.jsx'

const onlineUsers = [
  { name: 'Mystery Writer', status: 'online' },
  { name: 'Story Weaver', status: 'online' },
  { name: 'Plot Twister', status: 'online' },
  { name: 'Word Warrior', status: 'away' }
]

const OnlineUser = ({ user }) => (
  <div className="flex items-center space-x-3 hover:scale-105 transition-all duration-300">
    <div className={`w-3 h-3 rounded-full ${user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
    <span className="text-gray-300">{user.name}</span>
  </div>
)

export default function OnlineUsers() {
  return (
    <GradientCard className="animate-on-scroll">
      <h3 className="text-lg font-bold text-red-300 mb-4">Who's Online</h3>
      <div className="space-y-2">
        {onlineUsers.map((user, index) => (
          <OnlineUser key={index} user={user} />
        ))}
      </div>
    </GradientCard>
  )
}