import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = "~/portfolio", children, className }: TerminalWindowProps) => {
  return (
    <div className={cn("border border-border bg-card", className)}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 bg-metal" />
          <span className="h-3 w-3 bg-caution" />
          <span className="h-3 w-3 bg-terminal" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
