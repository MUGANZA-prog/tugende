"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon, GlobeIcon, ImageIcon, Loader2, LockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { eventSchema, type EventFormValues } from "../../lib/event-schema"

export function EventForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      location: "",
      privacy: "public",
      description: "",
    },
  })

  async function onSubmit(values: EventFormValues) {
    setIsSubmitting(true)

    try {
      console.log(values)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Event Created!",
        description: "Your event ceremony has been successfully created.",
      })

      form.reset()
      setImagePreview(null)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem creating your event.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto rounded-lg border bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Image Upload - Full width */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Image</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
                    <div
                      className={cn(
                        "relative flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-amber-300 bg-amber-50 p-4 text-center transition-all duration-300 hover:bg-amber-100",
                        imagePreview ? "border-amber-500" : "",
                      )}
                    >
                      <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        className="absolute inset-0 cursor-pointer opacity-0"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            field.onChange(file)
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              setImagePreview(reader.result as string)
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                      {imagePreview ? (
                        <div className="relative h-full w-full">
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            className="h-full w-full rounded object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <ImageIcon className="h-10 w-10 text-amber-500" />
                          <p className="text-sm text-muted-foreground">
                            Click or drag and drop to upload an image
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormDescription>Upload an image for your event.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Grid for 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter event title"
                      {...field}
                      className="border-amber-200 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </FormControl>
                  <FormDescription>Give your event a memorable title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter event location"
                      {...field}
                      className="border-amber-200 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </FormControl>
                  <FormDescription>Specify where your event will be held.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Date */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Event Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full border-amber-200 pl-3 text-left font-normal transition-all duration-300 hover:bg-amber-50",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Select date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        className="border-amber-200"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Choose the date when your event will take place.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Privacy */}
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Privacy</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-amber-200 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500">
                        <SelectValue placeholder="Select privacy setting" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="public" className="flex transition-all duration-300 hover:bg-amber-50">
                        <GlobeIcon />
                        <span className="ml-2">Public</span>
                      </SelectItem>
                      <SelectItem value="private" className="flex transition-all duration-300 hover:bg-amber-50">
                        <LockIcon />
                        <span className="ml-2">Private</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Choose whether your event is public or private.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
  
          {/* Description - Full width */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your event..."
                    className="min-h-32 border-amber-200 transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Provide details about your event ceremony.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 text-white transition-all duration-300 hover:bg-amber-700"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Event...
              </>
            ) : (
              "Create Event"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
  
}
