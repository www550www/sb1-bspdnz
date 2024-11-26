"use client";

import { cn } from "@/lib/utils";
import {
  BarChart,
  Building2,
  Calendar,
  Contact2,
  LayoutDashboard,
  Mail,
  MessageSquare,
  PieChart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Contacts", href: "/contacts", icon: Contact2 },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Voice Agent", href: "/voice", icon: MessageSquare },
  { name: "Email", href: "/email", icon: Mail },
  { name: "Pipeline", href: "/pipeline", icon: PieChart },
  { name: "Analytics", href: "/analytics", icon: BarChart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-gray-50/40">
      <div className="p-6">
        <h1 className="text-2xl font-bold">ModernCRM</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5",
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 group-hover:text-gray-900"
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}