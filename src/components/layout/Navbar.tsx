import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";

type NavbarProps = {
  onAuthClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-violet-500" />
            <span className="font-serif text-2xl font-semibold text-gray-900">
              Tumira
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/showcase"
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Showcase
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={onAuthClick}
                className="border-violet-200 text-violet-700 hover:bg-violet-50"
              >
                Sign In
              </Button>
              <Button
                onClick={onAuthClick}
                className="bg-violet-500 hover:bg-violet-600"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-violet-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/showcase"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Showcase
          </Link>
          <Link
            href="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Button
              variant="outline"
              onClick={() => {
                onAuthClick();
                setMobileMenuOpen(false);
              }}
              className="border-violet-200 text-violet-700 hover:bg-violet-50 w-full"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                onAuthClick();
                setMobileMenuOpen(false);
              }}
              className="bg-violet-500 hover:bg-violet-600 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
