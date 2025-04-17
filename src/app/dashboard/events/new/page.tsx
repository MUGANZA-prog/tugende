import { EventForm } from '@/components/event-form/event-create-form'
import React from 'react'

const CreateEventPage = () => {
  return (
    <div className=' p-6'>
        <div className="container max-w-4xl py-6">
    <div className="mb-8 space-y-2">
      <h1 className="text-3xl font-bold tracking-tight text-amber-600">Create Event Ceremony</h1>
      <p className="text-muted-foreground">Fill out the form below to create your event ceremony.</p>
    </div>
    <EventForm />
  </div>
    </div>
  )
}

export default CreateEventPage