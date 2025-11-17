export default function ProductSpecs() {
  return (
    <section id="product-specs" className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-gray-900">HSS drills manufacturers</h3>
                <p className="mt-2 text-gray-600 max-w-3xl">We manufacture a wide range of HSS drills including parallel and taper shank variants. Below are the series and size ranges we offer.</p>
              </div>

              <div className="md:shrink-0">
                <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
                  <span className="text-sm text-gray-700">Sizes</span>
                  <span className="text-lg font-semibold text-gray-900">2.01–20.99 mm</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Main types</h4>
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                  <li>Parallel shank drills</li>
                  <li>
                    Taper shank drills
                    <ol className="list-lower-alpha list-inside mt-2 ml-4 space-y-1">
                      <li>JOBBER Series drills as per IS SPECIFICATIONS</li>
                      <li>LONG Series drills as per IS SPECIFICATIONS</li>
                      <li>Extra long drills as per CUSTOMER requirements</li>
                    </ol>
                  </li>
                </ol>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Dimensions & notes</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <div><strong>Note:</strong></div>
                  <div>SIZES: from <strong>2.01 to 20.99 mm</strong> diameter</div>
                  <div>LENGTH: from <strong>49 to 1100 mm</strong> long</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
