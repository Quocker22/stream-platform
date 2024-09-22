"use client";

import { Sitebar } from "@/components/page/sitebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-gray-50 flex flex-col lg:flex-row items-center lg:items-start">
        <Sitebar />
        <div className="flex-grow min-h-screen bg-gray-50">{children}</div>
      </div>
    </section>
  );
}
