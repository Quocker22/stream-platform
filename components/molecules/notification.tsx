import { useEffect } from "react";
import { notification, Space } from "antd";
import { Button } from "@nextui-org/button";
import { HubConnection } from "@microsoft/signalr";
import { useRouter } from "next/navigation";

import { useResponseRoomRequest } from "@/hooks/useResponseRoomRequest";
import { RoomRequestModel } from "@/models/Meet";

interface RoomRequestNotificationProps {
  contextValue: HubConnection | null;
}

const RoomRequestNotification: React.FC<RoomRequestNotificationProps> = ({
  contextValue,
}) => {
  const router = useRouter();
  const { mutate: responseRoomRequest } = useResponseRoomRequest();

  const handleOnAccept = async (key: string, res: RoomRequestModel) => {
    await responseRoomRequest({
      cmd: "roomRequest",
      roomId: res.room_id,
      studentId: res.user_id,
      res: true,
    });
    notification.destroy(key);
  };

  useEffect(() => {
    if (contextValue) {
      const key = `open${Date.now()}`;

      const btnNotification = (res: RoomRequestModel) => (
        <Space>
          <Button
            color="danger"
            size="sm"
            onClick={() => notification.destroy()}
          >
            Từ chối
          </Button>
          <Button
            className="text-white"
            color="success"
            size="sm"
            onClick={() => handleOnAccept(key, res)}
          >
            Đồng ý
          </Button>
        </Space>
      );

      contextValue.on("roomRequest", (res: RoomRequestModel) => {
        console.log("Received message:", res);
        if (res.user_name) {
          notification.success({
            message: "Phòng học",
            description: (
              <div>
                Yêu cầu tham gia phòng học:{" "}
                <span className="font-bold">{res.user_name}</span>
              </div>
            ),
            btn: btnNotification(res),
            key,
            duration: 0,
          });
        }

        if (res.res) {
          console.log("res.roomId", res.roomId);
          router.push(`/room/${res.roomId}`);
        }
      });
    }
  }, [contextValue]);

  return null;
};

export { RoomRequestNotification };
