import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rooms } from "./components/Rooms";
import { Amenities } from "./components/Amenities";
import { Testimonials } from "./components/Testimonials";
import { BookingBanner } from "./components/BookingBanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Testimonials />
      <BookingBanner />
      <Footer />

      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
