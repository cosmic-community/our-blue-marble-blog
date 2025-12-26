// app/posts/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Image */}
      {post.metadata?.hero && (
        <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
          <img
            src={`${post.metadata.hero.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          {author && (
            <div className="flex items-center gap-2">
              {author.metadata?.image && (
                <img
                  src={`${author.metadata.image.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span className="font-medium">{author.title}</span>
            </div>
          )}
          
          {post.metadata?.published_date && (
            <time className="text-sm">
              {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </div>
        
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <span
                key={category.id}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
      </header>
      
      {/* Post Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.metadata?.content || '' }}
      />
      
      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>
      </div>
    </article>
  )
}