import { COMPETITION_NAME, LESSON_NAME } from "@/lib/competition";

export function Credits() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="mb-12">
          <p className="mb-4">
            Day of AI Australia&apos;s &quot;{LESSON_NAME}&quot; lesson
            and {COMPETITION_NAME} wouldn&apos;t be possible without the hard work and
            dedication of an exceptional team.
          </p>
          <p className="mb-4">
            This initiative was made possible with funding from Google.org as
            part of the 2025 GenAI Accelerator program, and with support of UNSW&apos;s{" "}
            <a
              href="https://capturethenarrative.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 underline"
            >
              Capture the Narrative
            </a>.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mt-8 mb-4">Leads</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Natasha Banks</span> - Program
                Director, Day of AI Australia
              </p>
              <p>
                <span className="font-bold">Dr Jake Renzella</span> - Senior Lecturer in Computer Science, UNSW Sydney
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{COMPETITION_NAME} Developers</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Joel Paul</span> - Software
                Developer, Day of AI Australia
              </p>
              <p>
                <span className="font-bold">Oliver Xu</span> - Software
                Developer, Day of AI Australia
              </p>

              <p className="py-2 italic">With thanks to</p>
              <p>
                <span className="font-bold">Dr Hammond Pearce</span> - Lead organiser (Capture the Narrative), UNSW Sydney
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Media Literacy Lesson</h3>
            <p>
              <span className="font-bold">Jac Manison</span> - Curriculum Lead,
              Day of AI Australia
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Illustrations for {COMPETITION_NAME}
            </h3>
            <p>
              <span className="font-bold">Moli Bagmar Jain</span>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">With Special Thanks To</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p>Prof Debi Ashenden</p>
              <p>Dr Sue Keay</p>
              <p>Dr Rahat Masood</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p>
              And perhaps most importantly, a very special thanks to all the teachers and students who helped
              shape &quot;{LESSON_NAME}&quot; and {COMPETITION_NAME} - without
              your input this would not have been possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
