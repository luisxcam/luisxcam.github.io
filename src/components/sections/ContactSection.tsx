import TerminalWindow from "@/components/TerminalWindow";
import { useState } from "react";

const ContactSection = () => {
  const [lines, setLines] = useState<string[]>([
    "#!/bin/bash",
    "# contact.sh — reach out",
    "",
    'echo "Choose your channel:"',
    "",
  ]);

  return (
    <TerminalWindow title="~/portfolio/contact.sh">
      <div className="space-y-1 text-xs mb-6">
        {lines.map((line, i) => (
          <div key={i} className={line.startsWith("#") ? "text-muted-foreground" : "text-foreground"}>
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {[
          { label: "GitHub", value: "github.com/yourusername", prefix: "git" },
          { label: "Email", value: "dev@yourdomain.com", prefix: "mail" },
          { label: "LinkedIn", value: "linkedin.com/in/yourusername", prefix: "link" },
          { label: "Twitter/X", value: "@yourhandle", prefix: "x" },
        ].map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 min-w-0 border border-border p-3 text-xs hover:border-terminal hover:bg-muted/30 transition-colors duration-75 group"
          >
            <span className="text-terminal">[{item.prefix}]</span>
            <span className="text-muted-foreground">{item.label}:</span>
            <span className="text-foreground group-hover:text-terminal transition-colors duration-75 min-w-0 truncate">{item.value}</span>
          </a>
        ))}
      </div>

      <div className="mt-6 text-xs text-muted-foreground">
        <span className="text-terminal">$</span> echo "Let's build something <span className="text-metal">brutal</span> together."
      </div>
    </TerminalWindow>
  );
};

export default ContactSection;
