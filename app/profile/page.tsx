"use client";

import { Product } from "@/components/product";
import { useAuth } from "@/redux/useAuth";
import { Image } from "antd";
import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { Tooltip } from "@nextui-org/tooltip";
import { Sitebar } from "@/components/sitebar";

export default function ProfilePage() {
  return (
    <>
      <div className="bg-gray-50 flex flex-col lg:flex-row items-center lg:items-start">
        <Sitebar />
        <Product category="Khóa học của tôi" />
      </div>
    </>
  );
}
