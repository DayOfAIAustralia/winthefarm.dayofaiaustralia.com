import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Trophy, Users, Rocket, Flag } from "lucide-react"

export function Timeline() {
  const timelineEvents = [
    {
      date: "Monday 13 Oct, 2025",
      event: "Day of AI Australia's Media Literacy and AI lesson available to registered teachers",
      icon: Rocket,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      date: "Fri 27 Sep – Fri 31 Oct, 2025",
      event: "Media Literacy Week! Deliver the Media Literacy and AI lesson, students register for the competition and build their bots.",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      date: "Mon 3 Nov, 2025",
      event: "Animal Farm election campaigns kick-off and bots commence their activities.",
      icon: Flag,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      date: "Mon 3 – Fri 14 Nov, 2025",
      event: "Election campaign unfolds in Animal Farm world - media covers the race, citizens are polled, and public opinion shifts. Students can change their strategy throughout the two week competition period.",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      date: "Fri 14 Nov, 2025",
      event: "Election held in Animal Farm world. Who has won? Which team had the most effective strategy?",
      icon: Flag,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      date: "Mon 17 Nov, 2025",
      event: "Winning team announced",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
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
          <Card className="shadow-lg rounded-none">
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="font-bold font-dm-serif text-lg w-2/5 md:w-1/3">Date</TableHead>
                    <TableHead className="font-bold font-dm-serif text-lg">Event</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timelineEvents.map((item, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                    >
                      <TableCell className="py-6 align-top">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${item.bgColor} shrink-0`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </div>
                          <div className="min-w-[140px]">
                            <div className="font-semibold text-gray-900 text-base">{item.date}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6">
                        <div className="text-base text-gray-800">{item.event}</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
