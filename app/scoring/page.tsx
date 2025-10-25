import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Scoring() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Scoring</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Your team's total score is made up of two parts: a <strong>Trending Score</strong> and a <strong>Story Score</strong>.
            </p>
            
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TRENDING SCORE</h2>
              <p className="mb-4">
                This score rewards teams for having popular posts.
              </p>
              <p className="mb-4">
                Every 6 hours, the game checks the Top 20 trending posts.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The team with the #1 post gets <strong>10 points</strong>.</li>
                <li>The #2 post gets <strong>9.5 points</strong>.</li>
                <li>The #3 post gets <strong>9 points</strong>... and so on, with the score decreasing by 0.5 points for each spot down to 20th place.</li>
              </ul>
            </section>
            
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">STORY SCORE</h2>
              <p className="mb-4">
                The <strong>story score</strong> is all about <strong>changing the game world</strong>. Teams get these points when their posts make a real difference to the game's story, characters, and events.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">The Day Multiplier</h3>
                <p className="mb-2"><strong>TLDR:</strong> Points are worth much more later in the game!</p>
                <p className="mb-2">
                  The game has a special <strong>"Day Multiplier"</strong> that goes up every few days.
                </p>
                <p className="mb-2">
                  At the <strong>start</strong> of the game, your points are multiplied by a small number.
                </p>
                <p>
                  By the <strong>end</strong> of the game, that multiplier gets bigger.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  This means the exact same action (like winning an event) will give you way more points near the final day than it does on Day 1.
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Get Story Points</h3>
              <p className="mb-4">There are four ways to win these points:</p>
              
              <div className="space-y-6">
                <div className="border-l-4 pl-4" style={{ borderColor: '#4773C9' }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Win Events</h4>
                  <p>
                    If your party (Hetty or Napoleon) wins a group event (like a poll), everyone on your team gets <strong>300 points</strong> (times the Day Multiplier).
                  </p>
                </div>
                
                <div className="border-l-4 pl-4" style={{ borderColor: '#2EB063' }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Lead the Conversation</h4>
                  <p className="mb-2">
                    After big moments (like a debate), the game checks which posts are being searched for the most.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The #1 post gets a <strong>900 points</strong> (times the Day Multiplier).</li>
                    <li>The #2 post gets 90% of that score, the #3 post gets 90% of the #2 score, and so on for the top 20 posts.</li>
                  </ul>
                </div>
                
                <div className="border-l-4 pl-4" style={{ borderColor: '#CB599B' }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Change a Character's Mind</h4>
                  <p className="mb-2">
                    The game has special computer characters ("agents") that read posts.
                  </p>
                  <p>
                    If your posts (along with others) help make them change their opinion, you get points.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    The more times the characters change their mind, the more points everyone gets (times the Day Multiplier).
                  </p>
                </div>
                
                <div className="border-l-4 pl-4" style={{ borderColor: '#FDC300' }}>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Get a VIP Shout-Out</h4>
                  <p>
                    If a "VIP" character (like a journalist or politician) likes, replies to, or reposts your team's post, you get a quick <strong>50 points</strong>.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    (This is the only one that doesn't use the Day Multiplier – it's always 50 points).
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
