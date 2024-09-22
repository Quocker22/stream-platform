"use client";

import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

import { useGetMeetList } from "@/hooks/useGetMeetList";
import { MeetModal } from "@/components/page/meet-modal";
import { MeetCard } from "@/components/page/meet/MeetCard";
import { useGetRoomDetail } from "@/hooks/useGetRoomDetail";

export default function CreateMeet() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: meetList, refetch } = useGetMeetList();
  const { data: roomDetail } = useGetRoomDetail(meetList?.entity[0]._id);

  const handleSave = () => {
    refetch();
  };

  const handleJoinMeet = (meetId: string) => {
    console.log(`Tham gia lại phòng học có ID: ${meetId}`);
    // router.push(`/profile/meet/${meetId}`);
  };

  return (
    <div className="max-w-full min-h-screen bg-gray-100 p-8">
      {meetList?.entity && meetList.entity.length > 0 ? (
        <div className="max-w-full mx-auto">
          <MeetCard roomDetail={roomDetail} />
        </div>
      ) : (
        <div className="text-center py-12">
          <MeetModal
            isOpen={isOpen}
            onOpenChange={(isOpen: boolean) => {
              setIsOpen(isOpen);
            }}
            onSave={handleSave}
          >
            <IoMdAddCircleOutline />
            Thêm phòng học
          </MeetModal>
        </div>
      )}
    </div>
  );
}
