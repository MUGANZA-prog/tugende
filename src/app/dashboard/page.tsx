import { DashboardHeader } from '@/components/dashboard'
import { MyEvents } from '@/components/events-cards/myEventsList'
import { PublicEventsHandler } from "@/components/events-cards/events-display"
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-slate-100">
        <div className="container mx-auto px-4 py-6">
          <DashboardHeader />
          <PublicEventsHandler />
          <div className="mt-8">
            <MyEvents />
          </div>
        </div>
  </div>
  )
}

export default page