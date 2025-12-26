import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find the requested resource</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        Return Home
      </Link>
    </div>
  )
}