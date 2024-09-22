"use client";

import { ReactNode, useMemo } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import store from "@/redux/store";
import InitialWrapper from "@/components/page/Initial-wrapper";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  const navigate = useMemo(() => router.push, [router]);

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <InitialWrapper>
          <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
        </InitialWrapper>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
