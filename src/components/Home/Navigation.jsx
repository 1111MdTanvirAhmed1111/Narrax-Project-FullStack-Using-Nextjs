import React from 'react'
import { Home, Compass, Grid3x3, Gamepad2, Trophy, Plus, Bookmark, Settings } from 'lucide-react'
import GradientCard from './GradientCard.jsx'

const navigationItems = [
  { icon: Home, label: 'Feed', active: true },
  { icon: Compass, label: 'Explore' },
  { icon: Grid3x3, label: 'Categories' },
  { icon: Gamepad2, label: 'Story Arena' },
  { icon: Trophy, label: 'Battle Leaderboard' },
  { icon: Plus, label: 'Create Battle' },
  { icon: Bookmark, label: 'Saved Stories' },
  { icon: Settings, label: 'Settings' }
]

const profileStats = [
  { label: 'Battles Won', value: '23' },
  { label: 'Stories Posted', value: '47' },
  { label: 'Rank', value: 'Horror King' }
]

const NavigationItem = ({ item, isActive }) => {
  const Icon = item.icon
  return (
    <div className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 ${
      isActive 
        ? 'bg-red-500/20 border-l-4 border-red-500 hover:bg-red-500/30' 
        : 'hover:bg-red-500/20'
    }`}>
      <Icon className="w-5 h-5 text-red-400" />
      <span className={`font-semibold ${isActive ? 'text-red-100' : 'text-gray-300'}`}>
        {item.label}
      </span>
    </div>
  )
}

const ProfileStat = ({ stat }) => (
  <div className="flex justify-between">
    <span className="text-gray-300">{stat.label}</span>
    <span className="text-red-400 font-bold">{stat.value}</span>
  </div>
)

export default function Navigation() {
  return (
    <GradientCard>
      <nav className="space-y-3 ">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} item={item} isActive={item.active} />
        ))}
      </nav>

      <div className="mt-8 p-4 bg-red-950/50 rounded-xl border border-red-500/30">
        <h3 className="text-lg font-bold text-red-300 mb-3">Profile Summary</h3>
        <div className="space-y-2">
          {profileStats.map((stat, index) => (
            <ProfileStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </GradientCard>
  )
}