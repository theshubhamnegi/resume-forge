"use client"
import ResumeComponent from "@/components/Resume";
import { useRef } from "react";

export default function Home() {
  const pdfRef = useRef<HTMLDivElement | null>(null)

  return (
    <ResumeComponent />
  );
}
