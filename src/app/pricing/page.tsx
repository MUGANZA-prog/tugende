

import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:px-8 bg-gradient-to-br from-white to-violet-50 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">
        Transparent Pricing for Every Celebration
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Starter Plan */}
        <div className="group border rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white">
          <h2 className="text-xl font-semibold">Starter</h2>
          <p className="mt-2 text-gray-600">Basic tools for small gatherings.</p>
          <p className="mt-4 text-3xl font-bold">0rwf</p>
          <ul className="mt-4 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>5 Invitations / month</li>
            <li>Simple RSVP Tracking</li>
            <li>Limited Themes</li>
          </ul>
          <Button className="mt-6 w-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Get Started
          </Button>
        </div>

        {/* Pro Plan - Featured */}
        <div className="group border-2 border-violet-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 bg-white relative">
          <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
            Most Popular
          </div>
          <h2 className="text-xl font-semibold text-violet-600">Pro</h2>
          <p className="mt-2 text-gray-600">Perfect for weddings & big events.</p>
          <p className="mt-4 text-3xl font-bold">10000rwf</p>
          <ul className="mt-4 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Unlimited Invitations</li>
            <li>Custom Branding</li>
            <li>Advanced Guest Management</li>
            <li>Premium Themes</li>
          </ul>
          <Button className="mt-6 w-full bg-violet-500 text-white hover:bg-violet-600 transition">
            Buy Now
          </Button>
        </div>

        {/* Business Plan */}
        <div className="group border rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white">
          <h2 className="text-xl font-semibold">Business</h2>
          <p className="mt-2 text-gray-600">For event planners & agencies.</p>
          <p className="mt-4 text-3xl font-bold">20000rwf</p>
          <ul className="mt-4 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Everything in Pro</li>
            <li>Multi-user Accounts</li>
            <li>Priority Support</li>
            <li>Analytics Dashboard</li>
          </ul>
          <Button className="mt-6 w-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition">
            Buy Now
          </Button>
        </div>
      </div>
    </main>
  );
}
