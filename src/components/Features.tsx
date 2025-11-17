export default function Features() {
  return (
    <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">What we do</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Core capabilities and services that drive our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h4 className="text-lg font-semibold text-gray-900">Manufacturing Excellence</h4>
          <p className="text-gray-600 mt-2 text-sm">High-quality production, optimized processes, and strict QA for reliable products.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h4 className="text-lg font-semibold text-gray-900">Precision Engineering</h4>
          <p className="text-gray-600 mt-2 text-sm">Design and develop precision tools and machinery tailored to industry needs.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h4 className="text-lg font-semibold text-gray-900">Global Support</h4>
          <p className="text-gray-600 mt-2 text-sm">Worldwide after-sales, spare parts, and technical assistance to keep operations running.</p>
        </div>
      </div>
    </section>
  );
}
