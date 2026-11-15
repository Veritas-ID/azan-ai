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
export const experiments: Experiment[] = [];

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
