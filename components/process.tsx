const steps = [
  [
    "Understand",
    "We understand the organization, problem, users and opportunity.",
  ],
  [
    "Design",
    "We determine how AI should fit into the existing business and technology.",
  ],
  [
    "Build & integrate",
    "We build the solution and connect it with the systems where work already happens.",
  ],
  ["Scale", "We deploy, improve, support and help teams adopt the technology."],
];
export function ProcessStep({
  step,
  index,
}: {
  step: string[];
  index: number;
}) {
  return (
    <div className="process-step">
      <span className="step-number">0{index + 1}</span>
      <h3>{step[0]}</h3>
      <p>{step[1]}</p>
    </div>
  );
}
export function Process() {
  return (
    <div className="process-grid">
      {steps.map((s, i) => (
        <ProcessStep key={s[0]} step={s} index={i} />
      ))}
    </div>
  );
}
