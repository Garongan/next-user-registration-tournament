import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";
import CustomNavbar from "@/components/custom-navbar";
import Wave from "@/components/wave";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "User Registration Tournament",
    description: "Created with ❤️ by @alvindotri.j",
};

export default function RootLayout(
    {children,}: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen container mx-auto p-4 sm:p-8`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="flex flex-col">
                <div className="z-10">
                    <CustomNavbar/>
                </div>
                {children}
                <div className="overflow-hidden w-full h-full absolute bottom-0 left-0">
                    <Wave/>
                </div>
            </main>
        </ThemeProvider>
        </body>
        </html>
    );
}
