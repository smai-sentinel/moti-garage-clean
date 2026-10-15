import { Phone, MapPin, Clock, Navigation, Wrench } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const hours = [
  { day: 'ראשון', time: '07:00 - 19:00', today: false },
  { day: 'שני', time: '07:00 - 19:00', today: false },
  { day: 'שלישי', time: '07:00 - 19:00', today: false },
  { day: 'רביעי', time: '07:00 - 19:00', today: false },
  { day: 'חמישי', time: '07:00 - 19:00', today: false },
  { day: 'שישי', time: '07:00 - 14:30', today: false },
  { day: 'שבת', time: 'סגור', today: false, closed: true },
];

const todayIdx = new Date().getDay();
if (todayIdx >= 0 && todayIdx < hours.length) hours[todayIdx].today = true;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-dark-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
            <Phone className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold">צור קשר</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            בואו <span className="text-gradient-primary">נטפל</span> ברכב שלכם
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            תקבעו תור או פשוט תעברו לביקור — נשמח לראותכם
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="p-8 rounded-3xl bg-dark-900/60 border border-white/5 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                פרטים ושעות פעילות
              </h3>

              <div className="space-y-4 mb-8">
                <a href="tel:0505297717" className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800/50 hover:bg-dark-800 border border-white/5 hover:border-primary-500/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-dark-400 text-xs">טלפון</div>
                    <div className="text-white font-bold text-lg">050-529-7717</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800/50 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-dark-400 text-xs">כתובת</div>
                    <div className="text-white font-bold text-base">הירקון 8, בני ברק</div>
                    <div className="text-primary-400 text-sm font-medium mt-0.5">ליד מ.מ.מ</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-dark-800/50 border border-white/5 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <h4 className="text-white font-bold">שעות פעילות</h4>
                  {hours[todayIdx] && !hours[todayIdx].closed && (
                    <span className="mr-auto px-3 py-1 rounded-full bg-success-500/15 text-success-400 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-success-400 animate-pulse" />
                      פתוח עכשיו
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {hours.map((h, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                        h.today ? 'bg-primary-500/10 border border-primary-500/20' : ''
                      }`}
                    >
                      <span className={`font-medium ${h.today ? 'text-primary-300' : 'text-dark-200'}`}>
                        {h.day} {h.today && <span className="text-xs text-primary-400">(היום)</span>}
                      </span>
                      <span className={`text-sm ${h.closed ? 'text-error-400' : h.today ? 'text-primary-300 font-semibold' : 'text-dark-300'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-3xl overflow-hidden h-full min-h-[500px] border border-white/5 relative group">
              <iframe
                src="https://maps.google.com/maps?q=הירקון 8 בני ברק&output=embed"
                className="w-full h-full grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת מוסך מוטי"
              />
              <div className="absolute bottom-5 right-5 left-5 sm:left-auto glass-dark rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-lg">מוסך מוטי</div>
                    <div className="text-dark-300 text-sm">הירקון 8, בני ברק</div>
                    <div className="text-primary-400 text-sm font-medium">ליד מ.מ.מ</div>
                  </div>
                  <a
                    href="https://maps.google.com/maps/dir/?api=1&destination=הירקון 8 בני ברק"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500/20 text-primary-300 font-semibold text-sm hover:bg-primary-500/30 transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4" />
                    ניווט
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
