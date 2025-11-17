import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';

function About() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const values = [
    {
      icon: Target,
      title: 'Vision-Driven',
      description: 'Every innovation starts with a clear vision of creating positive impact and solving real-world challenges.',
    },
    {
      icon: Users,
      title: 'Human-Centered',
      description: 'Technology should serve people. All creations are designed with user needs and experiences at the forefront.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Embracing learning and adaptation to stay at the cutting edge of innovation and creativity.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality and pushing beyond conventional boundaries.',
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src="/sambaiah.jpeg" 
              alt="Vemula Sambaiah" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setIsImageModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About the Innovator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about transforming ideas into reality and creating solutions that matter
          </p>
          
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <img 
                src="/sambaiah.jpeg" 
                alt="Vemula Sambaiah" 
                className="w-48 h-48 object-cover rounded-xl shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsImageModalOpen(true)}
              />
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Name: Vemula Sambaiah</h3>
                <p className="text-xl text-gray-700 mb-3"><strong>Studied:</strong> LME with 1st Class in 1976</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>In 1977</strong> I joined Indochem Industry, a fabrication industry manufacturing VAX Bending machines. They were unable to complete the project as per DMRL standards - it required 3-4 persons manpower and took a long time. After my joining, with my own ideas, I designed Travels Rollers, Tightening Gear mechanism, and centre location bearing mechanism. After completion, DMRL Dy. Director came to inspect and operated it himself. He said "Sambaiah what magic you did, now I can operate."
              </p>
              
              <p className="leading-relaxed">
                <strong>Worked Air India 1980 to 84</strong> as an "Aircraft Technician". While working in Air India, I created 4 tools for easy completion of jobs. Any complicated problem, I would solve with an easy method. Seeing my way of working, one Sr. Technician said "Tunku Chod Diyato Aircraft Edary Banayaga" in 1983. At that time, I planned Aircraft Wheels performance modification.
              </p>
              
              <p className="leading-relaxed">
                <strong>In 1984</strong> I got a job in Saudi Iron Steel Company Hadeed, Saudi Arabia. The company machinery was manufactured and established by an Italian company. For them also, I provided 2-3 modifications.
              </p>
              
              <p className="leading-relaxed">
                <strong>In 1990</strong> I started Hare Krishna Granite Company. I took a loan from APSFC and paid it back on time. I received AAA+ certificate from APSFC at a time when almost all granite companies were running sick.
              </p>
              
              <p className="leading-relaxed">
                <strong>In 2000</strong> Midwest Granite Pvt. Ltd., Hyderabad - the company was running at a loss with 275 HP Current and production less than 10,000 Sft. I had my own granite company in Warangal. On request by management of Midwest Granite Pvt. Ltd., I joined as GM. After joining, with my own ideas, I modified the complete machinery, reduced about 75 HP current, and manufactured more than 20,000 Sfts.
              </p>
              
              <p className="leading-relaxed">
                <strong>In 2007</strong> I took over a drills manufacturing sick unit. With my ideas, the same unit is now running successfully in the name of Hi-Tech Engineering. Now I am a competitor of big HSS Drills manufacturing companies like Addison, IT, J.K. etc.
              </p>
              
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Industries Worked:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Worked in Fabrication Industry</li>
                  <li>• Air India - Airlines Industry</li>
                  <li>• Hadeed Saudi Iron & Steel Company</li>
                  <li>• Granite: Hare Krishna Granite and Midwest Granite</li>
                  <li>• Drill Manufacturing Company</li>
                </ul>
                
                <p className="mt-4 leading-relaxed text-gray-700">
                  Above all are different manufacturing companies, but for me all are the same because I am a Trouble Shooter with extensive knowledge. <strong>For every problem there is a solution. If lock is there, find out the key - that is my idea.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">The Journey</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With decades of experience in innovation and problem-solving across diverse industries, this journey has been driven by a singular passion: creating meaningful solutions that improve operations and push the boundaries of what's possible.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From early innovations in industrial machinery to aerospace and manufacturing, each step has been guided by practical creativity and a commitment to excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The focus remains on sustainable innovation, leveraging practical engineering to address real-world challenges while maintaining efficiency and effectiveness.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Core Philosophy</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <span className="text-lg">Innovation should be accessible and inclusive</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <span className="text-lg">Technology is a tool for positive change</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <span className="text-lg">Collaboration amplifies creativity</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <span className="text-lg">Continuous learning drives progress</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
