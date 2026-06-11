import { useState } from "react";
import { Search, Calendar, Users } from "lucide-react";

export function Hero() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20" id="home">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#0f0d0a]">
        <img
          src="https://images.unsplash.com/photo-1646991761123-d83ce47c30c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80"
          alt="Grand Palais hotel lobby with chandelier"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a] via-[#0f0d0a]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-16 max-w-2xl">
          <p className="text-primary tracking-[0.4em] text-xs uppercase mb-4">Welcome to Apex Retreats</p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-foreground text-5xl md:text-7xl leading-[1.05] mb-6"
          >
            Where Luxury<br />
            <em className="not-italic text-primary">Meets</em> Serenity
          </h1>
          <p className="text-foreground/60 text-base leading-relaxed max-w-md" style={{ fontFamily: "var(--font-body)" }}>
            Nestled in the heart of the city, Apex Retreats offers an unparalleled sanctuary of elegance and comfort for the discerning traveller.
          </p>
        </div>

        {/* Search bar */}
        <div id="book" className="bg-card/90 backdrop-blur-md border border-[rgba(201,169,110,0.2)] p-6 md:p-0 md:flex items-stretch">
          <div className="flex-1 md:flex items-center gap-4 md:px-6 md:py-5 border-b md:border-b-0 md:border-r border-[rgba(201,169,110,0.15)] pb-4 md:pb-0 mb-4 md:mb-0">
            <Search size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <label className="text-muted-foreground text-xs tracking-widest uppercase block mb-1">Destination</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Paris, New York, Tokyo…"
                className="bg-transparent text-foreground w-full outline-none placeholder:text-foreground/30 text-sm"
              />
            </div>
          </div>

          <div className="flex-1 md:flex items-center gap-4 md:px-6 md:py-5 border-b md:border-b-0 md:border-r border-[rgba(201,169,110,0.15)] pb-4 md:pb-0 mb-4 md:mb-0">
            <Calendar size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <label className="text-muted-foreground text-xs tracking-widest uppercase block mb-1">Check In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-foreground w-full outline-none text-sm [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="flex-1 md:flex items-center gap-4 md:px-6 md:py-5 border-b md:border-b-0 md:border-r border-[rgba(201,169,110,0.15)] pb-4 md:pb-0 mb-4 md:mb-0">
            <Calendar size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <label className="text-muted-foreground text-xs tracking-widest uppercase block mb-1">Check Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-foreground w-full outline-none text-sm [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="flex-1 md:flex items-center gap-4 md:px-6 md:py-5 border-b md:border-b-0 md:border-r border-[rgba(201,169,110,0.15)] pb-4 md:pb-0 mb-4 md:mb-0">
            <Users size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <label className="text-muted-foreground text-xs tracking-widest uppercase block mb-1">Guests</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="text-primary hover:text-foreground transition-colors text-lg leading-none"
                >−</button>
                <span className="text-foreground text-sm w-4 text-center">{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="text-primary hover:text-foreground transition-colors text-lg leading-none"
                >+</button>
              </div>
            </div>
          </div>

          <button className="bg-primary text-primary-foreground md:px-10 py-4 md:py-0 text-xs tracking-[0.25em] uppercase hover:bg-primary/90 transition-colors w-full md:w-auto">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
