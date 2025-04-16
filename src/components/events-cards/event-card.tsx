"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, MapPinIcon, LockIcon, GlobeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  id: string
  title: string
  description: string
  location: string
  date: Date
  imageUrl: string
  isPrivate: boolean
  isJoined?: boolean
  onJoin?: (id: string) => void
}

export function EventCard({
  id,
  title,
  description,
  location,
  date,
  imageUrl,
  isPrivate,
  isJoined = false,
  onJoin,
}: EventCardProps) {
  const [joined, setJoined] = useState(isJoined)

  const handleJoin = () => {
    setJoined(true)
    if (onJoin) {
      onJoin(id)
    }
  }

  return (
    <Card className="min-w-[280px] w-[280px] overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md flex flex-col">
      <div className="relative h-32 w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} event`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge
          className={`absolute right-2 top-2 text-xs ${
            isPrivate ? "bg-gray-800 hover:bg-gray-700" : "bg-amber-600 hover:bg-amber-700"
          }`}
        >
          {isPrivate ? (
            <div className="flex items-center">
              <LockIcon className="mr-1 h-2.5 w-2.5" />
              <span>Private</span>
            </div>
          ) : (
            <div className="flex items-center">
              <GlobeIcon className="mr-1 h-2.5 w-2.5" />
              <span>Public</span>
            </div>
          )}
        </Badge>
      </div>

      <CardContent className="p-3 flex-grow">
        <div className="mb-2">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-1">{title}</h3>
          <p className="mt-1 text-xs text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className="space-y-1 text-xs text-gray-500">
          <div className="flex items-center">
            <CalendarIcon className="mr-1.5 h-3 w-3 text-orange-500" />
            <span>{format(date, "MMM d, yyyy 'at' h:mm a")}</span>
          </div>

          <div className="flex items-center">
            <MapPinIcon className="mr-1.5 h-3 w-3 text-orange-500" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t bg-gray-50 p-3">
        {joined ? (
          <div className="flex w-full items-center justify-between">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
              <div className="flex items-center">
                <span className="mr-1">✓</span> Joined
              </div>
            </Badge>
            <Button variant="outline" size="sm" className="text-xs h-8">
              Details
            </Button>
          </div>
        ) : (
          <div className="flex w-full items-center justify-between">
            <Button onClick={handleJoin} className="bg-orange-500 hover:bg-orange-600 text-white text-xs h-8">
              Join
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-8">
              Details
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
