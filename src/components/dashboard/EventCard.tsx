import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, MoreHorizontal, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  guests: number;
  image: string;
  status: "upcoming" | "past" | "draft";
  type: string;
};

type EventCardProps = {
  event: Event;
  onDelete?: (id: string) => void;
};

const EventCard: React.FC<EventCardProps> = ({ event, onDelete }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800";
      case "past":
        return "bg-gray-100 text-gray-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getStatusColor(event.status)}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
            <CardDescription>{event.type}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to={`/event/${event.id}/edit`} className="flex w-full">
                  Edit Event
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={`/event/${event.id}/guests`} className="flex w-full">
                  Manage Guests
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to={`/event/${event.id}/invitations`}
                  className="flex w-full"
                >
                  Send Invitations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => onDelete && onDelete(event.id)}
              >
                Delete Event
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-violet-500 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-violet-500 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-violet-500 mr-2" />
            <span>{event.guests} guests</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link to={`/event/${event.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full border-violet-200 text-violet-700 hover:bg-violet-50"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
