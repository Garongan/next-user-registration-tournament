"use client"

import Wave from "@/components/wave";
import CustomNavbar from "@/components/customNavbar";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col container mx-auto p-4 sm:p-8">
            <div className="z-10">
                <CustomNavbar/>
            </div>
            <div className="flex gap-3 flex-col py-20">
                <h1 className="sm:text-2xl text-lg font-bold z-10">Tournament Registration</h1>
                <p className="z-10">You have to login before register this tournament</p>
            </div>
            <div className="overflow-hidden w-full h-full absolute bottom-0 left-0">
                <Wave/>
            </div>
        </main>
    );
}
