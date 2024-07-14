"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { LuHardDriveDownload } from "react-icons/lu";
import { TbLivePhoto } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";

import {
  MdOutlineDriveFolderUpload,
  MdOutlineOndemandVideo,
  MdOutlineVideoCall,
} from "react-icons/md";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Logo } from "../icons";
import { useAuth } from "@/redux/useAuth";
import { Avatar, Dropdown, MenuProps } from "antd";
import { FaUser } from "react-icons/fa";
import { useLogout } from "@/hooks/useLogout";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHight, setHeaderHight] = useState(0);
  useEffect(() => {
    const height =
      headerRef.current?.clientHeight ?? headerRef.current?.offsetHeight;
    height && setHeaderHight(height);
  }, []);

  const { mutate: logout } = useLogout();

  const onLogout = async () => {
    await logout();
    await dispatch(setUser({}));
    await router.push("/login");
  };

  const itemsUser: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link className="flex items-center" href="/profile">
          <div className="pe-3">
            <Avatar
              className="cursor-pointer"
              size={32}
              src={currentUser?.avatarUrl}
              icon={<FaUser />}
            />
          </div>
          <div>
            <ul>
              <li>{currentUser?.dislayName}</li>
              <li>{currentUser?.email}</li>
            </ul>
          </div>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <a
          onClick={onLogout}
          className="inline-flex items-center justify-center w-full py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="mr-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Đăng xuất
        </a>
      ),
    },
  ];

  const itemsCreateVideo: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link className="flex items-center" href="/profile">
          <div className="pe-3">
            <MdOutlineOndemandVideo className="text-primary" size={26} />
          </div>
          <div>Tải video lên</div>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="flex items-center" href="/profile">
          <div className="pe-3">
            <TbLivePhoto className="text-primary" size={26} />
          </div>
          <div>Tạo phòng học</div>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="flex items-center" href="/profile">
          <div className="pe-3">
            <MdOutlineDriveFolderUpload className="text-primary" size={26} />
          </div>
          <div>Tạo khóa học</div>
        </Link>
      ),
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{ wrapper: "px-0 flex-col h-fit shadow-md gap-0" }}
      height={`${headerHight}px`}
      maxWidth="full"
    >
      <div
        className={clsx(
          "mx-auto flex w-full max-w-screen-full flex-nowrap items-center justify-between gap-4 px-4 font-medium",
          headerHight ? "h-[var(--navbar-height)]" : "py-2.5"
        )}
        ref={headerRef}
      >
        <NavbarBrand className="!grow-0">
          <Link href="/">
            <Logo width={32} height={32} />
          </Link>
        </NavbarBrand>
        <NavbarContent
          className="hidden gap-4 sm:ml-4 sm:!flex sm:space-x-4"
          justify="center"
        >
          <NavbarItem>
            <Link href="/" size="sm">
              Danh sách khóa học
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <ThemeSwitch /> */}
          <NavbarItem className="hidden lg:!flex">
            <Link color="secondary" href="/download" size="sm">
              <LuHardDriveDownload className="size-4" />
              &nbsp;Tải ứng dụng
            </Link>
          </NavbarItem>
          {!currentUser?.id && (
            <NavbarItem className="">
              <Button
                as={Link}
                href="/register"
                size="sm"
                startContent={<IoIosSend className="size-5" />}
              >
                Đăng ký ngay
              </Button>
            </NavbarItem>
          )}

          {!currentUser?.id ? (
            <NavbarItem>
              <Button as={Link} href="/login" variant="bordered" size="sm">
                Đăng nhập
              </Button>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem>
                <Dropdown
                  menu={{ items: itemsCreateVideo }}
                  arrow
                  placement="bottomLeft"
                >
                  <MdOutlineVideoCall
                    className="cursor-pointer text-primary"
                    size={32}
                  />
                </Dropdown>
              </NavbarItem>

              <NavbarItem className="">
                <Dropdown
                  arrow
                  menu={{ items: itemsUser }}
                  placement="bottomLeft"
                >
                  <Avatar
                    className="cursor-pointer"
                    src={currentUser?.avatarUrl}
                    size={32}
                    icon={<FaUser />}
                  />
                </Dropdown>
              </NavbarItem>
            </>
          )}

          {/* <NavbarItem className="">
            <div className="flex items-center">
              <span className="hidden h-5 w-px bg-gray-200 lg:mr-3 lg:!inline" />
              <Socials />
              <span className="ml-3 inline h-5 w-px bg-gray-200 sm:hidden" />
            </div>
          </NavbarItem> */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:!hidden"
          />
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export { Header };
