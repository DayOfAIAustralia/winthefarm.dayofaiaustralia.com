import Link from "next/link";
import { COMPETITION_NAME, LESSON_URL, REGISTER_URL } from "@/lib/competition";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{COMPETITION_NAME}</h3>
            <p className="text-gray-400 text-sm">
              Australia&apos;s most innovative national competition exploring the intersection of AI, media literacy, and health literacy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Competition</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/#how-to-play" className="hover:text-white">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/#timeline" className="hover:text-white">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-white">
                  Competition terms and conditions
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="hover:text-white">
                  Ethics
                </Link>
              </li>
              <li>
                <Link href="/setting" className="hover:text-white">
                  Setting
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pedagogy" className="hover:text-white">
                  Pedagogy
                </Link>
              </li>
              <li>
                <Link href="/scoring" className="hover:text-white">
                  Scoring
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={REGISTER_URL} className="hover:text-white">
                  Register as a teacher
                </a>
              </li>
              <li>
                <a href={LESSON_URL} className="hover:text-white">
                  Access the lesson
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@dayofaiaustralia.com" className="hover:text-white">
                  hello@dayofaiaustralia.com
                </a>
              </li>
              <li>Follow @dayofaiaustral1</li>
              {/* TODO: add the 2026 competition hashtag once confirmed. */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 {COMPETITION_NAME} Competition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
