"use client";

import { analyticsData } from "@/lib/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function AnalyticsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${analyticsData.revenue.current.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500">{analyticsData.revenue.trend}</span>{" "}
            vs previous period
          </p>
          <div className="mt-4 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.revenue.breakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Deals Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-bold">
                ${analyticsData.deals.value.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Total deal value</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-lg font-bold text-green-500">
                  {analyticsData.deals.won}
                </div>
                <p className="text-sm text-muted-foreground">Won</p>
              </div>
              <div>
                <div className="text-lg font-bold text-red-500">
                  {analyticsData.deals.lost}
                </div>
                <p className="text-sm text-muted-foreground">Lost</p>
              </div>
              <div>
                <div className="text-lg font-bold">
                  {analyticsData.deals.active}
                </div>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="text-lg font-bold">
                {analyticsData.activities.calls}
              </div>
              <p className="text-sm text-muted-foreground">Calls made</p>
            </div>
            <div>
              <div className="text-lg font-bold">
                {analyticsData.activities.emails}
              </div>
              <p className="text-sm text-muted-foreground">Emails sent</p>
            </div>
            <div>
              <div className="text-lg font-bold">
                {analyticsData.activities.meetings}
              </div>
              <p className="text-sm text-muted-foreground">Meetings held</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}