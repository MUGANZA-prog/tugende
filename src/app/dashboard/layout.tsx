"use client"

import type React from "react"
import { SidebarProvider, } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/appSidebar"
import { Navbar } from "@/components/navbar/navbar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider className="">
      <Navbar/>
        <AppSidebar/>
        <main className=" pt-14 bg-base-200 w-full">{children}</main>
    </SidebarProvider>
  )
}
