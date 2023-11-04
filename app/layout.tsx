import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { SessionProvider } from "next-auth/react";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={inter.className}
          suppressHydrationWarning={false}
        >
          <Theme
            appearance="light"
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
      </Provider>
    </html>
  );
}
