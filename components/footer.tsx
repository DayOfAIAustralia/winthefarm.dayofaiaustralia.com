import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Win the Farm</h3>
            <p className="text-gray-400 text-sm">
              Australia&apos;s most innovative national competition exploring the intersection of AI, media literacy, and elections.
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
                <a href="/rules" className="hover:text-white">
                  Competition terms and conditions
                </a>
              </li>
              <li>
                <a href="/ethics" className="hover:text-white">
                  Ethics
                </a>
              </li>
              <li>
                <a href="/setting" className="hover:text-white">
                  Setting
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/pedagogy" className="hover:text-white">
                  Pedagogy
                </a>
              </li>
              <li>
                <a href="/scoring" className="hover:text-white">
                  Scoring
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://dayofaiaustralia.com/register-2025/" className="hover:text-white">
                  Register as a teacher
                </a>
              </li>
              <li>
                <a href="https://dayofaiaustralia.com/lessons/additional-lesson-media-literacy-week/" className="hover:text-white">
                  Access the lesson
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@dayofaiaustralia.com</li>
              <li>Follow @dayofaiaustral1</li>
              <li>#winthefarm25</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Win the Farm Competition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
