import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-[rgba(201,169,110,0.15)] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-5">
              <p className="text-primary tracking-[0.3em] text-xs uppercase">Apex</p>
              <p style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-2xl tracking-wide">Retreats</p>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-6">
              A sanctuary of exceptional hospitality in the heart of the city since 1923.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground text-xs tracking-[0.3em] uppercase mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Rooms & Suites", "Spa & Wellness", "Dining", "Events & Weddings", "Business"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-xs tracking-[0.3em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {["Concierge", "Airport Transfer", "Room Service", "Valet Parking", "Business Centre"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-xs tracking-[0.3em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-xs">
                <MapPin size={13} className="text-primary mt-0.5 shrink-0" />
                12 Avenue des Lumières,<br />75008 Paris, France
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-xs">
                <Phone size={13} className="text-primary shrink-0" />
                +33 1 42 65 80 00
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-xs">
                <Mail size={13} className="text-primary shrink-0" />
                reservations@apexretreats.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(201,169,110,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© 2025 Apex Retreats. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-muted-foreground hover:text-primary text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
