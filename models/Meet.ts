export interface FormMeetModel {
  roomKey: string;
  roomTitle: string;
  roomThumbnail: string;
}

export interface FormJoinRoomRequestModel {
  cmd: string;
  roomKey: string;
}

export interface MeetModel {
  _id: string;
  roomKey: string;
  roomTitle: string;
  roomThumbnail: string;
  status: number;
  statusName: string;
  mode: number;
  cDate: string;
  attendees: {
    user_id: string;
    user_name: string;
    user_avatar: string;
  }[];
}


export interface RoomModel {
  streamUrl: string;
  streamKey: string;
  room: {
    _id: string;
    roomKey: string;
    roomTitle: string;
    roomThumbnail: string;
    status: 0;
    mode: 0;
    cDate: string;
    owner: {
      user_id: string;
      user_name: string;
      user_avatar: string;
    };
    attendees: {
      user_id: string;
      user_name: string;
      user_avatar: string;
    }[];
    videoUrl: string;
  };
}

export interface FormResponseRoomRequestModel {
  cmd: string;
  roomId: string;
  studentId: string;
  res: true;
}

export interface RoomRequestModel {
  user_id: string;
  user_name: string;
  user_avatar: string;
  room_id: string;
  res?: boolean;
  roomId?: string;
}
