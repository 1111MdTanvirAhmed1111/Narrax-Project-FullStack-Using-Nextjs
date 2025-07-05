'use client'

import React, { useState, useEffect, useRef } from 'react'
import Navigation from '@/components/Home/Navigation.jsx'
import Header from '@/components/Home/Header.jsx'
import CreateBattle from '@/components/Home/CreateBattle.jsx'
import BattleFeed from '@/components/Home/BattleFeed.jsx'
import TrendingCategories from '@/components/Home/TrendingCategories.jsx'
import HallOfFame from '@/components/Home/HallOfFame.jsx'
import OnlineUsers from '@/components/Home/OnlineUsers.jsx'
import TrendingSnippets from '@/components/Home/TrendingSnippets.jsx'
import UpcomingChallenges from '@/components/Home/UpcomingChallenges.jsx'
import EmotionRoulette from '@/components/Home/EmotionRoulette.jsx'

export default function NarraxApp() {
  const [searchQuery, setSearchQuery] = useState('')
  const [storyContent, setStoryContent] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-fade-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900 text-white overflow-hidden">
    
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 space-y-4 animate-on-scroll">
          <Navigation />
        </aside>

        <main className="lg:col-span-2 space-y-6">
          <CreateBattle storyContent={storyContent} setStoryContent={setStoryContent} />
          <BattleFeed />
          <TrendingCategories />
        </main>

        <aside className="lg:col-span-1 space-y-4">
          <HallOfFame />
          <OnlineUsers />
          <TrendingSnippets />
          <UpcomingChallenges />
          <EmotionRoulette />
        </aside>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}