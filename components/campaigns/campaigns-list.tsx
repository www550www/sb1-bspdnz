"use client";

import { campaigns } from "@/lib/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

export function CampaignsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader>
            <CardTitle>{campaign.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">
                    {campaign.type === "email"
                      ? `${campaign.converted} conversions`
                      : `${campaign.meetings} meetings`}
                  </span>
                </div>
                <Progress
                  value={
                    campaign.type === "email"
                      ? (campaign.converted / campaign.sent) * 100
                      : (campaign.meetings / campaign.calls) * 100
                  }
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Start Date</div>
                  <div>{campaign.startDate}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">End Date</div>
                  <div>{campaign.endDate}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Type</div>
                  <div className="capitalize">{campaign.type}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Status</div>
                  <div className="capitalize">{campaign.status}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}