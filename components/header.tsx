"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <Image
              src="/logos/dayofai.webp"
              alt="Day of AI Australia"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-900 font-dm-serif">
              Win the Farm
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 font-sans uppercase">
            <Link href="/#how-to-play" className="font-bold hover:text-red-600 ">
              How to play
            </Link>
            <Link href="/#timeline" className="font-bold hover:text-red-600 ">
              Timeline
            </Link>
            <Link href="/setting" className="font-bold hover:text-red-600 ">
              Setting
            </Link>
            <Link href="/rules" className="font-bold hover:text-red-600 ">
              Rules
            </Link>
            <Link href="/ethics" className="font-bold hover:text-red-600 ">
              Ethics
            </Link>
            {/* Hiding '/about' */}
            {/* <Link href="/about" className="font-bold hover:text-red-600 ">
              About us
            </Link> */}
            <a
              href="https://dayofaiaustralia.com/register-2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-bold text-black rounded-none bg-[#FDC300] hover:bg-yellow-500">
                REGISTER NOW
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4 font-sans uppercase">
              <Link
                href="/#how-to-play"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to play
              </Link>
              <Link
                href="/#timeline"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Timeline
              </Link>
              <Link
                href="/setting"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Setting
              </Link>
              <Link
                href="/rules"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rules
              </Link>
              <Link 
                href="/ethics" 
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ethics
              </Link>
              {/* Hiding '/about' */}
              {/* <Link
                href="/about"
                className="font-bold hover:text-red-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link> */}
              <a
                href="https://dayofaiaustralia.com/register-2025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="font-bold text-black rounded-none bg-[#FDC300] hover:bg-yellow-500 w-full">
                  REGISTER NOW
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
