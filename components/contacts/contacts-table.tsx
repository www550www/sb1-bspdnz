"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { contacts } from "@/lib/data/mock";
import { Badge } from "../ui/badge";
import { ContactActions } from "./contact-actions";

interface ContactsTableProps {
  selectedContacts: string[];
  onSelectedContactsChange: (contacts: string[]) => void;
}

export function ContactsTable({
  selectedContacts,
  onSelectedContactsChange,
}: ContactsTableProps) {
  const toggleAll = () => {
    if (selectedContacts.length === contacts.length) {
      onSelectedContactsChange([]);
    } else {
      onSelectedContactsChange(contacts.map((contact) => contact.id.toString()));
    }
  };

  const toggleOne = (id: string) => {
    if (selectedContacts.includes(id)) {
      onSelectedContactsChange(selectedContacts.filter((c) => c !== id));
    } else {
      onSelectedContactsChange([...selectedContacts, id]);
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedContacts.length === contacts.length}
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Contact</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>
                <Checkbox
                  checked={selectedContacts.includes(contact.id.toString())}
                  onCheckedChange={() => toggleOne(contact.id.toString())}
                />
              </TableCell>
              <TableCell className="font-medium">{contact.name}</TableCell>
              <TableCell>{contact.title}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Badge
                  variant={contact.status === "Active" ? "default" : "secondary"}
                >
                  {contact.status}
                </Badge>
              </TableCell>
              <TableCell>{contact.lastContact}</TableCell>
              <TableCell>
                <ContactActions contact={contact} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}