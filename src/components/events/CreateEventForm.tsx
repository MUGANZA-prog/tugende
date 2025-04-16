import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, ImageIcon, MapPin, Users } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Graduation",
  "Anniversary",
  "Corporate",
  "Baby Shower",
  "Engagement",
  "Religious Ceremony",
  "Reunion",
  "Other",
];

const CreateEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    location: "",
    description: "",
    guestCount: "",
    coverImage: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, coverImage: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate event creation
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Event created successfully",
        description: "Your new event has been created.",
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
        Create a New Event
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>
            Fill in the information about your upcoming celebration
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Mugabo & Keza's Wedding"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Event Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleSelectChange("type", value)}
                required
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="pl-10"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    className="pl-10"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Kigali, City Hotel"
                  className="pl-10"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell guests about your event..."
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guestCount">Expected Guest Count</Label>
              <div className="relative">
                <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  placeholder="e.g., 50"
                  className="pl-10"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Cover Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image</Label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer"
                onClick={triggerImageUpload}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full max-h-60 object-cover rounded-md mb-2"
                  />
                ) : (
                  <>
                    <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">
                      Drag and drop an image, or click to browse
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      Upload Image
                    </Button>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  id="coverImage"
                  name="coverImage"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Event..." : "Create Event"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CreateEventForm;
