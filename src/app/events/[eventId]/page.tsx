import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Simulated event data (should be shared or fetched in real app)
const eventsList = [
  {
    id: "1",
    title: "Summer Garden Wedding",
    type: "Wedding",
    date: "June 12, 2025",
    location: "Botanical Gardens",
    guests: "150 guests",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    color: "bg-rwandan-green",
  },
  {
    id: "2",
    title: "Tech Graduation Party",
    type: "Graduation",
    date: "May 20, 2025",
    location: "City University",
    guests: "75 guests",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    color: "bg-rwandan-yellow",
  },
  {
    id: "3",
    title: "25th Anniversary Celebration",
    type: "Anniversary",
    date: "September 5, 2025",
    location: "Grand Hotel",
    guests: "100 guests",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    color: "bg-rwandan-red",
  },
  {
    id: "4",
    title: "Corporate Annual Meetup",
    type: "Corporate",
    date: "August 15, 2025",
    location: "Kigali Convention Center",
    guests: "200 guests",
    image:
      "https://plus.unsplash.com/premium_photo-1726804803868-955dfc978e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29ycG9yYXRlJTIwQW5udWFsJTIwTWVldHVwfGVufDB8fDB8fHww",
    color: "bg-rwandan-yellow",
  },
  {
    id: "5",
    title: "Art Gala Exhibition",
    type: "Art",
    date: "October 1, 2025",
    location: "Kigali Art Gallery",
    guests: "300 guests",
    image:
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFydCUyMEdhbGElMjBFeGhpYml0aW9ufGVufDB8fDB8fHww",
    color: "bbg-rwandan-green",
  },
  {
    id: "6",
    title: "Rwandan Cultural Festival",
    type: "Cultural",
    date: "November 20, 2025",
    location: "Rwanda National Stadium",
    guests: "500 guests",
    image:
      "https://images.unsplash.com/photo-1649523724085-8394f44a4504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtYWhvcm8lMjBOYXRpb25hbCUyMFN0YWRpdW18ZW58MHx8MHx8fDA%3D",
    color: "bg-rwandan-blue",
  },
  {
    id: "7",
    title: "Charity Gala Dinner",
    type: "Charity",
    date: "December 12, 2025",
    location: "Rwanda Convention Center",
    guests: "400 guests",
    image:
      "https://images.unsplash.com/photo-1579518874869-1ad294d2596f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UndhbmRhJTIwQ29udmVudGlvbiUyMENlbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "bg-rwandan-yellow",
  },
];

type Props = {
  params: { eventId: string };
};

const EventDetailPage = ({ params }: Props) => {
  const event = eventsList.find((event) => event.id === params.eventId);

  if (!event) return notFound();

  return (
    <main className="min-h-screen px-4 py-16 sm:px-8 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        <Link href="/events">
          <Button variant="ghost" className="mb-6 text-rwandan-accent hover:underline">
            ← Back to Events
          </Button>
        </Link>

        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className={`${event.color} px-6 py-2`}>
            <span className="text-sm font-medium text-white">{event.type}</span>
          </div>
          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold font-serif">{event.title}</h1>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-rwandan-accent" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-rwandan-accent" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-rwandan-accent" />
                <span>{event.guests}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This event promises to be an unforgettable experience. Stay tuned for more updates and make sure to save the date!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetailPage;
