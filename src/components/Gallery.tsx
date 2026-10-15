import { Images } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const images = [
  { src: 'https://images.pexels.com/photos/4489776/pexels-photo-4489776.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'מכונאים בעבודה', span: 'sm:col-span-2 sm:row-span-2' },
  { src: 'https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'דיאגנוסטיקת מנוע', span: '' },
  { src: 'https://images.pexels.com/photos/8986132/pexels-photo-8986132.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'רכב על מדחף', span: '' },
  { src: 'https://images.pexels.com/photos/6870295/pexels-photo-6870295.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'בדיקת מנוע', span: '' },
  { src: 'https://images.pexels.com/photos/8478228/pexels-photo-8478228.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'בדיקת מצבר וחשמל', span: '' },
  { src: 'https://images.pexels.com/photos/33814734/pexels-photo-33814734.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'אולם המוסך', span: '' },
  { src: 'https://images.pexels.com/photos/4116207/pexels-photo-4116207.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'תיקון מנוע', span: '' },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-dark-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
            <Images className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold">גלריה</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            הצצה ל<span className="text-gradient-primary">מוסך</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            ראו את העבודה שלנו ואת המקצועיות שאנחנו מביאים לכל תיקון
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 60} className={img.span}>
              <div className={`group relative h-full w-full rounded-2xl overflow-hidden cursor-pointer ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400">{img.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
