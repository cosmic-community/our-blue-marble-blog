export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center text-gray-600">
          <p className="text-sm">
            © {currentYear} Our Blue Marble. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}