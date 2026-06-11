import { useState } from "react";
import { Star, Wifi, Wind, Bath, Coffee } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "Standard",
    price: 26800,
    size: "42 m²",
    rating: 4.8,
    reviews: 214,
    description: "Refined comfort with city views, plush king bed, and Italian marble bathroom.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    amenities: ["King Bed", "City View", "Marble Bath", "Minibar"],
  },
  {
    id: 2,
    name: "Grand Suite",
    type: "Suite",
    price: 56900,
    size: "88 m²",
    rating: 4.9,
    reviews: 97,
    description: "Expansive living suite with panoramic views, butler service, and private terrace.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    amenities: ["King Bed", "Panoramic View", "Private Terrace", "Butler"],
  },
  {
    id: 3,
    name: "Junior Suite",
    type: "Suite",
    price: 40200,
    size: "65 m²",
    rating: 4.7,
    reviews: 163,
    description: "Generous proportions, separate lounge, and handcrafted furnishings throughout.",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    amenities: ["King Bed", "Garden View", "Lounge Area", "Espresso"],
  },
  {
    id: 4,
    name: "Presidential Suite",
    type: "Presidential",
    price: 100500,
    size: "140 m²",
    rating: 5.0,
    reviews: 38,
    description: "The pinnacle of grandeur — two bedrooms, a private dining room, and bespoke art collection.",
    image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    amenities: ["2 Bedrooms", "360° View", "Private Dining", "Grand Piano"],
  },
];

const filters = ["All", "Standard", "Suite", "Presidential"];

const amenityIcons: Record<string, React.ReactNode> = {
  "King Bed": <Bath size={13} />,
  "Wifi": <Wifi size={13} />,
  "Air Conditioning": <Wind size={13} />,
  "Espresso": <Coffee size={13} />,
};

export function Rooms() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? rooms : rooms.filter((r) => r.type === activeFilter);

  return (
    <section className="py-28 px-6 bg-background" id="rooms">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-primary tracking-[0.4em] text-xs uppercase mb-3">Accommodations</p>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-4xl md:text-5xl">
              Our Rooms & Suites
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-xs tracking-widest uppercase transition-all border ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-[rgba(201,169,110,0.3)] text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(201,169,110,0.1)]">
          {filtered.map((room) => (
            <div
              key={room.id}
              className="bg-background group cursor-pointer"
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredRoom === room.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 border border-primary/40 text-primary text-xs tracking-widest uppercase px-3 py-1">
                    {room.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#0f0d0a]/70 px-2 py-1">
                  <Star size={11} className="text-primary fill-primary" />
                  <span className="text-foreground text-xs">{room.rating}</span>
                  <span className="text-muted-foreground text-xs">({room.reviews})</span>
                </div>
              </div>

              <div className="p-7 border-t border-[rgba(201,169,110,0.1)]">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-xl mb-1">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase">{room.size}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary text-xl" style={{ fontFamily: "var(--font-display)" }}>
                      ₹{room.price.toLocaleString("en-IN")}
                    </div>
                    <div className="text-muted-foreground text-xs">per night</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-muted-foreground text-xs border border-[rgba(201,169,110,0.15)] px-3 py-1 flex items-center gap-1.5"
                    >
                      {amenityIcons[a] || null}
                      {a}
                    </span>
                  ))}
                </div>

                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all py-3 text-xs tracking-[0.25em] uppercase">
                  Reserve This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
