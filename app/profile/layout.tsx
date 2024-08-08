'use client'

import { Sitebar } from "@/components/sitebar";
import { useAuth } from "@/redux/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if(!currentUser?.id)
  //     router.push('/')
  // }, [currentUser?.id])

  return (
    <section>
      <div className="bg-gray-50 flex flex-col lg:flex-row items-center lg:items-start">
        <Sitebar />
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
