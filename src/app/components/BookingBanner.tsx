export function BookingBanner() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1742844552700-3926862c5311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80"
          alt="Elegant interior with outdoor view"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#0f0d0a]/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-primary tracking-[0.4em] text-xs uppercase mb-4">Direct Booking Advantage</p>
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-foreground text-4xl md:text-5xl mb-6">
          Book Direct & Save 15%
        </h2>
        <p className="text-foreground/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Reserve your stay directly and enjoy complimentary breakfast, flexible check-out, and our best rate guarantee — exclusive to apexretreats.com.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors"
          >
            Reserve Now
          </a>
          <a
            href="#rooms"
            className="border border-foreground/30 text-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </section>
  );
}
