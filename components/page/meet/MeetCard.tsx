/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import { RoomModel } from "@/models/Meet";
import useSignalRConnection from "@/components/utils/Signalr";

interface MeetCardProps {
  roomDetail?: RoomModel;
}

export function MeetCard({ roomDetail }: MeetCardProps) {
  const router = useRouter();

  const contextValue = useSignalRConnection("roomhub", {
    roomId: roomDetail?.room?._id,
  });

  const handleJoinMeet = (meetId: string) => {
    router.push(`/room/${meetId}`);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex p-8 flex-col items-center justify-center">
        <div className="w-2/3 flex flex-col items-center justify-center">
          <div className="w-full mb-6 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold mb-2">
              Hướng dẫn sử dụng OBS để stream:
            </h3>
            <ol className="list-decimal list-inside">
              <li>Mở phần mềm OBS Studio.</li>
              <li>
                Trong OBS, chọn "Cài đặt" (hoặc "Settings") từ menu chính.
              </li>
              <li>Chọn tab "Stream" trong cửa sổ cài đặt.</li>
              <li>Ở mục "Dịch vụ" (hoặc "Service"), chọn "Custom".</li>
              <li>Sao chép Stream URL bên dưới và dán vào ô "Server".</li>
              <li>Sao chép Stream Key bên dưới và dán vào ô "Stream Key".</li>
              <li>Nhấn "OK" để lưu cài đặt.</li>
              <li>Nhấn nút "Bắt đầu Stream" trong OBS để bắt đầu phát sóng.</li>
              <li>
                Quay lại trang web này và nhấn nút "Tham gia ngay" để vào phòng
                stream.
              </li>
            </ol>
          </div>

          <div className="w-full mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Stream URL
            </span>
            <div className="flex">
              <input
                readOnly
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                value={roomDetail?.streamUrl}
              />
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() =>
                  navigator.clipboard.writeText(roomDetail?.streamUrl || "")
                }
              >
                Copy
              </button>
            </div>
          </div>

          <div className="w-full mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Stream Key
            </span>
            <div className="flex">
              <input
                readOnly
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                value={roomDetail?.streamKey}
              />
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() =>
                  navigator.clipboard.writeText(roomDetail?.streamKey || "")
                }
              >
                Copy
              </button>
            </div>
          </div>
          <Button
            className="mb-4"
            color="primary"
            onClick={() => handleJoinMeet(roomDetail?.room?._id || "")}
          >
            Tham gia ngay
          </Button>
        </div>
      </main>
    </div>
  );
}
