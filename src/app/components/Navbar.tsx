import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{ fontFamily: "var(--font-body)" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0f0d0a]/95 backdrop-blur-sm border-b border-[rgba(201,169,110,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-primary tracking-[0.3em] text-xs uppercase">Apex</span>
          <span style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-xl tracking-wide">Retreats</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Rooms", "Amenities", "Dining", "Experiences", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground/70 hover:text-primary transition-colors text-sm tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-foreground/70 hover:text-primary text-sm tracking-widest uppercase transition-colors">
            Sign In
          </a>
          <a
            href="#book"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Book Now
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f0d0a] border-t border-[rgba(201,169,110,0.15)] px-6 py-6 flex flex-col gap-5">
          {["Rooms", "Amenities", "Dining", "Experiences", "Contact"].map((item) => (
            <a key={item} href="#" className="text-foreground/70 hover:text-primary text-sm tracking-widest uppercase transition-colors">
              {item}
            </a>
          ))}
          <a href="#book" className="bg-primary text-primary-foreground px-6 py-3 text-xs tracking-widest uppercase text-center mt-2">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
