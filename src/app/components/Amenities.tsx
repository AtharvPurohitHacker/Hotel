import { Waves, Utensils, Dumbbell, Wine, Sparkles, Car } from "lucide-react";

const amenities = [
  {
    icon: <Waves size={22} />,
    name: "Infinity Pool",
    description: "An 25-metre heated pool with panoramic views of the city skyline.",
    image: "https://images.unsplash.com/photo-1623718649591-311775a30c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    icon: <Sparkles size={22} />,
    name: "Apex Spa",
    description: "Seven treatment rooms offering holistic rituals, hydrotherapy, and bespoke therapies.",
    image: "https://images.unsplash.com/photo-1693933714044-131908e39427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    icon: <Utensils size={22} />,
    name: "Le Jardin",
    description: "Michelin-starred dining celebrating seasonal produce with a contemporary French lens.",
    image: "https://images.unsplash.com/photo-1730367019960-9906d9cbbf05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    icon: <Dumbbell size={22} />,
    name: "Fitness Centre",
    description: "State-of-the-art equipment, personal trainers, and daily group classes.",
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    icon: <Wine size={22} />,
    name: "The Cellar Bar",
    description: "An intimate bar with over 800 wine labels and handcrafted cocktails.",
    image: "https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    icon: <Car size={22} />,
    name: "Concierge & Valet",
    description: "24-hour butler service, private transfers, and curated city experiences.",
    image: "https://images.unsplash.com/photo-1742844552700-3926862c5311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
];

export function Amenities() {
  return (
    <section className="py-28 px-6 bg-secondary/30" id="amenities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-3">Experiences</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-4xl md:text-5xl mb-5">
            Every Pleasure, Considered
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
            From morning laps to evening cocktails, Apex Retreats curates every moment of your stay with meticulous attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,169,110,0.1)]">
          {amenities.map((a) => (
            <div key={a.name} className="bg-background group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0f0d0a]/50" />
                <div className="absolute bottom-4 left-5 text-primary">{a.icon}</div>
              </div>
              <div className="p-6 border-t border-[rgba(201,169,110,0.1)]">
                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-lg mb-2">
                  {a.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
