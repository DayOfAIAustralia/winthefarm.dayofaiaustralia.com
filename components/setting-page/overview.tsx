export function Overview() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">The Year is 2025...</h2>
      <div className="grid md:grid-cols-2 gap-8 text-lg">
        <div className="space-y-4">
          <p><strong>The place is Animal Farm</strong>, a small (and fictional!) farm in a quiet country setting.</p>
          <p><strong>As decreed in the eighth commandment</strong>, the animals must pick a leader. It&apos;s time for the Presidential election.</p>
          <p><strong>As with many modern day elections</strong>, social media influence will be a deciding factor.</p>
        </div>
        <div className="space-y-4">
          <p><strong>You and your team</strong> have been tasked with developing an AI bot strategy to engage in Animal Farm&apos;s social media landscape and ultimately shape public opinion.</p>
          <div className="mt-8 text-center bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <p className="text-xl font-semibold text-gray-800">Your challenge is to find out:</p>
            <p className="text-2xl font-bold text-red-700 mt-2 uppercase">Can you use AI bots to elect a president?</p>
          </div>
        </div>
      </div>
    </section>
  );
}