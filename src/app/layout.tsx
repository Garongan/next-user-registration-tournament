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
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="relative min-h-screen">
                <div className="relative z-50 container mx-auto p-4 sm:p-8">
                    <CustomNavbar/>
                    <div className="py-10">
                        {children}
                    </div>
                </div>
                <div className="overflow-hidden w-full h-full z-10 absolute bottom-0 left-0">
                    <Wave/>
                </div>
            </main>
        </ThemeProvider>
        </body>
        </html>
    )
        ;
}
