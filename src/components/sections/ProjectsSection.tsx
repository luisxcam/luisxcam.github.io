import TerminalWindow from "@/components/TerminalWindow";

const projects = [
  {
    name: "RIFF_ENGINE",
    desc: "Real-time audio processing pipeline built with Rust and WebAssembly",
    tech: ["Rust", "WASM", "WebAudio"],
    status: "DEPLOYED",
  },
  {
    name: "VOID_CMS",
    desc: "Headless CMS with a terminal-based admin interface",
    tech: ["Node.js", "PostgreSQL", "React"],
    status: "IN_PROGRESS",
  },
  {
    name: "MOSH_PIT",
    desc: "Real-time collaborative code editor with conflict resolution",
    tech: ["TypeScript", "CRDTs", "WebSocket"],
    status: "DEPLOYED",
  },
  {
    name: "BLACK_MATTER",
    desc: "CLI tool for automated infrastructure provisioning",
    tech: ["Go", "Terraform", "Docker"],
    status: "ARCHIVED",
  },
];

const ProjectsSection = () => {
  return (
    <div className="space-y-4">
      <TerminalWindow title="~/portfolio/projects/">
        <div className="text-xs text-muted-foreground mb-4">
          <span className="text-terminal">$</span> ls -la projects/
        </div>
        <div className="text-xs text-muted-foreground mb-6">
          total {projects.length} — showing all entries
        </div>
      </TerminalWindow>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-border bg-card p-5 hover:border-terminal transition-colors duration-75 group glitch-hover cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-lg text-foreground group-hover:text-terminal transition-colors duration-75">
                {project.name}
              </h3>
              <span className={`text-[10px] px-2 py-0.5 border ${
                project.status === "DEPLOYED" ? "border-terminal text-terminal" :
                project.status === "IN_PROGRESS" ? "border-caution text-caution" :
                "border-muted-foreground text-muted-foreground"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{project.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] border border-border px-1.5 py-0.5 text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
