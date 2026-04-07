import TerminalWindow from "@/components/TerminalWindow";
import TypewriterText from "@/components/TypewriterText";

const AboutSection = () => {
  return (
    <div className="space-y-6">
      <TerminalWindow title="~/portfolio/about.md">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            <TypewriterText text="DEVELOPER // METALHEAD" speed={40} />
          </h1>
          <div className="h-px bg-border" />
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-terminal">$</span> cat about.md
            </p>
            <p>
              Full-stack developer who writes code like riffs — <span className="text-metal">heavy</span>,{" "}
              <span className="text-terminal">precise</span>, and always in time.
            </p>
            <p>
              I build performant web applications with clean architecture and brutal efficiency.
              When I'm not pushing commits, I'm pushing mosh pits.
            </p>
            <div className="border border-border p-4 mt-6">
              <div className="text-xs text-muted-foreground mb-2">// STACK.config</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {["React", "TypeScript", "Node.js", "PostgreSQL", "Rust", "Docker", "Linux", "Git", "AWS"].map((tech) => (
                  <span key={tech} className="border border-border px-2 py-1 text-terminal hover:bg-muted transition-colors duration-75">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="~/portfolio/status">
        <div className="text-xs space-y-1">
          <p><span className="text-terminal">▸</span> Available for freelance work</p>
          <p><span className="text-terminal">▸</span> Open source contributor</p>
          <p><span className="text-metal">▸</span> Currently listening to: Meshuggah — Bleed</p>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default AboutSection;
