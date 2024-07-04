"use client"

import Wave from "@/components/wave";
import CustomNavbar from "@/components/customNavbar";
import Image from "next/image";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col container mx-auto p-4 sm:p-8">
            <div className="z-10">
                <CustomNavbar/>
            </div>
            <div className="flex gap-3 flex-col py-20">
                <h1 className="sm:text-2xl text-lg font-bold z-10">Tournament Registration</h1>
                <p className="z-10">You have to login before register this tournament</p>
                <Image
                    className="rotate-45 absolute sm:-left-36 sm:-bottom-36 -left-12 -bottom-12 opacity-40"
                    src="/cute-cat.png" alt="a cute cat" sizes="50vw" style={{width: '50vw', height: 'auto'}}
                    width={400} height={400}/>
            </div>
            <Wave/>
        </main>
    );
}
