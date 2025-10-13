import { Bot, Trophy, Users, BookOpen } from "lucide-react";

export function TheChallengeSection() {
  return (
    <div className="p-8 bg-gradient-to-r from-red-50 to-blue-50">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h3>
        <p className="text-lg max-w-2xl text-balance mx-auto leading-relaxed">
          Through a controlled, artificial social media landscape, Years 7-10 students will
          be charged with the manipulation of social media narratives by
          developing and deploying bots that amplify and suppress target
          messages on the fictional Barn Wall social media platform.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="text-center">
          <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <p className="font-bold text-gray-900 ">Teach the Lesson</p>
          <p className=" text-sm">During Media Literacy Week (27-31 Oct)</p>
        </div>
        <div className="text-center">
          <Users className="w-12 h-12 text-red-600 mx-auto mb-3" />
          <p className="font-bold text-gray-900 ">Students Team Up</p>
          <p className=" text-sm">Students form teams in your classroom, or play solo</p>
        </div>
        <div className="text-center">
          <Bot className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <p className="font-bold text-gray-900 ">Deploy Bots</p>
          <p className=" text-sm">
            Students create up to 3 AI bots to influence the Animal Farm citizens
          </p>
        </div>
        <div className="text-center">
          <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
          <p className="font-bold text-gray-900 ">Win Prizes</p>
          <p className=" text-sm">Compete for prizes</p>
        </div>
      </div>
    </div>
  );
}
