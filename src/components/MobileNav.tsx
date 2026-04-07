import { cn } from "@/lib/utils";
import { FileText, FolderOpen, Music, User, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MobileNavProps {
  activeSection: string;
}

const items = [
  { id: "about", label: "about.md", icon: User },
  { id: "projects", label: "projects/", icon: FolderOpen },
  { id: "blog", label: "blog/", icon: FileText },
  { id: "playlist", label: "playlist.json", icon: Music },
  { id: "contact", label: "contact.sh", icon: Mail },
];

const MobileNav = ({ activeSection }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-background px-4 py-3">
        <span className="text-xs text-terminal font-mono">~/portfolio</span>
        <button onClick={() => setOpen(!open)} className="text-foreground">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-12">
          <nav className="p-4 space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => { navigate(`/${item.id}`); setOpen(false); }}
                className={cn(
                  "flex w-full items-center gap-3 px-3 py-2 text-sm font-mono transition-colors duration-75",
                  activeSection === item.id ? "text-terminal bg-muted" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
