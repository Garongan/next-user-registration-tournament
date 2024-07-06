"use client"

import {LogIn, Menu, UserPlus} from "lucide-react";
import Link from "next/link";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/mode-toggle";

export default function CustomNavbar() {
    return (
        <nav className="flex justify-between items-center">
            <Link href={"/"}><p className="font-bold text-xl hover:cursor-pointer">Your Company</p></Link>
            <div className="flex gap-2 items-center">
                <ul className="hidden sm:flex sm:gap-2">
                    <li>
                        <Link href={"/sign-in"}>
                            <Button variant="ghost"> <LogIn/> <span className="ms-2">Sign In</span></Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/sign-up"}>
                            <Button variant="ghost"><UserPlus/> <span className="ms-2">Sign Up</span></Button>
                        </Link>
                    </li>
                </ul>
                <div className="sm:hidden outline-0">
                    <CustomMenu/>
                </div>
                <ModeToggle/>
            </div>
        </nav>
    )
}

export function CustomMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href={"/sign-in"}>
                        <Button variant="ghost"> <LogIn/> <span className="ms-2">Sign In</span></Button>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/sign-up"}>
                        <Button variant="ghost"><UserPlus/> <span className="ms-2">Sign Up</span></Button>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}