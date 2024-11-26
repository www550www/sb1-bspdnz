"use client";

import { Shell } from "@/components/layout/shell";
import { ContactsView } from "@/components/contacts/contacts-view";

export default function ContactsPage() {
  return (
    <Shell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Contacts</h1>
        </div>
        <ContactsView />
      </div>
    </Shell>
  );
}