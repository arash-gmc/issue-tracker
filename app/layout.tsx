import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import SessionProvider from "./_providers/Session";
import QueryClient from "./_providers/QueryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "View a Summery of Project Issues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <QueryClient>
          <body
            className={inter.className}
            suppressHydrationWarning={false}
          >
            <Theme
              accentColor="grass"
              radius="large"
              scaling="105%"
            >
              <Navbar />
              <main className="p-6">
                <Container>{children}</Container>
              </main>
            </Theme>
          </body>
        </QueryClient>
      </SessionProvider>
    </html>
  );
}
