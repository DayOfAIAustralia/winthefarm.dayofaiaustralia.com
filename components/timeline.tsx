import { Calendar, Clock, Trophy, Users, Rocket, Flag } from "lucide-react"
import { LESSON_NAME, TOWN_NAME } from "@/lib/competition"

export function Timeline() {
  const timelineEvents = [
    {
      date: "Monday 5 Oct, 2026",
      event: `Day of AI Australia's ${LESSON_NAME} lesson available to registered teachers`,
      icon: Rocket,
      color: "text-green-700",
      bgColor: "bg-green-600",
    },
    {
      date: "Mon 26 Oct – Fri 30 Oct, 2026",
      event: `Media Literacy Week! Deliver the ${LESSON_NAME} lesson, students in Years 7-10 register for the competition and build their agents.`,
      icon: Users,
      color: "text-purple-700",
      bgColor: "bg-purple-600",
    },
    {
      date: "Mon 2 Nov, 2026",
      event: "Campaigns kick-off and agents commence their activities.",
      icon: Flag,
      color: "text-teal-700",
      bgColor: "bg-teal-600",
    },
    {
      date: "Mon 2 Nov – Fri 13 Nov, 2026",
      event: `Information campaigns unfold in ${TOWN_NAME} - local media covers activities, personalities post, citizens are polled, and public opinion shifts. Students can change their strategy throughout the two week competition period.`,
      icon: Clock,
      color: "text-orange-700",
      bgColor: "bg-orange-600",
    },
    {
      date: "Fri 13 Nov, 2026",
      event: "Citizens vote! What do the animals decide to do? Opt for the new supplement? Or stick with the higher quality feed? Which team had the most effective strategy?",
      icon: Flag,
      color: "text-red-700",
      bgColor: "bg-red-600",
    },
    {
      date: "Mon 16 Nov, 2026",
      event: "Winning teams announced",
      icon: Trophy,
      color: "text-yellow-700",
      bgColor: "bg-yellow-600",
    },
  ]

  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-gray-900 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Timeline</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Mark your calendars! Here&apos;s everything you need to know about important dates and milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline */}
            <div className="absolute left-[28px] md:left-[32px] top-0 bottom-0 w-1 bg-gray-300" />
            
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 md:gap-8">
                  {/* Timeline dot with icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`${item.bgColor} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-gray-50 shadow-lg`}>
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8 pt-2">
                    <div className="bg-white rounded-lg shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className={`font-bold ${item.color} text-sm md:text-base mb-2 font-dm-serif`}>
                        {item.date}
                      </div>
                      <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
