"use client"

import {
    Button,
    Dropdown, DropdownItem, DropdownMenu,
    DropdownTrigger,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";
import {Menu} from "lucide-react";

export default function CustomNavbar() {
    return (
        <Navbar maxWidth="full" className="justify-between">
            <NavbarBrand>
                <p className="font-bold text-inherit">Your Company</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex sm:">
                <NavbarItem>
                    <Button as={Link} href="#" className="rounded p-2 bg-[#3A0CA3B2] hover:ring-2 hover:ring-white">Sign
                        In</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href="#" className="rounded p-2 bg-[#00FFFF4C] hover:ring-2 hover:ring-white">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <div className="sm:hidden outline-0">
                <CustomMenu/>
            </div>
        </Navbar>
    )
}

export function CustomMenu() {
    return (
        <Dropdown className="outline-none">
            <DropdownTrigger className="hover:cursor-pointer">
                <Menu/>
            </DropdownTrigger>
            <DropdownMenu onAction={(key) => alert(key)}>
                <DropdownItem key="signin" className="mb-2 rounded p-2 bg-[#3A0CA3B2] hover:ring-2 hover:ring-white hover:cursor-pointer">
                    Sign In
                </DropdownItem>
                <DropdownItem key="singup" className="rounded p-2 bg-[#00FFFF4C] hover:ring-2 hover:ring-white hover:cursor-pointer">
                    Sign Up
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}