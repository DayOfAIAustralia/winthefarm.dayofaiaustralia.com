import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TeacherDashboardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teacher Dashboard Coming Soon
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re working on bringing the Win the Farm experience soon!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
