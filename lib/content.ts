export const services = [
  {
    id: "strategy",
    name: "AI Consulting & Strategy",
    short: "Find the right opportunity. Build a clear path forward.",
    description:
      "Identify where AI creates real value, evaluate models and tools, and turn your priorities into a practical adoption roadmap.",
    intro:
      "Make confident decisions about where AI belongs in your organization, before committing to a solution.",
    problems:
      "Unclear use cases, fragmented experiments, uncertainty about cost, and a crowded landscape of AI tools can make it difficult to know where to start.",
    solutions: [
      "AI opportunity and workflow assessments",
      "Adoption roadmaps and implementation planning",
      "Model and platform evaluation",
      "Data readiness and governance planning",
    ],
    examples:
      "Use cases include prioritizing customer support automation, assessing document workflows, and choosing between hosted and open models.",
    cta: "Plan your AI roadmap",
  },
  {
    id: "integrations",
    name: "AI Integrations",
    short: "Bring intelligence into the tools you already use.",
    description:
      "Connect AI with your websites, applications, CRMs, WhatsApp, email, databases and internal systems.",
    intro:
      "Make AI part of the software and workflows your organization already relies on.",
    problems:
      "Standalone AI tools create extra steps when they cannot access the right context or connect to the place where work happens.",
    solutions: [
      "AI features for existing websites and applications",
      "CRM, email and WhatsApp integrations",
      "Connections to internal data and APIs",
      "Context-aware assistants inside existing workflows",
    ],
    examples:
      "Typical building blocks include APIs, webhooks, secure connectors, retrieval systems and messaging platforms.",
    cta: "Connect your systems",
  },
  {
    id: "solutions",
    name: "Custom AI Solutions",
    short: "Purpose-built intelligence for your specific problem.",
    description:
      "Design and engineer AI products, assistants, search systems and applications around your users, data and goals.",
    intro:
      "Build an AI system shaped around a real need, with the right experience, architecture and evaluation approach.",
    problems:
      "Off-the-shelf products do not always fit your domain, your data, your users or the way your organization operates.",
    solutions: [
      "AI assistants and domain-specific applications",
      "Retrieval-augmented generation and search",
      "Document intelligence and information extraction",
      "Recommendation and decision-support systems",
    ],
    examples:
      "Use cases include searching internal knowledge, extracting information from documents and creating assistants with relevant organizational context.",
    cta: "Discuss a custom solution",
  },
  {
    id: "automation",
    name: "AI Automation & Agents",
    short: "Move from repetitive tasks to connected workflows.",
    description:
      "Automate business processes and build AI agents that can carry out work across your systems and tools.",
    intro:
      "Give repeatable work a reliable workflow, with AI where judgment and context can help.",
    problems:
      "Manual handoffs, repetitive data entry and disconnected processes take time away from work that needs people.",
    solutions: [
      "Cross-system workflow automation",
      "AI agents with defined tools and permissions",
      "Document and message processing workflows",
      "Human review and approval steps",
    ],
    examples:
      "Use cases include triaging incoming requests, preparing recurring reports and coordinating work across email, CRMs and internal applications.",
    cta: "Explore an automation",
  },
  {
    id: "training",
    name: "AI Training & Education",
    short: "Give your people the confidence to work with AI.",
    description:
      "Practical workshops, AI literacy programs and technical training for leaders, business teams and developers.",
    intro:
      "Build the understanding and hands-on skills your teams need to use AI thoughtfully and effectively.",
    problems:
      "Access to AI tools does not automatically create capability. Teams need practical knowledge, relevant examples and space to learn.",
    solutions: [
      "Leadership workshops and adoption planning",
      "AI literacy and practical business workshops",
      "Developer and technical training",
      "Responsible use and hands-on team sessions",
    ],
    examples:
      "Programs can cover identifying useful AI tasks, evaluating responses, working with organizational information and building integrated applications.",
    cta: "Train your team",
  },
  {
    id: "support",
    name: "AI Enablement & Support",
    short: "Keep your AI useful as your organization evolves.",
    description:
      "Monitor, maintain and improve deployed AI systems, from models and prompts to integrations and ongoing adoption.",
    intro: "Support the technology and the people using it after deployment.",
    problems:
      "Models, business requirements and connected tools change. AI systems need attention to remain useful, reliable and aligned with your goals.",
    solutions: [
      "Monitoring and ongoing technical support",
      "Model, prompt and retrieval improvements",
      "Integration maintenance and troubleshooting",
      "Governance and team enablement",
    ],
    examples:
      "Ongoing work may include reviewing output quality, maintaining API connections, updating knowledge sources and improving workflows based on feedback.",
    cta: "Support your AI systems",
  },
];
export const projects = [
  {
    id: "dukani",
    name: "Dukani",
    category: "AI commerce / WhatsApp AI agent",
    tagline: "Your business, always ready to sell.",
    description:
      "An autonomous AI sales agent that lives entirely inside WhatsApp. Dukani helps businesses serve and sell to customers without requiring someone to be constantly online.",
    detail:
      "It answers product questions, guides purchasing decisions and handles sales conversations automatically in the channel customers already use.",
    tags: ["Conversational commerce", "WhatsApp", "24/7 engagement"],
  },
  {
    id: "veritas",
    name: "Veritas ID",
    category: "AI / Data integrity",
    tagline: "Trust that travels with the data.",
    description:
      "Verifiable data artifacts that preserve trust and provenance as information moves from its source into reports, visualizations and shared work.",
    detail:
      "Veritas ID connects information back to its origin and context. The project has worked with World Bank Data360 indicators and explores how provenance and verification help people understand the data they encounter.",
    tags: ["Data provenance", "Verification", "Source context"],
    url: "https://veritasid.one",
  },
  {
    id: "workpal",
    name: "WorkPal",
    category: "AI workforce / Future of work",
    tagline: "Your AI workforce.",
    description:
      "AI coworkers with defined roles, identities, tools and permissions. WorkPal enables AI employees to work through the systems organizations already use.",
    detail:
      "An engineering AI coworker can monitor repositories, assist with pull requests, answer questions in Slack and prepare recurring reports — within the permissions it is given. Integrations can include Slack, email, GitHub and Google Drive.",
    tags: ["AI coworkers", "Tool integrations", "Controlled permissions"],
    url: "https://workpal.one",
  },
];
export const insights = [
  {
    slug: "finding-your-first-ai-use-case",
    title: "Finding your first useful AI use case",
    category: "Strategy",
    summary:
      "Start with a real workflow, a clear problem and a way to know whether the solution helps.",
    paragraphs: [
      [
        "Start with the work",
        "Look for a recurring task that takes time, depends on information and has a clear owner. Speak with the people doing it. Understand the exceptions and the decisions they make before choosing a model or tool.",
      ],
      [
        "Check the foundations",
        "Identify the information the system needs, where that information lives and who is allowed to access it. A useful experiment should fit the data and permissions available to the organization.",
      ],
      [
        "Define a small, useful outcome",
        "Choose a bounded first version. It might help someone search internal documents, prepare a draft or classify incoming requests. Decide how you will review quality, handle mistakes and compare the new workflow with the current one.",
      ],
      [
        "Plan for adoption",
        "The people using the system need to understand its purpose and limits. Include feedback and human review early, then improve the workflow based on actual use.",
      ],
    ],
  },
  {
    slug: "why-integration-matters",
    title: "Why the integration is part of the intelligence",
    category: "Engineering",
    summary:
      "AI becomes useful when it has the right context and connects to the place where work happens.",
    paragraphs: [
      [
        "Context makes the difference",
        "A model can generate an answer, but a useful business system needs relevant information. That information may live in product catalogs, internal documents, a CRM or the history of a customer request.",
      ],
      [
        "Connect carefully",
        "An integration needs more than a connection to an API. It should respect access permissions, account for changing data and make it clear when an action needs a person to review it.",
      ],
      [
        "Design the whole workflow",
        "Think about what happens before and after an AI response. Where does a request enter? What tools are available? Who checks important decisions? How does the result get back to the person who needs it?",
      ],
      [
        "Keep it useful",
        "Connected tools change over time. Monitoring, maintenance and feedback help an AI integration keep working as the organization evolves.",
      ],
    ],
  },
  {
    slug: "building-team-ai-capability",
    title: "From access to capability: helping teams use AI",
    category: "Education",
    summary:
      "A practical approach to learning that connects AI knowledge with the work people do every day.",
    paragraphs: [
      [
        "Make learning relevant",
        "Begin with the tasks and questions your team already encounters. Leaders, business teams and developers need different levels of depth, but each group benefits from examples that reflect its work.",
      ],
      [
        "Build judgment alongside skills",
        "Practical learning should include checking outputs, recognizing uncertainty and deciding when a person needs to review an answer. Responsible use belongs inside the exercise, alongside the technical skills.",
      ],
      [
        "Learn by doing",
        "Give teams a bounded problem to explore. Have them compare approaches, discuss what worked and identify the information they would need to use the solution in practice.",
      ],
      [
        "Keep learning connected to adoption",
        "Training can support a wider adoption plan. Create space for questions and feedback as tools are introduced, and use real experience to guide the next learning session.",
      ],
    ],
  },
];
