"use client";

import { Shell } from "@/components/layout/shell";
import { KanbanBoard } from "@/components/pipeline/kanban-board";

export default function PipelinePage() {
  return (
    <Shell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sales Pipeline</h1>
        </div>
        <KanbanBoard />
      </div>
    </Shell>
  );
}