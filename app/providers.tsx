"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import axiosInstance from "@/api/axiosClient";
import { setUser } from "@/redux/userSlice";
import store from "@/redux/store";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

interface ReduxProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const ReduxProviders: React.FC<ReduxProvidersProps> = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkCookieAndCallAPI = async () => {
      try {
        const response = await axiosInstance.get("/api/User");

        if (response.status === 200) {
          console.log("API call successful");
          dispatch(setUser(response.data));
        } else {
          console.log("API call failed");
        }
      } catch (error) {
        console.error("Error calling API:", error);
      }
    };

    checkCookieAndCallAPI();
  }, [dispatch]);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NextUIProvider navigate={useRouter().push}>{children}</NextUIProvider>
    </QueryClientProvider>
  );
};

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <ReduxProviders themeProps={themeProps}>{children}</ReduxProviders>
    </ReduxProvider>
  );
}
