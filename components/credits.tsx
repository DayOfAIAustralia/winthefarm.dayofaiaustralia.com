export function Credits() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="mb-12">
          {/* <h2 className="text-3xl font-bold mb-6">Our Team</h2> */}
          <p className="mb-4">
            Day of AI Australia&apos;s &quot;Media Literacy and AI&quot; lesson
            and Win the Farm wouldn&apos;t be possible without the hard work and
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
            <h3 className="text-2xl font-bold mb-4">Win the Farm Developers</h3>
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
                <span className="font-bold">Hamish Cox</span> - Software
                Developer (Capture the Narrative), UNSW Sydney
              </p>
              <p>
                <span className="font-bold">Dr Hammond Pearce</span> - Lead organiser (Capture the Narrative), UNSW Sydney
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Media Literacy Lesson</h3>
            <p>
              <span className="font-bold">Jess Xu</span> - Program Coordinator,
              Day of AI Australia
            </p>
          </div>

          <div className="mb-8">
            <p className="mb-4">
              The Australian Media Literacy Alliance and ABC Education supported
              the development of the learning materials
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Annabel Astbury</span> - ABC
                Education
              </p>
              <p>
                <span className="font-bold">Michael Dezuanni</span> - Australian
                Media Literacy Alliance
              </p>
              <p>
                <span className="font-bold">Aimee Hourigan</span> - ABC
                Education
              </p>
              <p>
                <span className="font-bold">Tanya Notley</span> - Australian
                Media Literacy Alliance
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Illustrations for Win the Farm
            </h3>
            <p>
              <span className="font-bold">Olivia Mack</span>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">With Special Thanks To</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p>Dr Debi Ashenden</p>
              <p>Jetha Chan</p>
              <p>Roly Clifton-Bligh</p>
              <p>Simon Freedman</p>
              <p>Dr Sue Keay</p>
              <p>Tracey Lee-Joe</p>
              <p>Maria Kameko</p>
              <p>Dr Rahat Masood</p>
              <p>Jason Sandler</p>
              <p>Wayne Sun</p>
              <p>Gladine Tan</p>
              <p>Oscar Wahltinez</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p>
              And perhaps most importantly, a very special thanks to all the teachers and students who helped
              shape &quot;Media Literacy and AI&quot; and Win the Farm - without
              your input this would not have been possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
