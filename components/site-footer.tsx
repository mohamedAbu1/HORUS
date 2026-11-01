import { ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="/contact">Start a project <ArrowRight size={14} /></a>
      <span>© 2026 HORUS ALABASTER ATELIER</span>
      <span>Made for spaces that glow</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
