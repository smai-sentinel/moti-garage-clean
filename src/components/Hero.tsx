import { Phone, MapPin, Clock, Star, ChevronDown, Wrench, Zap, ShieldCheck } from 'lucide-react';

const heroImg = 'https://images.pexels.com/photos/4489776/pexels-photo-4489776.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="מוסך מוטי - מכונאות כללית"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-dark-950/95 via-dark-900/80 to-dark-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/60" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in-up">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <span className="text-dark-100 text-sm font-medium">3,612 ביקורות Google</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            מוסך מוטי
            <span className="block text-gradient-primary mt-2">50 שנות ניסיון</span>
          </h1>

          <p className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            מכונאות כללית בבני ברק — מנועי בנזין ודיזל, מצברים, חשמל, דיאגנוסטיקה, טורבו, רדיאטורים ווישרים, בדיקות חורף וקיץ, ובדיקה לפני טסט. שירות מקצועי, אמין ומהיר.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="tel:0505297717"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              התקשרו עכשיו
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <Wrench className="w-5 h-5" />
              השירותים שלנו
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: MapPin, title: 'כתובת', value: 'הירקון 8, בני ברק · ליד מ.מ.מ' },
              { icon: Clock, title: 'שעות פעילות', value: 'פתוח עד 19:00' },
              { icon: ShieldCheck, title: 'אמינות', value: '50 שנה בשוק' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 glass rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-dark-400 text-xs font-medium">{item.title}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 z-10 hidden sm:flex">
        <ChevronDown className="w-7 h-7 text-dark-300 animate-bounce" />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-[5]" />
    </section>
  );
}
