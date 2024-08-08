import { TableContent } from "@/components/tables";
import { VideoModal } from "@/components/video-modal";
import React from "react";

export default function CreateVideo() {
  return (
    <section className="bg-gray-50 py-3 sm:py-5">
      <div className="px-4 mx-auto lg:px-6">
        <div className="relative p-2 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="py-5">
            <TableContent />
          </div>
        </div>
      </div>
    </section>
  );
}
