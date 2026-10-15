import { Fuel, Battery, Zap, Gauge, Wrench, Wind, Snowflake, ShieldCheck, Lightbulb, Car } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const services = [
  { icon: Fuel, title: 'מנועי בנזין ודיזל', desc: 'תיקון ותחזוקת מנועים מכל הסוגים — בנזין ודיזל — ברמה הגבוהה ביותר.', color: 'from-primary-500 to-primary-700' },
  { icon: Battery, title: 'מצברים', desc: 'מכירה והתקנת מצברים חדשים, בדיקת טעינה ואבחון תקלות חשמל.', color: 'from-secondary-500 to-secondary-700' },
  { icon: Zap, title: 'חשמל ודיאגנוסטיקה', desc: 'אבחון ממוחשב מתקדם לאיתור תקלות חשמל בכל מערכות הרכב.', color: 'from-accent-500 to-accent-700' },
  { icon: Gauge, title: 'טורבו', desc: 'תיקון, החלפה וכיול טורבו למנועי בנזין ודיזל במקצועיות.', color: 'from-error-500 to-error-700' },
  { icon: Wind, title: 'רדיאטורים ווישרים', desc: 'תיקון והחלפת רדיאטורים, מערכות קירור ותיקון ווישרים.', color: 'from-success-500 to-success-700' },
  { icon: Snowflake, title: 'בדיקת חורף', desc: 'בדיקה מקיפה לקראת החורף — מערכת קירור, מצבר, תאורה ועוד.', color: 'from-secondary-400 to-secondary-600' },
  { icon: Lightbulb, title: 'בדיקת קיץ', desc: 'הכנת הרכב לקיץ — מזגן, מערכת קירור, צמיגים ובדיקה כללית.', color: 'from-warning-400 to-warning-600' },
  { icon: ShieldCheck, title: 'בדיקה לפני טסט', desc: 'בדיקה מקיפה לפני טסט שנתי — כדי שתעבור בלי בעיות.', color: 'from-primary-400 to-primary-600' },
  { icon: Car, title: 'מכונאות כללית', desc: 'כל סוגי התיקונים והתחזוקה לרכב — מהקטן ביותר ועד למורכב.', color: 'from-dark-500 to-dark-700' },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-dark-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
            <Wrench className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold">השירותים שלנו</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            כל מה שהרכב שלך <span className="text-gradient-primary">צריך</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            מכונאות מקצועית תחת קורת גג אחת — מתיקון מנוע ועד בדיקה לפני טסט
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group relative h-full p-7 rounded-3xl bg-dark-900/60 border border-white/5 hover:border-primary-500/30 transition-all duration-400 hover:bg-dark-800/60 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                  <s.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="relative text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="relative text-dark-300 text-sm leading-relaxed">{s.desc}</p>
                <div className={`relative mt-5 h-0.5 w-12 bg-gradient-to-r ${s.color} rounded-full group-hover:w-full transition-all duration-500`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
