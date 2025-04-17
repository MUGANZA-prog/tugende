"use client"

import { useState } from "react"
import { CalendarIcon, MapPin, Lock, Globe } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

export default function EventCreationCard() {
  const [date, setDate] = useState<Date>()
  const [visibility, setVisibility] = useState("public")
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    // Close the popover after selection to prevent repositioning
    setTimeout(() => setIsCalendarOpen(false), 100)
  }

  return (
    <div className="p-6 space-y-6 bg-white">
      <h2 className="text-2xl font-semibold text-center">Create New Event</h2>

      <div className="space-y-6">
        {/* Event Visibility */}
        <div>
          <Label className="block mb-2">Event Visibility</Label>
          <div className="flex gap-2">
            <Button
              type="button"
              variant={visibility === "public" ? "default" : "outline"}
              className={visibility === "public" ? "border-2 border-orange-500 bg-orange-500 text-white" : "border-2"}
              onClick={() => setVisibility("public")}
            >
              <Globe className="h-4 w-4 mr-2" />
              Public
            </Button>
            <Button
              type="button"
              variant={visibility === "private" ? "default" : "outline"}
              className={visibility === "private" ? "border-2 border-orange-500 bg-orange-500 text-white" : "border-2"}
              onClick={() => setVisibility("private")}
            >
              <Lock className="h-4 w-4 mr-2" />
              Private
            </Button>
          </div>
        </div>

        {/* Event Title and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title" className="block mb-2">
              Event Title
            </Label>
            <Input id="title" placeholder="Enter event title" className="w-full" />
          </div>

          <div>
            <Label htmlFor="location" className="block mb-2">
              Event Location
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input id="location" placeholder="Enter location" className="pl-10 w-full" />
            </div>
          </div>
        </div>

        {/* Event Date with Calendar Popover */}
        <div>
          <Label htmlFor="date" className="block mb-2">
            Event Date
          </Label>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                onClick={() => setIsCalendarOpen(true)}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 z-50"
              align="start"
              side="bottom"
              sideOffset={5}
              avoidCollisions={false}
            >
              <div className="bg-white border rounded-md shadow-md">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Event Description */}
        <div>
          <Label htmlFor="description" className="block mb-2">
            Event Description
          </Label>
          <Textarea id="description" placeholder="Describe your event" className="w-full min-h-[120px]" />
        </div>

        {/* Create Button */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Create Event</Button>
      </div>
    </div>
  )
}
