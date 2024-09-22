"use client";

import { createContext, FC, ReactNode, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { HubConnection } from "@microsoft/signalr";

import { RoomRequestNotification } from "../molecules/notification";
import useSignalRConnection from "../utils/Signalr";

import { useGetUser } from "@/hooks/useGetUser";
import { UserModel } from "@/models/Auth";
import { LoadingAnimation } from "@/components/page/loading-animation";
import { setUser } from "@/redux/userSlice";
import { AppDispatch } from "@/redux/store";

export const SignalRContext = createContext<HubConnection | null>(null);

interface LoadingWrapperProps {
  children: ReactNode;
}

const InitialWrapper: FC<LoadingWrapperProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  const onSuccess = useCallback(
    (data: UserModel) => {
      dispatch(setUser(data));
      setIsLoading(false);
    },
    [dispatch],
  );

  const onError = useCallback(() => {
    setIsLoading(false);
  }, []);

  const { data: detailUser } = useGetUser({ onSuccess, onError });

  const contextValue = useSignalRConnection("edunimohub", {
    userId: detailUser?.id,
  });

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <SignalRContext.Provider value={contextValue}>
      <RoomRequestNotification contextValue={contextValue} />
      {children}
    </SignalRContext.Provider>
  );
};

export default InitialWrapper;
