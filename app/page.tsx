"use client";

import { Banner } from "@/components/home/banner";
import { Content } from "@/components/home/content";
import { Product } from "@/components/product";
import { useGetVideo } from "@/hooks/useGetVideo";
import { FaUser } from "react-icons/fa";
import { RiTimer2Fill } from "react-icons/ri";

export default function Home() {
  const { data: video } = useGetVideo();

  return (
    <>
      <Banner />
      <Content />
    </>
  );
}
