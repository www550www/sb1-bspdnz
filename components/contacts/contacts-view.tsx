"use client";

import { useState } from "react";
import { ContactsTable } from "./contacts-table";
import { ContactsToolbar } from "./contacts-toolbar";
import { ContactDialog } from "./contact-dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useToast } from "../ui/use-toast";

export function ContactsView() {
  const [open, setOpen] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const { toast } = useToast();

  const handleImport = async (file: File) => {
    toast({
      title: "Importing contacts",
      description: "Your contacts are being imported...",
    });
  };

  const handleExport = () => {
    toast({
      title: "Exporting contacts",
      description: "Your contacts are being exported...",
    });
  };

  const handleBulkDelete = () => {
    toast({
      title: "Deleting contacts",
      description: `${selectedContacts.length} contacts will be deleted`,
    });
    setSelectedContacts([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <ContactsToolbar
          selectedCount={selectedContacts.length}
          onImport={handleImport}
          onExport={handleExport}
          onDelete={handleBulkDelete}
        />
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Contact
        </Button>
      </div>
      <ContactsTable
        selectedContacts={selectedContacts}
        onSelectedContactsChange={setSelectedContacts}
      />
      <ContactDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}