import React from 'react'

export default function GradientCard({ children, className = "" }) {
  return (
    <div className={`bg-gradient-to-b from-red-950/80 to-black/80 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 shadow-2xl shadow-red-500/10 hover:scale-105 transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}