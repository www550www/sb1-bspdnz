"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Download,
  Search,
  Tags,
  Trash2,
  Upload,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ContactsToolbarProps {
  selectedCount: number;
  onImport: (file: File) => void;
  onExport: () => void;
  onDelete: () => void;
}

export function ContactsToolbar({
  selectedCount,
  onImport,
  onExport,
  onDelete,
}: ContactsToolbarProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search contacts..." className="w-[300px]" />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon">
        <Tags className="h-4 w-4" />
      </Button>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        {selectedCount > 0 && (
          <Button variant="destructive" size="icon" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
        <Button variant="outline" size="icon" onClick={onExport}>
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" asChild>
          <label>
            <Upload className="h-4 w-4" />
            <input
              type="file"
              className="hidden"
              accept=".csv"
              onChange={(e) => e.target.files?.[0] && onImport(e.target.files[0])}
            />
          </label>
        </Button>
      </div>
    </div>
  );
}