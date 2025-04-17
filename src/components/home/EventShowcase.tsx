import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const EventShowcase: React.FC = () => {
  const showcaseEvents = [
    {
      title: "Summer Garden Wedding",
      type: "Wedding",
      date: "June 12, 2025",
      location: "Botanical Gardens",
      guests: "150 guests",
      image:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-rwandan-green",
    },
    {
      title: "Tech Graduation Party",
      type: "Graduation",
      date: "May 20, 2025",
      location: "City University",
      guests: "75 guests",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-rwandan-yellow",
    },
    {
      title: "25th Anniversary Celebration",
      type: "Anniversary",
      date: "September 5, 2025",
      location: "Grand Hotel",
      guests: "100 guests",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "bg-rwandan-red",
    },
  ];

  return (
    <section className="py-24 bg-rwandan-background-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Celebration Showcase
          </h2>
          <p className="text-lg text-black">
            Discover beautiful events inspired by Rwandan culture, celebrating
            love, unity, and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className={`${event.color} px-4 py-2`}>
                <span className="text-sm font-medium text-white">
                  {event.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-rwandan-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-rwandan-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={16} className="text-rwandan-accent" />
                    <span>{event.guests}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-rwandan-accent text-rwandan-accent hover:bg-rwandan-light-green"
                >
                  View Event
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
  <Link href="/events">
    <Button
      variant="outline"
      className="border-rwandan-accent text-rwandan-accent hover:bg-rwandan-light-green text-lg px-6 py-6"
    >
      Reba izindi Events
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default EventShowcase;
