"use client";

import { Shell } from "@/components/layout/shell";
import { CompaniesTable } from "@/components/tables/companies-table";

export default function CompaniesPage() {
  return (
    <Shell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Companies</h1>
        </div>
        <CompaniesTable />
      </div>
    </Shell>
  );
}