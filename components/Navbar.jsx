// Navbar.jsx
"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = ["Home", "About", "SKills", "Projects", "Contact"]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          SiyamDev
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <a href="#contact">Get Started</a>
          </Button>
          
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-lg shadow-inner"
        >
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium text-gray-700">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">
                  {item}
                </a>
              </motion.li>
            ))}
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition">
              Get Started
            </Button>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
