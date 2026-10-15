import { Star, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const reviews = [
  { name: 'דניאל כהן', text: 'מוסך מקצועי ואמין! מוטי והצוות תמיד מספקים שירות מעולה. הרכב שלי תמיד יוצא משם במצב מושלם. ממליץ בחום!', rating: 5, initial: 'ד' },
  { name: 'רונית לוי', text: '50 שנות ניסיון מרגישים את זה. אבחון מדויק ותיקון מהיר. לא ניסיתי מוסך אחר מאז שמצאתי את מוטי.', rating: 5, initial: 'ר' },
  { name: 'אבי מזרחי', text: 'הגעתי לבדיקה לפני טסט וקיבלתי יחס אדיב ומקצועי. הכל עבר חלק. תודה רבה לכל הצוות!', rating: 5, initial: 'א' },
  { name: 'שירה בן דוד', text: 'מוסך אמין באמת. מחירים הוגנים ושקיפות מלאה. לא מנסים למכור דברים שלא צריך. ממליצה בחום.', rating: 5, initial: 'ש' },
  { name: 'יוסי פרץ', text: 'מכונאים אמיתיים שמבינים במנועי דיזל. תיקנו לי את הטורבו והרכב עובד כמו חדש. תודה!', rating: 5, initial: 'י' },
  { name: 'מירב אסולין', text: 'בדיקת חורף מקיפה ויסודית. יצאתי רגועה שהרכב שלי מוכן לחורף. שירות מעולה ואנשים נחמדים.', rating: 5, initial: 'מ' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-dark-900 to-dark-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-4">
            <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
            <span className="text-accent-400 text-sm font-semibold">3,612 ביקורות Google</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            מה הלקוחות <span className="text-gradient-primary">אומרים</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            אלפי לקוחות מרוצים משאירים את הרכב שלהם בידיים שלנו
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group h-full p-7 rounded-3xl bg-dark-900/60 border border-white/5 hover:border-primary-500/25 transition-all duration-400 hover:bg-dark-800/60 relative overflow-hidden">
                <Quote className="absolute top-5 left-5 w-10 h-10 text-primary-500/10 group-hover:text-primary-500/20 transition-colors" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-dark-200 leading-relaxed mb-6 relative z-10">{r.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{r.name}</div>
                    <div className="text-dark-400 text-xs">לקוח מוסך מוטי</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
