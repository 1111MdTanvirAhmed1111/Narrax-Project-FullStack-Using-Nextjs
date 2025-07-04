'use client';

import React, { useEffect, useState } from 'react';
import { Loader2, BookOpen, Sparkles } from 'lucide-react';
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

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="webcrumbs" className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-black/80 to-red-800/20"></div>

      {/* Particle effects */}
      {[...Array(12)].map((_, i) => (
        <Particle
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
          delay={i * 150}
        />
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <Loader2 className="text-red-500 text-8xl md:text-9xl animate-spin mx-auto mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 opacity-30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 opacity-40 rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 font-sans tracking-wide">
            Preparing Your Story...
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium opacity-90">
            The battle is loading, please wait.
          </p>
          <div className="w-64 mx-auto bg-gray-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-red-500 to-red-700 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400">{progress}%</p>
        </div>

        <div className="flex justify-center">
          <Link href="/">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-red-500/50 hover:shadow-2xl border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Back to Library
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>

        <div className="flex justify-center space-x-8 opacity-60 mt-8">
          <div className="w-2 h-2 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-red-500 to-red-700 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-red-600 to-red-800 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      <div className="absolute top-10 left-10 opacity-10">
        <Sparkles className="text-red-500 text-8xl transform -rotate-12" />
      </div>

      <div className="absolute bottom-10 right-10 opacity-10">
        <Loader2 className="text-red-600 text-6xl transform rotate-12 animate-spin" />
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}