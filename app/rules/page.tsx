import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Gavel, Calendar, Shield } from "lucide-react";

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Gavel className="w-10 h-10 text-gray-800" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Competition Rules
            </h1>
          </div>

          {/* COMING SOON */}
          <div className="space-y-8">
            <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Coming Soon
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Full competition terms and conditions will be published on{" "}
                    <strong>Monday 20 October</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Student Privacy Guaranteed
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Please note that no student Personally Identifiable
                    Information (PII) will be collected by the promoter during
                    the Win the Farm competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}