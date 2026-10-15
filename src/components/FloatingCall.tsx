import { Phone } from 'lucide-react';

export function FloatingCall() {
  return (
    <a
      href="tel:0505297717"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold shadow-2xl shadow-primary-500/40 hover:scale-105 transition-transform lg:hidden"
      aria-label="התקשר"
    >
      <Phone className="w-5 h-5 animate-pulse" />
      חייגו עכשיו
    </a>
  );
}
