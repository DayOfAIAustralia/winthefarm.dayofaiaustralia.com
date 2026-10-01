import { COMPETITION_NAME, LESSON_NAME } from "@/lib/competition";
import { Card } from "@/components/ui/card";
import { PageHeading, pageLayoutClassName } from "@/components/page-heading";

type CreditPersonProps = {
  name: string;
  role?: string;
};

function CreditPerson({ name, role }: CreditPersonProps) {
  return (
    <li className="min-w-0">
      <p className="text-lg font-semibold leading-7 text-gray-900">{name}</p>
      {role && <p className="mt-1 text-base leading-6 text-gray-600">{role}</p>}
    </li>
  );
}

export function Credits() {
  return (
    <div className={pageLayoutClassName}>
      <PageHeading description={
        <>
            Day of AI Australia&apos;s &quot;{LESSON_NAME}&quot; lesson
            and {COMPETITION_NAME} wouldn&apos;t be possible without the hard work and
            dedication of an exceptional team.
        </>
      }>
        About Us
      </PageHeading>
      <div className="max-w-3xl space-y-5">
          <p className="text-base leading-7 text-gray-600">
            The new Health literacy and AI lesson and {COMPETITION_NAME} game
            are a collaboration with UNSW School of Computer Science and Engineering,
            Sydney Health Literacy Lab from University of Sydney, and the Digital Lies
            &amp; Cyber Literacy Foundation.
          </p>
          <p className="text-base leading-7 text-gray-600">
            This initiative was supported as part of the NHMRC Synergy grant
            &apos;NextGen: AI Health Literacy&apos; and was made possible with support from
            Google.org as part of the GenAI Accelerator program.
          </p>
      </div>

      <Card role="region" aria-labelledby="credits-leads" className="mt-12 gap-0 border-0 rounded-xl bg-[#FCF8EB] p-6 shadow-none sm:mt-16 sm:p-8">
        <h2 id="credits-leads" className="mb-6 text-3xl leading-tight text-gray-900">
          Leads
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 md:gap-12">
          <CreditPerson name="Natasha Banks" role="Program Director, Day of AI Australia" />
          <CreditPerson name="Dr Jake Renzella" role="Senior Lecturer in Computer Science, UNSW Sydney" />
        </ul>
      </Card>

      <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2 md:gap-y-12">
        <section aria-labelledby="credits-developers" className="border-t border-gray-200 pt-6">
          <h2 id="credits-developers" className="mb-6 text-2xl leading-snug text-gray-900">
            Software Development
          </h2>
          <ul className="space-y-5">
            <CreditPerson name="Joel Paul" role="Software Developer, Day of AI Australia" />
            <CreditPerson name="Oliver Xu" role="Software Developer, Day of AI Australia" />
            <CreditPerson name="Dr Hammond Pearce" role="Lead organiser and developer (Capture the Narrative), UNSW Sydney" />
          </ul>
        </section>

        <section aria-labelledby="credits-lesson" className="border-t border-gray-200 pt-6">
          <h2 id="credits-lesson" className="mb-6 text-2xl leading-snug text-gray-900">
            Health Literacy Lesson
          </h2>
          <ul className="space-y-5">
            <CreditPerson name="Jac Manison" role="Curriculum Lead, Day of AI Australia" />
            <CreditPerson name="Natasha Banks" role="Program Director, Day of AI Australia" />
          </ul>
        </section>

        <section aria-labelledby="credits-illustrations" className="border-t border-gray-200 pt-6">
          <h2 id="credits-illustrations" className="mb-6 text-2xl leading-snug text-gray-900">
            Illustrations for {COMPETITION_NAME}
          </h2>
          <ul>
            <CreditPerson name="Olivia Mack" />
          </ul>
        </section>

        <section aria-labelledby="credits-health-lab" className="border-t border-gray-200 pt-6">
          <h2 id="credits-health-lab" className="mb-6 text-2xl leading-snug text-gray-900">
            Health Literacy Experts and Research Team
          </h2>
          <ul className="space-y-5">
            <CreditPerson name="Dr Julie Ayre" role="Research Fellow, Sydney Health Literacy Lab" />
            <CreditPerson name="Mariah Issa" role="Research Assistant, Sydney Health Literacy Lab" />
            <CreditPerson name="Dr Kirsten McCaffery" role="Professor of Public Health and Director of Sydney Health Literacy Lab" />
            <CreditPerson name="Dr Melody Taba" role="Research Fellow, Sydney Health Literacy Lab" />
          </ul>
        </section>

        <section aria-labelledby="credits-writer" className="border-t border-gray-200 pt-6">
          <h2 id="credits-writer" className="mb-6 text-2xl leading-snug text-gray-900">
            Writer
          </h2>
          <ul>
            <CreditPerson name="Hannah Samuel" />
          </ul>
        </section>
      </div>

      <section aria-labelledby="credits-special-thanks" className="mt-12 border-y border-gray-200 py-8 sm:mt-14">
        <h2 id="credits-special-thanks" className="mb-6 text-2xl leading-snug text-gray-900">
          With Special Thanks To
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-6">
          <CreditPerson name="Prof Debi Ashenden" />
          <CreditPerson name="Dr Sue Keay" />
          <CreditPerson name="Dr Rahat Masood" />
        </ul>
      </section>

      <div className="mx-auto max-w-3xl pt-12 text-center sm:pt-14">
        <p className="font-dm-serif text-xl leading-8 text-gray-700 sm:text-2xl sm:leading-9">
          And most importantly, a very special thanks to all the teachers and students who helped
          shape the lesson and game - without
          your input this would not have been possible!
        </p>
      </div>
    </div>
  );
}
