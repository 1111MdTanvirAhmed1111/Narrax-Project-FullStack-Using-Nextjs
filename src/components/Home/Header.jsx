'use client'
import React from 'react'
import { Search, Bell, Mail, Eye } from 'lucide-react'
import ProfileDropDown from './Navigation/ProfileDropDown';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react';


export default function Header() {
  const { data: session } = useSession();
  return (
    <nav className="w-full h-16 bg-black backdrop-blur-lg border-b border-red-500/30 shadow-lg shadow-red-500/20 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-red-400 drop-shadow-lg shadow-red-500/50 hover:scale-110 transition-all duration-300">
            NARRAX
          </h1>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search battles, categories, storytellers..."
              className="w-full px-4 py-2 bg-red-950/50 border border-red-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 backdrop-blur-sm"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-300 transition-colors duration-300 w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Bell className="text-red-400 hover:text-red-300 hover:scale-110 transition-all duration-300 cursor-pointer w-6 h-6" />
          <Mail className="text-red-400 hover:text-red-300 hover:scale-110 transition-all duration-300 cursor-pointer w-6 h-6" />
          <button className="bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-full text-white font-semibold hover:from-red-500 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30">
            Create Battle
          </button>
          <Eye className="text-red-400 hover:text-red-300 hover:scale-110 transition-all duration-300 cursor-pointer w-6 h-6" />


          <ProfileDropDown session={session}>
          <Avatar>
  <AvatarImage src={session?.user?.image} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
          </ProfileDropDown>
        </div>
      </div>
    </nav>
  )
}