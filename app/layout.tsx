import bpbTheme from "@/src/theme";
import text from "@/src/config/text";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Metadata } from "next";
import "../public/globals.css";

export const metadata: Metadata = {
  title: text.metaData.homeTitle,
  description: text.metaData.homeDescription,
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
          <ThemeProvider theme={bpbTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
