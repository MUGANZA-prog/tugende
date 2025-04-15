import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Users } from "lucide-react";

type HeroProps = {
  onGetStarted: () => void;
};

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative bg-gradient-to-b from-white to-violet-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tegura Ibirori Byibukirwa{" "}
              <span className="text-violet-600 italic">Hamwe</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Beautiful digital invitations, seamless planning tools, and
              interactive event pages that bring joy to your celebrations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onGetStarted}
                size="lg"
                className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-6 text-lg flex items-center gap-2"
              >
                Tangira
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-violet-200 text-violet-700 hover:bg-violet-50 px-8 py-6 text-lg"
              >
                Reba Ingero
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center sm:items-start">
                <div className="h-12 w-12 rounded-full bg-celebration-blue flex items-center justify-center">
                  <Mail className="h-6 w-6 text-violet-600" />
                </div>
                <p className="mt-3 text-gray-700 font-medium">
                  Beautiful Invitations
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="h-12 w-12 rounded-full bg-celebration-peach flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-violet-600" />
                </div>
                <p className="mt-3 text-gray-700 font-medium">Event Planning</p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="h-12 w-12 rounded-full bg-celebration-soft flex items-center justify-center">
                  <Users className="h-6 w-6 text-violet-600" />
                </div>
                <p className="mt-3 text-gray-700 font-medium">
                  Collaborative Tools
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-celebration-pink rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-celebration-blue rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-2000"></div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-2 card-hover z-10">
                  <div className="bg-violet-500 p-4 text-white">
                    <h3 className="font-serif text-xl font-medium">
                      Ubukwe bwa Sarah & Michael
                    </h3>
                    <p className="text-violet-100">June 15, 2025 • 4:00 PM</p>
                  </div>
                  <div className="p-6">
                    <p className="font-serif text-lg text-center text-gray-700 italic">
                      "Turi gushyingiranwa kandi twishimiye ko wazaboneka!"
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-violet-500" />
                        <span className="text-gray-600">
                          June 15, 2025 • 4:00 PM
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-violet-500" />
                        <span className="text-gray-600">
                          RSVP kugeza May 1, 2025
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-violet-500 hover:bg-violet-600">
                        RSVP Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-12 -right-8 bg-white rounded-2xl shadow-lg overflow-hidden transform -rotate-3 card-hover">
                  <div className="bg-celebration-peach p-4">
                    <h3 className="font-serif text-lg font-medium text-gray-800">
                      Graduation Party
                    </h3>
                    <p className="text-gray-600">May 20, 2025 • 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
