'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const useAuth = () => {
  const currentUser = useSelector((state: RootState) => state.user.data);
  
  return { currentUser };
};
