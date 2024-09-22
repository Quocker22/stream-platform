"use client";

import React from "react";

import { useGetMeetList } from "@/hooks/useGetMeetList";
import { MeetCard } from "@/components/page/meet/MeetCard";
import { useGetRoomDetail } from "@/hooks/useGetRoomDetail";

export default function RoomPage() {
  const { data: meetList } = useGetMeetList();
  const { data: roomDetail } = useGetRoomDetail(meetList?.entity[0]._id);

  return (
    <div className="max-w-full bg-gray-100 p-8 h-full">
      <MeetCard roomDetail={roomDetail} />
    </div>
  );
}
