export type ExperimentStatus = "Exploring" | "Prototype" | "Live" | "Retired";

export type Experiment = {
  /** Used as the anchor on the page, e.g. /#my-experiment */
  id: string;
  name: string;
  status: ExperimentStatus;
  /** One or two sentences: the question being tested and what exists so far. */
  summary: string;
  /** Short topic labels. */
  tags: string[];
  /** Where people can try it or read more. Leave out until there is something to open. */
  url?: string;
};

/**
 * Experiments shown on the Labs home page, newest first.
 * Add real entries only. While this is empty the page shows an honest
 * "nothing public yet" state.
 */
export const experiments: Experiment[] = [
  {
    id: "dukani",
    name: "Dukani",
    status: "Prototype",
    summary:
      "Can an AI agent that lives entirely inside WhatsApp hold a useful conversation with customers? A working prototype pairs a LLaMA 3 model with live web search and a per-user memory of preferences.",
    tags: ["WhatsApp", "AI agents", "Search grounding", "Conversational memory"],
  },
  {
    id: "veritas-id",
    name: "Veritas ID",
    status: "Prototype",
    summary:
      "Can information stay connected to its origin and context as it is reused? A prototype working with World Bank Data360 indicators explores provenance and verification.",
    tags: ["Provenance", "Trusted data", "LLMs"],
    url: "https://veritasid.one",
  },
  {
    id: "workpal",
    name: "WorkPal",
    status: "Exploring",
    summary:
      "What does an AI coworker need to work safely inside an organization? We are exploring agents with a defined role, identity, set of tools and clear permission limits.",
    tags: ["AI coworkers", "Agent permissions", "Tool use"],
    url: "https://workpal.one",
  },
];

export const statuses: { name: ExperimentStatus; meaning: string }[] = [
  { name: "Exploring", meaning: "A question we are testing." },
  { name: "Prototype", meaning: "Something you can try. Expect rough edges." },
  { name: "Live", meaning: "Stable enough to use regularly." },
  { name: "Retired", meaning: "Finished or set aside, with what we learned." },
];

/** Themes drawn from the work described on azanai.one. */
export const focusAreas = [
  {
    name: "Agents in messaging",
    copy: "AI agents that answer questions and carry a conversation inside channels people already use, such as WhatsApp.",
  },
  {
    name: "Provenance and trusted data",
    copy: "Keeping information connected to its source and context as it moves into reports, charts and shared work.",
  },
  {
    name: "AI coworkers and permissions",
    copy: "Agents with a defined role, a set of tools and clear limits on what they are allowed to do.",
  },
  {
    name: "Retrieval and document intelligence",
    copy: "Search and information extraction over an organization’s own documents and knowledge.",
  },
];

export const principles = [
  {
    name: "One question at a time",
    copy: "Each experiment is small and specific, built to find out whether one idea holds up.",
  },
  {
    name: "Shown early",
    copy: "We share work while it is still taking shape, so it can be tried and questioned before it is polished.",
  },
  {
    name: "Clear about status",
    copy: "Every experiment carries a label. Experiments can change, and some will be retired.",
  },
];
