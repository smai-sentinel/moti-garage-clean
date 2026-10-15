import { Award, Users, ThumbsUp, Clock, Wrench } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const aboutImg = 'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1200';
const aboutImg2 = 'https://images.pexels.com/photos/7807035/pexels-photo-7807035.jpeg?auto=compress&cs=tinysrgb&w=800';

const stats = [
  { icon: Award, value: '50', label: 'שנות ניסיון' },
  { icon: Users, value: '3,612', label: 'ביקורות Google' },
  { icon: ThumbsUp, value: '10,000+', label: 'לקוחות מרוצים' },
  { icon: Clock, value: '6', label: 'ימי עבודה בשבוע' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-dark-900 to-dark-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <img src={aboutImg} alt="מוסך מוטי - תיקון רכב" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-4 sm:-left-8 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-dark-950 hidden sm:block animate-float">
                <img src={aboutImg2} alt="מכונאי מוסך מוטי" className="w-full h-36 object-cover" />
              </div>
              <div className="absolute -top-6 -right-4 sm:-right-6 glass-dark rounded-2xl px-5 py-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-2xl">50</div>
                    <div className="text-dark-300 text-xs">שנות ניסיון</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-5">
              <span className="text-primary-400 text-sm font-semibold">אודות המוסך</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              50 שנה של <span className="text-gradient-primary">מקצועיות</span> ואמינות
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed mb-6">
              מוסך מוטי בבני ברק משרת את לקוחותיו כבר למעלה מ-50 שנה. עם ניסיון עשיר וידע מקצועי, אנחנו מספקים שירותי מכונאות כללית ברמה הגבוהה ביותר — מתיקון מנועים ועד בדיקות לפני טסט.
            </p>
            <p className="text-dark-400 text-base leading-relaxed mb-8">
              המוסך מתמחה במנועי בנזין ודיזל, מצברים, חשמל, דיאגנוסטיקה ממוחשבת, טורבו, רדיאטורים, ווישרים, בדיקות חורף וקיץ, ובדיקה לפני טסט. המחויבות שלנו לאיכות ולשירות אישי הפכה אותנו לאחד המוסכים המוכרים והמוערכים באזור.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="text-center p-4 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-primary-500/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary-400 mx-auto mb-2" />
                    <div className="text-white font-black text-2xl">{s.value}</div>
                    <div className="text-dark-400 text-xs mt-1">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
