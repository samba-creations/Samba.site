export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: 'The drills from Hi Tech Engineering are reliable and precise — they transformed our shop productivity.',
      author: 'A. Johnson, Factory Manager',
    },
    {
      id: 2,
      quote: 'Excellent support and fast delivery. Highly recommend their CNC systems.',
      author: 'R. Patel, Operations Director',
    },
    {
      id: 3,
      quote: 'Outstanding quality HSS drills that compete with industry leaders. We have been using them for over 3 years now.',
      author: 'S. Kumar, Production Head',
    },
    {
      id: 4,
      quote: 'The innovative approach and problem-solving skills of Mr. Sambaiah are remarkable. His products are built to last.',
      author: 'M. Reddy, Manufacturing Unit Owner',
    },
    {
      id: 5,
      quote: 'Best value for money in the market. The precision and durability of these drills are unmatched.',
      author: 'V. Sharma, Workshop Supervisor',
    },
    {
      id: 6,
      quote: 'Highly professional service and top-notch quality products. Hi Tech Engineering has become our trusted partner.',
      author: 'D. Mehta, Industrial Engineer',
    },
  ];

  return (
    <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Testimonials</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">What clients say about our products and service.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700 italic">“{r.quote}”</p>
            <div className="mt-4 text-sm text-gray-600">— {r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
