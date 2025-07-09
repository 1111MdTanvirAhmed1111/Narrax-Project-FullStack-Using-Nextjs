
function GradientHoverCard({ children }) {
  return (
        <div className="bg-red-950/50 rounded-xl p-4 border border-red-500/30 hover:scale-105 transition-all duration-300">
            {children}
        </div>
  )
}

export default GradientHoverCard