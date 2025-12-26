import { getGlobals } from '@/lib/api'
import Link from 'next/link'

export default async function Header() {
  const globals = await getGlobals()
  
  const siteTitle = globals?.metadata?.site_title || 'Our Blue Marble'
  const siteTag = globals?.metadata?.site_tag || 'Thoughts and images from our amazing planet.'
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link href="/" className="block">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {siteTitle}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {siteTag}
          </p>
        </Link>
      </div>
    </header>
  )
}