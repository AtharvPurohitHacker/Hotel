import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Isabelle Fontaine",
    location: "Paris, France",
    stay: "Grand Suite — April 2025",
    rating: 5,
    text: "An experience that transcends mere accommodation. The staff anticipated every need before we voiced it, and the suite's terrace at sunset was simply unforgettable.",
    avatar: "IF",
  },
  {
    id: 2,
    name: "James Whitmore",
    location: "London, UK",
    stay: "Presidential Suite — February 2025",
    rating: 5,
    text: "Apex Retreats sets a standard few hotels in the world can rival. The concierge arranged a private gallery tour that became the highlight of our entire trip.",
    avatar: "JW",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    stay: "Junior Suite — January 2025",
    rating: 5,
    text: "The spa alone is worth the visit. Three hours of treatments and I emerged feeling reborn. The team's craft and discretion are extraordinary.",
    avatar: "YT",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-3">Guest Stories</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-4xl md:text-5xl">
            Voices of Our Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(201,169,110,0.1)]">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-card p-10 border-t border-[rgba(201,169,110,0.1)]">
              <Quote size={28} className="text-primary/30 mb-6" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-8 italic" style={{ fontFamily: "var(--font-display)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs tracking-wider shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                  <p className="text-primary/60 text-xs mt-0.5">{t.stay}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={11} className="text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
