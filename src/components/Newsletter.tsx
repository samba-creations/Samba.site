export default function Newsletter() {
  return (
    <section className="mt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-2xl shadow text-center">
        <h3 className="text-xl font-bold text-gray-900">Stay informed</h3>
        <p className="text-gray-600 mt-2">Subscribe to our newsletter for updates on products and innovations.</p>

        <form className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-auto px-4 py-3 border border-gray-200 rounded-lg"
          />
          <button className="px-5 py-3 bg-blue-600 text-white rounded-lg">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
