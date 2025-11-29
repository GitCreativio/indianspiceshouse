// // app/components/Testimonials.tsx
// export default function Testimonials() {
//   const quotes = [
//     { name: 'Priya S.', text: 'Best garam masala I’ve ever used – my biryani is now restaurant-level!' },
//     { name: 'Rajesh K.', text: 'Fresh, aromatic, and delivered in 2 days. Highly recommend!' },
//     { name: 'Ananya M.', text: 'Love the small-batch quality. Feels like homemade.' },
//   ];

//   return (
//     <section className="py-20  px-5 sm:px-10 md:px-24 bg-amber-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="font-sans text-4xl md:text-5xl font-bold text-amber-900 mb-12">
//           What Our Customers Say
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {quotes.map((q, i) => (
//             <div
//               key={i}
//               className="bg-amber-50 p-6 rounded-2xl shadow-md italic text-amber-800"
//             >
//               <p className="mb-4">"{q.text}"</p>
//               <p className="font-semibold text-amber-900">— {q.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'


// app/components/Testimonials.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const quotes = [
    { name: 'Priya S.', text: 'Best garam masala I’ve ever used – my biryani is now restaurant-level!' },
    { name: 'Rajesh K.', text: 'Fresh, aromatic, and delivered in 2 days. Highly recommend!' },
    { name: 'Ananya M.', text: 'Love the small-batch quality. Feels like homemade.' },
  ];

  return (
    <section className="py-24 px-5 sm:px-10 md:px-24 bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-6xl font-bold text-amber-900 mb-4 tracking-tight">
          Loved by Home Chefs
        </h2>
        <p className="text-amber-700 text-lg mb-16 max-w-2xl mx-auto font-light">
          Real stories from real kitchens across India
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
          className="relative"
        >
          {quotes.map((q, i) => (
            <SwiperSlide key={i}>
              <div className="group h-full">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-8  transition-all duration-500  h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-10 h-10 text-amber-600 mb-6 opacity-70 mx-auto" />
                    <p className="text-amber-800 text-lg leading-relaxed italic font-medium mb-8">
                      "{q.text}"
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-900 font-bold text-xl tracking-wide">
                      — {q.name}
                    </p>
                    <div className="flex justify-center mt-4 space-x-1">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx} className="text-amber-500 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev !text-amber-700 !w-12 !h-12 after:!text-2xl hover:!text-amber-900 transition-all" />
          <div className="swiper-button-next !text-amber-700 !w-12 !h-12 after:!text-2xl hover:!text-amber-900 transition-all" />

          {/* Custom Pagination */}
          <div className="swiper-paginatio !bottom-4" />
        </Swiper>

        <style jsx global>{`
          .swiper-pagination-bullet {
            background: rgba(146, 94, 44, 0.3);
            opacity: 1;
            width: 12px;
            height: 12px;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active {
            background: #924e2c;
            transform: scale(1.3);
          }
          
          
        `}</style>
      </div>
    </section>
  );
}