import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FileText, FolderOpen, Terminal, Music, User, Mail } from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  indent?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, active, indent, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex w-full items-center gap-2 px-3 py-1.5 text-xs font-mono transition-colors duration-75",
      indent && "pl-7",
      active ? "bg-muted text-terminal" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    )}
  >
    {icon}
    {label}
  </button>
);

interface IDESidebarProps {
  activeSection: string;
}

const IDESidebar = ({ activeSection }: IDESidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className="w-56 shrink-0 border-r border-border bg-sidebar h-screen sticky top-0 hidden lg:flex flex-col">
      <div className="border-b border-border px-3 py-2">
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Explorer</span>
      </div>
      <nav className="flex-1 py-2">
        <div className="px-3 py-1 text-[10px] text-muted-foreground uppercase tracking-widest">Portfolio</div>
        <SidebarItem
          icon={<User size={14} />}
          label="about.md"
          active={activeSection === "about"}
          onClick={() => navigate("/about")}
        />
        <SidebarItem
          icon={<FolderOpen size={14} />}
          label="projects/"
          active={activeSection === "projects"}
          onClick={() => navigate("/projects")}
        />
        <SidebarItem
          icon={<FileText size={14} />}
          label="blog/"
          active={activeSection === "blog"}
          onClick={() => navigate("/blog")}
        />
        <SidebarItem
          icon={<Music size={14} />}
          label="playlist.json"
          active={activeSection === "playlist"}
          onClick={() => navigate("/playlist")}
        />
        <SidebarItem
          icon={<Mail size={14} />}
          label="contact.sh"
          active={activeSection === "contact"}
          onClick={() => navigate("/contact")}
        />
      </nav>
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2 text-xs text-terminal">
          <Terminal size={12} />
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </aside>
  );
};

export default IDESidebar;
