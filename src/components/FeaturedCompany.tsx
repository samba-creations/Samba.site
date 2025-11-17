import { useState } from 'react';

export default function FeaturedCompany() {
  const [lightbox, setLightbox] = useState<{ open: boolean; src: string; caption?: string }>({
    open: false,
    src: '',
    caption: undefined,
  });

  const openLightbox = (src: string, caption?: string) => setLightbox({ open: true, src, caption });
  const closeLightbox = () => setLightbox({ open: false, src: '', caption: undefined });

  // simple captions inferred from provided images — you can change these later
  const gallery = [
    { src: '/images/hi-tech/whatsapp-1.jpeg', caption: 'Drill bits set' },
    { src: '/images/hi-tech/whatsapp-2.jpeg', caption: 'Long drill bits' },
    { src: '/images/hi-tech/whatsapp-3.jpeg', caption: 'Factory gate' },
    { src: '/images/hi-tech/whatsapp-4.jpeg', caption: 'Drilling machine' },
    { src: '/images/hi-tech/whatsapp-5.jpeg', caption: 'Workshop overview' },
  ];

  return (
    <section id="featured-company" className="mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-xl md:text-2xl">
                  HT
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                      Hi Tech <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Engineering</span>
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl">Manufacturer of high-precision drills and drilling systems for industrial and professional use.</p>
                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      <li><strong>Products:</strong> Bench drills, hand drills, CNC drilling systems</li>
                      <li><strong>Founded:</strong> 2010</li>
                      <li><strong>Location:</strong> Springfield, USA</li>
                    </ul>
                  </div>

                  <div className="hidden md:flex md:flex-col items-end">
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-indigo-600">Trusted</div>
                      <div className="text-sm text-gray-500">in precision manufacturing</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">Contact</button>
                  <a href="#" className="px-6 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center justify-center">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Factory & products</h3>
            <div className="text-sm text-gray-500">Click any image to enlarge</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {gallery.map((img) => (
              <button
                key={img.src}
                onClick={() => openLightbox(img.src, img.caption)}
                className="block rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={`Open image: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-40 md:h-48 object-cover transition-transform transform hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/hi-tech/placeholder-1.svg'; }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / modal */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="absolute inset-0 bg-black/60" onClick={closeLightbox} />

          <div className="relative max-w-5xl w-full mx-auto">
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow focus:outline-none"
              aria-label="Close image"
            >
              ✕
            </button>

            <div className="bg-white rounded-xl overflow-hidden">
              <img src={lightbox.src} alt={lightbox.caption} className="w-full h-auto max-h-[80vh] object-contain bg-black" onError={(e) => { (e.target as HTMLImageElement).src = '/images/hi-tech/placeholder-1.svg'; }} />
              {lightbox.caption && (
                <div className="p-4 text-sm text-gray-600">{lightbox.caption}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
