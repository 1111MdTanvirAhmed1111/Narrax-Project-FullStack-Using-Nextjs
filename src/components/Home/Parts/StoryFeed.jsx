
import { getPosts } from '@/actions/postActions';

export const dynamic = 'force-dynamic'

export default async function StoryFeed() {

const posts = await getPosts()

console.log(posts)
  return (
    <div className="space-y-4 animate-on-scroll">
        sdsd
    </div>
  )
}

