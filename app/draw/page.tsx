"use client";

import { Tldraw } from "tldraw";
import React from "react";
import "@/styles/draw.css";
import "tldraw/tldraw.css";

export default function CreateCourse() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full h-[800px]">
        <Tldraw />
      </div>
    </div>
  );
}
