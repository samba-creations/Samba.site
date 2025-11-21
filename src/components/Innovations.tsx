// icon imports removed; no future plans UI

function Innovations() {
  // innovations list intentionally left empty per request
  const innovations: Array<{
    id: number;
    title: string;
    description: string;
    icon?: any;
    category: string;
    year: string;
    color?: string;
  }> = [];

  // no future plans to display

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Creations & Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of groundbreaking projects that push the boundaries of what's possible
          </p>
        </div>

        {innovations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation) => {
              const Icon = innovation.icon;
              return (
                <div
                  key={innovation.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${innovation.color}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${innovation.color} shadow-lg`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-500">{innovation.year}</span>
                    </div>

                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                      {innovation.category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {innovation.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  controls
                  poster="/images/thumbnails/ez-scrubber.svg"
                  onError={(e) => { (e.target as HTMLVideoElement).poster = '/images/thumbnails/placeholder.svg'; }}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-contain bg-black"
                  src="/ez-scrubber.mp4"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">EASY SCRUB</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>It's highly impossible to clean back side body of human beings while bathing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>This scrubber can use back of body with small place to provided small soap or liquid soap.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>Other side nicely cleaner with warm water.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span>This scrubber made from silicon rubber food grade product.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span>This is heavy duty product, it's give life time USAGE.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-8 mt-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  controls
                  poster="/images/thumbnails/urethral-tube.svg"
                  onError={(e) => { (e.target as HTMLVideoElement).poster = '/images/thumbnails/placeholder.svg'; }}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-contain bg-black"
                  src="/urethral-tube.mp4"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Urethral Tube — Women Urinary Aid</h3>
                <p className="text-gray-700 mb-4">Women can also urinate just like men using this urinary tube. Main benefits include:</p>

                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="font-semibold mr-2">1.</span><span>For pregnant women</span></li>
                  <li className="flex items-start"><span className="font-semibold mr-2">2.</span><span>For obese women</span></li>
                  <li className="flex items-start"><span className="font-semibold mr-2">3.</span><span>For women who have undergone delivery or surgery</span></li>
                  <li className="flex items-start"><span className="font-semibold mr-2">4.</span><span>For ladies with knee pain</span></li>
                  <li className="flex items-start"><span className="font-semibold mr-2">5.</span><span>For girls and college-going young women</span></li>
                  <li className="flex items-start"><span className="font-semibold mr-2">6.</span><span>Very useful for all women</span></li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">How to use this urinary tube</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Stand in the same position as men do while urinating.</li>
                  <li>Use the fingers of your left hand to gently open the urinary area.</li>
                  <li>Use the fingers of your right hand to locate the urinary passage.</li>
                  <li>Take the urinary tube, place it close to the urinary opening, hold it firmly, and urinate just like men.</li>
                  <li>Since urine won’t splash on the body, there is no need to wash.</li>
                  <li>This tube can be cleaned and stored for repeated use.</li>
                  <li>It is made from materials that do not cause any harm to the human body.</li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-8 mt-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  controls
                  poster="/images/thumbnails/dry-coconut-cutter.svg"
                  onError={(e) => { (e.target as HTMLVideoElement).poster = '/images/thumbnails/placeholder.svg'; }}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-contain bg-black"
                  src="/dry-coconut-cutter.mp4"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DRY COCONUT CUTTER</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>To making dry coconut powder easy way.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>Making dry coconut powder at present available is very Hard and Hazardous.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>Now it's simple and easy making, by rotation with handle, by spring load start cutting.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span>To easy handle by ladies.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span>This item is essential every Kitchen.</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Removed 'No current creations' message as requested */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Innovations;
