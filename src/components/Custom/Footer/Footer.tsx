import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2 text-xl font-semibold">
            <span className="text-teal-400">M Saffar Creation</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/">
              <a className="hover:text-teal-400">Home</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-teal-400">About</a>
            </Link>
            <Link href="/projects">
              <a className="hover:text-teal-400">Projects</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-teal-400">Contact</a>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; M Saffar Creation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
