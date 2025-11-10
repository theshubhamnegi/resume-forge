"use client"
import ResumeComponent from "@/components/Resume";

export default function Home() {

  return (
    <div className="relative">
      <button onClick={() => window.print()} className="no-print absolute bottom-4 right-4 z-10 bg-white px-4 py-2 border border-black rounded-md hover:bg-gray-100 text-black">
        Print PDF
      </button>
      <ResumeComponent />
    </div>
  );
}
