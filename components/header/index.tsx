"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { LuHardDriveDownload } from "react-icons/lu";

import { Socials } from "./socials";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Logo } from "../icons";
import { ThemeSwitch } from "../theme-switch";
import { useAuth } from "@/redux/useAuth";
import { Avatar, Dropdown, MenuProps } from "antd";
import { FaUser } from "react-icons/fa";
import { useLogout } from "@/hooks/useLogout";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  const items: MenuProps["items"] = [
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
        <a rel="noopener noreferrer" onClick={onLogout}>
          Đăng xuất
        </a>
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
          "mx-auto flex w-full max-w-screen-xl flex-nowrap items-center justify-between gap-4 px-4 font-medium",
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
            <NavbarItem className="">
              <Dropdown menu={{ items }} placement="bottomLeft">
                <Avatar
                  className="cursor-pointer"
                  src={currentUser?.avatarUrl}
                  size={32}
                  icon={<FaUser />}
                />
              </Dropdown>
            </NavbarItem>
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
