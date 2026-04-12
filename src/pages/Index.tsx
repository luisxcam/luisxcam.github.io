import { useParams, useNavigate } from "react-router-dom";
import IDESidebar from "@/components/IDESidebar";
import MobileNav from "@/components/MobileNav";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import PlaylistSection from "@/components/sections/PlaylistSection";
import ContactSection from "@/components/sections/ContactSection";

const VALID_SECTIONS = ["about", "projects", "blog", "playlist", "contact"];

const Index = () => {
  const { section, slug } = useParams<{ section?: string; slug?: string }>();
  const navigate = useNavigate();
  // On /blog/:slug route, section param is absent — derive it from slug presence
  const activeSection = slug ? "blog" : VALID_SECTIONS.includes(section ?? "") ? section! : "about";

  const sections: Record<string, React.ReactNode> = {
    about: <AboutSection />,
    projects: <ProjectsSection />,
    blog: <BlogSection slug={slug} />,
    playlist: <PlaylistSection />,
    contact: <ContactSection />,
  };

  return (
    <div className="flex min-h-screen bg-background">
      <IDESidebar activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main className="flex-1 min-h-screen min-w-0 overflow-x-hidden">
        {/* Tab bar */}
        <div className="border-b border-border bg-card hidden lg:flex">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => navigate(`/${key}`)}
              className={`px-4 py-2 text-xs font-mono border-r border-border transition-colors duration-75 ${
                activeSection === key
                  ? "bg-background text-terminal border-b-2 border-b-terminal"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {key === "about" ? "about.md" : key === "playlist" ? "playlist.json" : key === "contact" ? "contact.sh" : `${key}/`}
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-border px-6 py-2 text-[10px] text-muted-foreground font-mono hidden lg:block">
          ~/portfolio/{activeSection === "about" ? "about.md" : activeSection === "playlist" ? "playlist.json" : activeSection === "contact" ? "contact.sh" : `${activeSection}/`}{slug ? `${slug}.md` : ""}
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10 pt-16 lg:pt-6 pb-10">
          {sections[activeSection]}
        </div>

        {/* Status bar */}
        <div className="fixed bottom-0 left-0 lg:left-56 right-0 border-t border-border bg-card px-4 py-1 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
          <span>UTF-8 — LF — TypeScript React</span>
          <span className="text-terminal">● connected</span>
        </div>
      </main>
    </div>
  );
};

export default Index;
