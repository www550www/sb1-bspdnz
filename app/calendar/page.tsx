"use client";

import { Shell } from "@/components/layout/shell";
import { Calendar } from "@/components/calendar/calendar";

export default function CalendarPage() {
  return (
    <Shell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
        <Calendar />
      </div>
    </Shell>
  );
}