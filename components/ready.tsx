import { Button } from "./ui/button";

export function ReadySection() {
  return (
    <div className="text-center bg-white p-8 rounded-lg md:px-80">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to join the fight against misinformation and disinformation?
      </h3>
      <p className="text-lg  mb-6 max-w-3xl mx-auto">
        Win the Farm provides interactive insights into how social
        media platforms can be manipulated, raising awareness of the potential
        for abuse and the importance of AI literacy.
      </p>
      <p className="text-lg  mb-6 max-w-3xl mx-auto">
        The top teams in each category (Years 7-8 and Year 9-10) will each take
        home $1,500 in prizes. The competition is open to all Australian students in
        Years 7-10 who have completed the Day of AI Australia &quot;Media Literacy and AI&quot;
        lesson with their registered teacher.
      </p>
      <a
        href="https://dayofaiaustralia.com/register-2025/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="bg-[#FDC300] hover:bg-yellow-500 text-black text-lg px-8 py-3 rounded-none"
        >
          Register as a teacher now
        </Button>
      </a>
    </div>
  );
}
