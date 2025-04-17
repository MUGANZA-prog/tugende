"use client"

import { useState } from "react"
import { Search, Plus, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MyEvents() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg border shadow-lg">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="ml-4 bg-amber-500 text-white" onClick={() => setIsDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          create
        </Button>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
          <div>Name</div>
          <div className="text-right">Last modified</div>
        </div>

        <div className="py-4 border-b">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-gray-400" />
              <span className="font-medium">Birthdat party</span>
            </div>
            <div className="text-right text-gray-500 text-sm">2 hours ago</div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
