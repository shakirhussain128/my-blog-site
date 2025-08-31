import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Heart, Code, Database, Palette } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="text-2xl">🖐️</span>
                <span className="text-lg text-gray-600 ml-2">Hello, I am</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Shakir Hussain</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                A passionate <span className="text-blue-600">Data Scientist</span>, 
                <span className="text-purple-600"> WordPress</span> & 
                <span className="text-green-600"> Frontend Developer</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                With 2+ years of experience in web development and design, I create impactful solutions 
                for top brands. I blend design and functionality to deliver exceptional user experiences, 
                turning ideas into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button
                  size="lg"
                  onClick={() => setActiveSection('blog')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Read My Blog
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setActiveSection('about')}
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300"
                >
                  Discover My Journey
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Coffee size={16} />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} />
                  <span>2+ years experience</span>
                </div>
              </div>
            </div>

            {/* Right Content - Skills & Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-6xl">SH</span>
              </div>
              
              {/* Floating Skill Cards */}
              <div className="absolute top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                <div className="flex items-center gap-2">
                  <Code className="text-blue-600" size={20} />
                  <span className="text-sm font-medium">React & Vue.js</span>
                </div>
              </div>
              
              <div className="absolute top-20 -right-6 bg-white rounded-lg shadow-lg p-3 animate-bounce delay-100">
                <div className="flex items-center gap-2">
                  <Database className="text-green-600" size={20} />
                  <span className="text-sm font-medium">Data Analysis</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-6 bg-white rounded-lg shadow-lg p-3 animate-bounce delay-200">
                <div className="flex items-center gap-2">
                  <Palette className="text-purple-600" size={20} />
                  <span className="text-sm font-medium">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Brands Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Tech Ucreation</div>
              <div className="text-2xl font-bold text-gray-400">Optimal</div>
              <div className="text-2xl font-bold text-gray-400">Logique</div>
              <div className="text-2xl font-bold text-gray-400">Self-Employed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}