import { getAllPosts, getAllCategories } from '@/lib/api'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'

export default async function Home() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Explore Our Planet
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover articles about nature, climate, environment, and ecology
        </p>
      </div>
      
      <CategoryFilter categories={categories} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found</p>
        </div>
      )}
    </div>
  )
}