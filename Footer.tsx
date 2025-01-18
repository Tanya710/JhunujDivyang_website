import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Youtube, Linkedin, Instagram, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-emerald-700 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-row justify-between">
        {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Helpus.co</span>
            </div>
            <p className="text-gray-200">
              Zunj Divyang Foundation is an NGO to uplift handicapped individuals. 
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

            {/* About us */}
            <div className='md:mr-11'> 
              <h3 className="text-xl font-semibold mb-4">About us</h3>
              <ul className="space-y-2">
                <li><Link href="/who-we-are" className="hover:text-gray-300">Who we are?</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
                <li><Link href="/help" className="hover:text-gray-300">Help</Link></li>
              </ul>
            </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-600">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p>&copy; {currentYear} Zunj Divyang Foundation.</p>
          </div>
          <div className="flex space-x-6">
            <Phone />
            <Link href="/#" className="hover:text-gray-300">9011452216</Link>
            <Link href="/#" className="hover:text-gray-300">8788535200</Link>

            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer