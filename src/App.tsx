import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Innovations from './components/Innovations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className={activeSection === 'home' ? 'pb-40' : 'pb-12'}>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'innovations' && <Innovations />}
        {activeSection === 'newinnovations' && (
          <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Innovations</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A showcase of groundbreaking projects that push the boundaries of what's possible
                </p>
              </div>
              <div className="max-w-4xl mx-auto mb-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    controls 
                    className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-contain bg-black"
                    src="/outer-ring-road.mp4"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">OUT RING ROAD LIFT BRIDGE MODIFICATION</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Proposal Planning by:</strong> Vemula Samabaiah<br />
                    <strong>Contact:</strong> 99490 82277, 83093 24088<br />
                    <strong>Hyderabad-Telangana</strong>
                  </p>
                  <p className="text-gray-700 mb-2"><strong>THESE ARE THE ADVANTAGES:</strong></p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">1.</span>
                      <span>All Human beings prepared Lift Instead Staircases. This is VEHICLES LIFT.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">2.</span>
                      <span>Very less time to approach.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">3.</span>
                      <span>Now a days time is very important factor saving valuable time, Money and environment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">4.</span>
                      <span>Increasing vehicle Life. No unnecessary Driving and Driving on Road Careful drive passing speed barkers opposite vehicles and over taking etc. Loosing vehicle life.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">5.</span>
                      <span>For New ORR's No need of service Roads and no need of CRORES of Money to procurement of LAND and Laying roads.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">6.</span>
                      <span>Repairs and maintenance of roads requires Lakhs of money for every time. Avoiding this.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">7.</span>
                      <span>To approach Outer Ring Road for Every vehicle have to pass 8 to 10 kmts requires. If to and fro more than 20 kmts fuel expenditure comes more than Rs. 100/- For light vehicles. and For heavy vehicles slowly go ahead sloop road may be 1" gear or 2nd gear drive speed. For fuel expenses may be Rs. 300/- or more and more time taking saving foreign currency because fuels are imported.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">8.</span>
                      <span>I have given a single vehicle projections daily thousands of vehicles using ORR in HYDERABAD only. If we calculate Nation and thought out world how much should be. Maybe: Crores of money per year.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">9.</span>
                      <span>This vehicle lift bridge modification, So far not introduced in India and also throughout World.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">10.</span>
                      <span>As per my provision to provide this Lift Bridge and approach roads etc., Need 2000 to 4000 Sq.Mtrs., area Parallel to ORR is Enough.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-4xl mx-auto mb-8 mt-12">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    controls 
                    className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-contain bg-black"
                    src="/flight.mp4"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Aircraft Landing Gear Wheels Life Performance</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Modification by:</strong> Vemula Sambaiah, Hyderabad - Telangana<br />
                    <strong>Cell:</strong> 9949082277, 8309324088<br />
                    <strong>WORK IN AIR INDIA IN 1980-1984</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    It is highly impossible to rotate landing gear wheels by any means of power to rotate proportionate speed Air Craft is imposable.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>П. My Idea:</strong> Once the landing gear comes out at time of landing, the spring loaded fins fitted on the rim of wheels will open opposite direction of Air the wheels start rotating proportionate speed of air craft. This is designed by the Aero Dynamic Engineers. The shape and Number of Fins to create to rotate proportionate speed of Air Craft to avoid frictionless landing.
                  </p>
                  <p className="text-gray-700 mb-2"><strong>These are the Advantages:</strong></p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Creating drag and rotating wheels.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Drag is require at the time of landing Air Craft.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Considering weight, providing alluminium Fins.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Frictionless landing Air Craft.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Life of wheels More and More.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Abnormal noise is less at time of landing.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-4xl mx-auto mb-8 mt-12">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    controls 
                    className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-contain bg-black"
                    src="/lorry-sand-unloading.mp4"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">LORRY SAND UNLOADING</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">1.</span>
                      <span>Approximately 40 tons Lorry Sand unloading is very difficult task.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">2.</span>
                      <span>For unloading Lorry Sand is by manual labour or by small JCBs, the expenditures comes 3 to 4 thousands per Lorry.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">3.</span>
                      <span>By this mechanism unloading Sand by Lorry Driver himself.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">4.</span>
                      <span>From Lorry engine power DC to converted AC.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">5.</span>
                      <span>The mechanism such that per strock 4 to 6".</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">6.</span>
                      <span>This way of unloading take Time 20 to 30 minutes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'about' && <About />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
