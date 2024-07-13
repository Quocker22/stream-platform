export interface FormLoginModel {
  userName: string;
  password: string;
}

export interface FormRegisterModel {
  userName: string;
  email: string;
  dislayName: string;
  password: string;
  role: string;
}

export interface UserModel {
  id: string;
  userName: string;
  email: string;
  isEmailActive: boolean;
  dislayName: string;
  password: string;
  role: string;
  avatarUrl: string;
  streamInfo: {
    last_stream: string;
    stream_token: string;
    status: string;
  };
}
