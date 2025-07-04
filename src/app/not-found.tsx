'use client';

import React from 'react';
import { Home, Search, BookOpen, ImageOff, AlertCircle, X } from 'lucide-react';
import '../app/globals.css';
import Link from 'next/link';

interface ParticleProps {
  style: React.CSSProperties;
  delay: number;
}

const Particle = ({ style, delay }: ParticleProps) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-float"
    style={{ ...style, animationDelay: `${delay}ms` }}
  />
);

export default function ErrorPage() {
  return (
    <div id="webcrumbs" className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-black/80 to-red-800/20"></div>

      {/* Particle effects */}
      {[...Array(10)].map((_, i) => (
        <Particle
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
          delay={i * 200}
        />
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4 transform hover:scale-105 transition-all duration-500 font-mono tracking-wider">
            4<span className="inline-block animate-pulse text-red-600">0</span>4
          </h1>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 opacity-30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 opacity-40 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

        <div className="mb-8 space-y-4">
          <BookOpen className="text-red-500 text-6xl md:text-7xl mx-auto mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300" />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 font-sans tracking-wide">
            This story got lost in the battle...
          </h2>

          <p className="text-lg md:text-xl text-gray-300 font-medium opacity-90">
            {"Let's"} take you back to the arena.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-red-500/50 hover:shadow-2xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-5 h-5" />
              <Link href="/">Go to Homepage</Link>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 border-2 border-red-600 text-red-500 font-bold text-lg rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 hover:text-white transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search Stories
            </span>
          </button>
        </div>

        <div className="flex justify-center space-x-8 opacity-60">
          <div className="w-2 h-2 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-red-500 to-red-700 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-red-600 to-red-800 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      <div className="absolute top-10 left-10 opacity-10">
        <BookOpen className="text-red-500 text-8xl transform -rotate-12" />
      </div>

      <div className="absolute bottom-10 right-10 opacity-10">
        <ImageOff className="text-red-600 text-6xl transform rotate-12" />
      </div>

      <div className="absolute top-1/2 left-5 opacity-5">
        <AlertCircle className="text-red-700 text-9xl" />
      </div>

      <div className="absolute bottom-1/4 left-1/4 opacity-5">
        <X className="text-red-800 text-7xl transform rotate-45" />
      </div>
    </div>
  );
}