import { create } from "domain";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  create: {
    video: '/profile/video',
    meet: '/profile/meet',
    course: '/profile/course',
    draw: '/draw',
  },

  thumbnail:
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg",
  home: {
    label: "Home",
    href: "/",
    name: "Học trực tuyến",
    description: "Học ngay học ngay",
  },
  login: {
    label: "Login",
    href: "/login",
    name: "Đăng nhập rồi học đi cu",
    description: "Học ngay học ngay",
  },
  register: {
    label: "Register",
    href: "/register",
    name: "Đăng ký rồi học đi cu",
    description: "Học ngay học ngay",
  },
  profile: {
    label: "Profile",
    href: "/register",
    name: "thông tin cá nhân",
    description: "Học ngay học ngay",
  },
};
