"use client";

import { Shell } from "@/components/layout/shell";
import { CampaignsList } from "@/components/campaigns/campaigns-list";

export default function CampaignsPage() {
  return (
    <Shell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Campaigns</h1>
        </div>
        <CampaignsList />
      </div>
    </Shell>
  );
}