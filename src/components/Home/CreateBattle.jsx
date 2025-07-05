import React from 'react'
import { Plus } from 'lucide-react'
import GradientCard from './GradientCard.jsx'
import CreateDialog from './CreateStory/CreateDialog';
import { Input } from '@/components/ui/input';

const categoryTags = [
  { emoji: '😱', label: 'Horror' },
  { emoji: '😂', label: 'Funny' },
  { emoji: '😭', label: 'Sad' }
]

const CategoryTag = ({ category }) => (
  <button className="px-4 py-2 bg-red-950/50 border border-red-500/30 rounded-full text-red-300 hover:bg-red-500/20 hover:scale-105 transition-all duration-300">
    {category.emoji} {category.label}
  </button>
)

export default function CreateBattle({ storyContent, setStoryContent }) {
  return (
    <GradientCard className="animate-on-scroll">
      <div className="flex items-center space-x-3 mb-4">
        <Plus className="text-red-400 text-2xl w-8 h-8" />
        <h2 className="text-xl font-bold text-red-300">Create New Battle</h2>
      </div>
      <CreateDialog>
        <Input type="text" 
           placeholder="Write your story here... (max 500 words)"
        value={storyContent}
        onChange={(e) => setStoryContent(e.target.value)}
         />

      </CreateDialog>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          {categoryTags.map((category, index) => (
            <CategoryTag key={index} category={category} />
          ))}
        </div>
        <button className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-2 rounded-full text-white font-semibold hover:from-red-500 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/30">
          Start Battle
        </button>
      </div>
    </GradientCard>
  )
}