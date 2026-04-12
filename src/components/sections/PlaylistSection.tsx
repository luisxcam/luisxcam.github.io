import TerminalWindow from "@/components/TerminalWindow";

const tracks = [
  { band: "Meshuggah", track: "Bleed", album: "obZen", bpm: "115" },
  { band: "Gojira", track: "Flying Whales", album: "From Mars to Sirius", bpm: "88" },
  { band: "Tool", track: "Lateralus", album: "Lateralus", bpm: "96" },
  { band: "Opeth", track: "Ghost of Perdition", album: "Ghost Reveries", bpm: "130" },
  { band: "Between the Buried and Me", track: "Selkies", album: "Alaska", bpm: "140" },
  { band: "Animals as Leaders", track: "CAFO", album: "Animals as Leaders", bpm: "120" },
  { band: "Periphery", track: "Marigold", album: "P4: Hail Stan", bpm: "150" },
];

const PlaylistSection = () => {
  return (
    <TerminalWindow title="~/portfolio/playlist.json">
      <div className="text-xs text-muted-foreground mb-4">
        <span className="text-terminal">$</span> cat playlist.json | jq '.tracks[]'
      </div>
      <div className="border border-border">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-0 border-b border-border bg-muted px-3 py-1.5 text-[10px] text-muted-foreground uppercase tracking-widest">
          <span>Band</span>
          <span>Track</span>
          <span className="hidden sm:block">Album</span>
          <span className="text-right">BPM</span>
        </div>
        {tracks.map((t, i) => (
          <div
            key={i}
            className="grid grid-cols-3 sm:grid-cols-4 gap-0 border-b border-border px-3 py-2 text-xs hover:bg-muted/50 transition-colors duration-75 group cursor-pointer"
          >
            <span className="text-metal group-hover:text-metal font-medium truncate">{t.band}</span>
            <span className="text-foreground truncate">{t.track}</span>
            <span className="text-muted-foreground truncate hidden sm:block">{t.album}</span>
            <span className="text-right text-terminal">{t.bpm}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-muted-foreground">
        <span className="text-metal">♦</span> Coding fuel. No exceptions.
      </div>
    </TerminalWindow>
  );
};

export default PlaylistSection;
