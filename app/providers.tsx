"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider, useDispatch } from "react-redux";

import { axiosInstance } from "@/api/axiosClient";
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

const LoadingAnimation = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 bg-blue-500 rounded-full animate-pulse`}
            style={{
              top: index % 2 === 0 ? "0" : "50%",
              left: index < 2 ? "0" : "50%",
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ReduxProviders: React.FC<ReduxProvidersProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

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
      } finally {
        setIsLoading(false);
      }
    };

    checkCookieAndCallAPI();
  }, [dispatch]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
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
