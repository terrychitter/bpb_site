import type { Metadata } from "next";
import text from "@/src/config/text";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import bpbTheme from "@/src/theme";
import MainFooter from "@/src/components/MainFooter/MainFooter";
import "../public/globals.css";

export const metadata: Metadata = {
  title: text.mainMetaDataTitle,
  description: text.mainMetaDataDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={bpbTheme}>
            {children}
            <MainFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
