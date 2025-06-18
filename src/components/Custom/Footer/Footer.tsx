"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronUp,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* Right-aligned V-shape lines using absolute positioned divs */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          className="absolute right-0 top-0 h-full w-full"
        >
          <path
            d="M0,400 L200,200 L400,400"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,300 L200,100 L400,300"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,200 L200,0 L400,200"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold">M Saffar Creation</h2>
            <p className="text-sm text-gray-400 mt-4 max-w-sm">
              Creative graphics designer specializing in brand identity, digital
              art, and visual storytelling. Crafting compelling designs that
              connect and inspire.
            </p>

            {/* Location */}
            <p className="flex items-center text-sm text-gray-400 mt-4 max-w-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Jashore, Bangladesh
            </p>

            {/* Email */}
            <p className="flex items-center text-sm text-gray-400 mt-2 max-w-sm">
              <Mail className="w-4 h-4 mr-2" />
              saffarulislam@gmail.com
            </p>

            {/* Phone */}
            <p className="flex items-center text-sm text-gray-400 max-w-sm">
              <Phone className="w-4 h-4 mr-2" />
              +880 1953-735955
            </p>
            <div className="flex space-x-4 mt-6 text-white/80 text-xl">
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook />
              </a>
            </div>

            <div className="mt-6">
              <a
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
              >
                <ChevronUp className="w-4 h-4 mr-2" />
                Back to Top
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white">
                  Contact Me
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 text-xs text-gray-500 border-t border-white/10 pt-6">
          &copy; {new Date().getFullYear()} MS CREATION
          <br />
          This site developed by{" "}
          <a
            href="https://www.linkedin.com/in/touhidur-zaman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 underline"
          >
            touhidcodes
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
