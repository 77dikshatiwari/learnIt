import React, {useState} from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-lg font-semibold">
          <a href="/">MyLogo</a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-6 mt-4 lg:mt-0">
            <li><a href="/" className="block text-white hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="block text-white hover:text-gray-400">About</a></li>
            <li><a href="/services" className="block text-white hover:text-gray-400">Services</a></li>
            <li><a href="/contact" className="block text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
