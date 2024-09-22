import { VideoModel } from "./Video";

export interface FormCourseModel {
  _id?: string;
  title: string;
  desc: string;
  courseDetail: string;
  price: number;
  tags: string[];
  discount: number;
}

export interface CourseModel {
  _id: string;
  title: string;
  desc: string;
  courseDetail: string;
  price: number;
  tags: string[];
  discount: number;
  cuser: {
    user_id?: string;
    user_name?: string;
    user_avatar?: string;
  };
  cdate: string;
  edate: string;
  videos: VideoModel[];
  students: [
    {
      user_id?: string;
      user_name?: string;
      user_avatar?: string;
      rate?: number;
    },
  ];
}

export interface ApiUploadLessonListModel {
  url: string;
  videoId: string;
}
