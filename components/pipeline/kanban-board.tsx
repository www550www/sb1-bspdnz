"use client";

import { deals, pipelineStages } from "@/lib/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function KanbanBoard() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {pipelineStages.map((stage) => (
        <div key={stage.id} className="min-w-[300px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {stage.name}{" "}
                <span className="ml-2 text-muted-foreground">
                  {deals.filter((deal) => deal.stage === stage.name).length}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {deals
                .filter((deal) => deal.stage === stage.name)
                .map((deal) => (
                  <Card key={deal.id}>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">{deal.title}</h3>
                        <div className="text-sm text-muted-foreground">
                          ${deal.value.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {deal.probability}% probability
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}