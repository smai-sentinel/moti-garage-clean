import { useEffect, useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';

const links = [
  { href: '#home', label: 'ראשי' },
  { href: '#services', label: 'שירותים' },
  { href: '#about', label: 'אודות' },
  { href: '#gallery', label: 'גלריה' },
  { href: '#testimonials', label: 'ביקורות' },
  { href: '#contact', label: 'צור קשר' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-lg shadow-2xl shadow-black/50 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-accent-400 border-2 border-dark-900" />
          </div>
          <div className="text-right">
            <div className="text-white font-black text-lg leading-none tracking-tight">מוסך מוטי</div>
            <div className="text-primary-400 text-[11px] font-medium mt-0.5">50 שנות ניסיון</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-lg text-dark-200 hover:text-white hover:bg-white/5 font-medium transition-all duration-200 text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0505297717"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-sm shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            050-529-7717
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-xl glass flex items-center justify-center text-white"
          aria-label="תפריט"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-dark-900/98 backdrop-blur-xl border-t border-white/10 animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-dark-200 hover:text-white hover:bg-white/5 font-medium transition-all text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:0505297717"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                050-529-7717
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
