import { Wrench, Phone, MapPin, Clock, Facebook } from 'lucide-react';

const links = [
  { href: '#home', label: 'ראשי' },
  { href: '#services', label: 'שירותים' },
  { href: '#about', label: 'אודות' },
  { href: '#gallery', label: 'גלריה' },
  { href: '#testimonials', label: 'ביקורות' },
  { href: '#contact', label: 'צור קשר' },
];

export function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Wrench className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-black text-lg">מוסך מוטי</div>
                <div className="text-primary-400 text-[11px] font-medium">50 שנות ניסיון</div>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-5 max-w-xs">
              מכונאות כללית בבני ברק. מנועי בנזין ודיזל, חשמל, דיאגנוסטיקה, טורבו, בדיקות חורף וקיץ, בדיקה לפני טסט.
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-dark-800 hover:bg-primary-500 text-dark-300 hover:text-white transition-all"
              aria-label="פייסבוק"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">ניווט מהיר</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* פרטי התקשרות - כולל את פרטי המוסך וגם את יריב אהרון ביחד */}
          <div>
            <h4 className="text-white font-bold mb-4">פרטי התקשרות</h4>
            <ul className="space-y-4">
              {/* פרטי מוסך מוטי המקוריים */}
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <a href="tel:0505297717" className="text-dark-300 hover:text-white text-sm transition-colors font-mono">
                  050-529-7717
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-dark-300 text-sm">הירקון 8, בני ברק · ליד מ.מ.מ</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-dark-300 text-sm">א'-ה': 07:00-19:00<br />ו': 07:00-14:30</span>
              </li>

              {/* קו מפריד מעוצב ועדין בין פרטי המוסך לפרטי יריב */}
              <li className="border-t border-white/10 my-2 pt-2" />

              {/* הפרטים החדשים של יריב אהרון */}
              <li className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-sm block">יריב אהרון</span>
                <span className="text-primary-400 text-xs font-medium block">מהנדס מכונות</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <a href="tel:0524577725" className="text-dark-300 hover:text-white text-sm transition-colors font-mono font-bold">
                  052-457-7725
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">השירותים שלנו</h4>
            <ul className="space-y-3">
              {['מנועי בנזין ודיזל', 'מצברים וחשמל', 'דיאגנוסטיקה', 'טורבו ורדיאטורים', 'בדיקות חורף וקיץ', 'בדיקה לפני טסט'].map((s) => (
                <li key={s} className="text-dark-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* שורה תחתונה חלקה, נקייה וללא כיתובים מיותרים */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">© 2026 מוסך מוטי. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
