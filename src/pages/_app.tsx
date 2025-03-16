import { useState, useEffect } from "react";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PaginationProvider } from "@/hooks/usePagination";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import backgroundAnimation from "@/../public/background.json";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PaginationProvider>
        <QueryClientProvider client={queryClient}>
          {/*  */}
          {isClient && (
            <div className="lottie-background">
              <Lottie animationData={backgroundAnimation} loop={true} />
            </div>
          )}

          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PaginationProvider>
    </ThemeProvider>
  );
}
