import Link from 'next/link'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  const hero = post.metadata?.hero
  
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {hero && (
        <Link href={`/posts/${post.slug}`}>
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={`${hero.imgix_url}?w=800&h=512&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}
      
      <div className="p-6">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <span
                key={category.id}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
        
        {/* Title */}
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        {/* Teaser */}
        {post.metadata?.teaser && (
          <div
            className="text-gray-600 text-sm mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.metadata.teaser }}
          />
        )}
        
        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          {author && (
            <div className="flex items-center gap-2">
              {author.metadata?.image && (
                <img
                  src={`${author.metadata.image.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="font-medium">{author.title}</span>
            </div>
          )}
          
          {post.metadata?.published_date && (
            <time className="text-xs">
              {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          )}
        </div>
      </div>
    </article>
  )
}