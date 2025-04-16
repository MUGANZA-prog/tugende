import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import EventCard, { Event } from './EventCard';

// Sample data for events
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Traditional Wedding - Gusaba',
    date: 'August 15, 2025',
    location: 'Kigali Serena Hotel',
    guests: 150,
    image: 'https://images.unsplash.com/photo-1524492449090-7fcd3c245d1e?auto=format&fit=crop&w=1470&q=80',
    status: 'upcoming',
    type: 'Gusaba'
  },
  {
    id: '2',
    title: 'Umuganura Celebration',
    date: 'June 10, 2025',
    location: 'Nyanza Cultural Village',
    guests: 100,
    image: 'https://images.unsplash.com/photo-1590080877620-fd8c8f57b42d?auto=format&fit=crop&w=1470&q=80',
    status: 'upcoming',
    type: 'Traditional'
  },
  {
    id: '3',
    title: 'Graduation Party',
    date: 'May 20, 2025',
    location: 'University of Rwanda - Huye Campus',
    guests: 75,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1470&q=80',
    status: 'upcoming',
    type: 'Graduation'
  },
  {
    id: '4',
    title: 'Corporate Kwita Izina Ceremony',
    date: 'January 15, 2025',
    location: 'Musanze',
    guests: 120,
    image: 'https://images.unsplash.com/photo-1516834474-48c0abc5e4d2?auto=format&fit=crop&w=1412&q=80',
    status: 'draft',
    type: 'Cultural'
  },
  {
    id: '5',
    title: 'Umuganura - Year End Gathering',
    date: 'December 31, 2024',
    location: 'Village Grounds - Rwamagana',
    guests: 60,
    image: 'https://images.unsplash.com/photo-1572219714054-d9c3e1700043?auto=format&fit=crop&w=1469&q=80',
    status: 'past',
    type: 'Traditional'
  }
];

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [activeTab, setActiveTab] = useState<string>('all');
  const { toast } = useToast();

  const filteredEvents = events.filter(event => {
    if (activeTab === 'all') return true;
    return event.status === activeTab;
  });

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event Deleted",
      description: "Your event was successfully deleted from the calendar.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold font-serif text-green-900">Your Events</h1>
          <p className="text-gray-700 mt-1">Manage all your celebrations in one place</p>
        </div>
        <Link to="/create-event">
          <Button className="mt-4 sm:mt-0 bg-emerald-600 hover:bg-emerald-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Events
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} onDelete={handleDeleteEvent} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Nta Bikorwa Bihari</h3>
              <p className="mt-2 text-gray-500">
                {activeTab === 'all'
                  ? "Nturategura ibikorwa na kimwe."
                  : `Nta bikorwa biri muri: ${activeTab}.`}
              </p>
              <Link to="/create-event">
                <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Tangira n'Icya Mbere
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;