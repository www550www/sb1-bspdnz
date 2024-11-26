export const companies = [
  {
    id: 1,
    name: "Acme Corp",
    industry: "Technology",
    employees: 500,
    revenue: "$50M",
    status: "Active",
    location: "New York, NY",
    contacts: [1, 2],
    deals: [1, 3],
  },
  {
    id: 2,
    name: "Global Industries",
    industry: "Manufacturing",
    employees: 1000,
    revenue: "$100M",
    status: "Active",
    location: "Chicago, IL",
    contacts: [3],
    deals: [2],
  },
];

export const contacts = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    email: "john@acme.com",
    phone: "+1 (555) 123-4567",
    company: 1,
    status: "Active",
    lastContact: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    email: "jane@acme.com",
    phone: "+1 (555) 123-4568",
    company: 1,
    status: "Active",
    lastContact: "2024-01-20",
  },
];

export const deals = [
  {
    id: 1,
    title: "Enterprise License",
    value: 50000,
    company: 1,
    stage: "Proposal",
    probability: 70,
    expectedCloseDate: "2024-03-15",
  },
  {
    id: 2,
    title: "Manufacturing Solution",
    value: 75000,
    company: 2,
    stage: "Negotiation",
    probability: 85,
    expectedCloseDate: "2024-02-28",
  },
];

export const campaigns = [
  {
    id: 1,
    name: "Q1 Outreach",
    type: "email",
    status: "active",
    sent: 1500,
    opened: 750,
    clicked: 250,
    converted: 50,
    startDate: "2024-01-01",
    endDate: "2024-03-31",
  },
  {
    id: 2,
    name: "Product Launch",
    type: "call",
    status: "planned",
    calls: 500,
    connected: 200,
    interested: 75,
    meetings: 25,
    startDate: "2024-02-01",
    endDate: "2024-02-28",
  },
];

export const events = [
  {
    id: 1,
    title: "Client Meeting",
    start: new Date(2024, 1, 15, 10, 0),
    end: new Date(2024, 1, 15, 11, 0),
    type: "meeting",
    description: "Discuss new requirements",
    attendees: [1, 2],
  },
  {
    id: 2,
    title: "Sales Call",
    start: new Date(2024, 1, 16, 14, 0),
    end: new Date(2024, 1, 16, 15, 0),
    type: "call",
    description: "Product demo",
    attendees: [3],
  },
];

export const pipelineStages = [
  { id: "lead", name: "Lead" },
  { id: "contact", name: "Contact Made" },
  { id: "meeting", name: "Meeting Scheduled" },
  { id: "proposal", name: "Proposal" },
  { id: "negotiation", name: "Negotiation" },
  { id: "closed", name: "Closed Won" },
];

export const analyticsData = {
  revenue: {
    current: 250000,
    previous: 200000,
    trend: "+25%",
    breakdown: [
      { month: "Jan", value: 40000 },
      { month: "Feb", value: 45000 },
      { month: "Mar", value: 55000 },
    ],
  },
  deals: {
    won: 25,
    lost: 10,
    active: 45,
    value: 750000,
  },
  activities: {
    calls: 250,
    emails: 1500,
    meetings: 45,
  },
};