import { MonitorSmartphone, Search, Tv } from 'lucide-react';
import StatCard from './StatCard';

export default function AboutInfo() {
  return (
    <section className="bg-white">
      <div className="w-11/12 lg:w-8/12 mx-auto py-16 lg:py-24">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-[#E1E7FF] text-[#4F39F6] rounded-full px-4 py-1.5 inline-block text-sm font-semibold mb-4">
            About Movie Explorer
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-[#101727] mb-6 leading-tight">
            Your Ultimate Gateway to Cinema & Television
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Movie Explorer uses real-time API streaming data to help you discover top movies and TV shows worldwide. Whether you're searching for hidden gems, checking ratings, or exploring global networks, we bring the cinema to your fingertips.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-[16px] border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#4F39F6]/20">
            <div className="bg-[#F3F4F6] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Tv className="w-6 h-6 text-[#4F39F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#101727] mb-3 flex items-center gap-2">
              🎬 Real-time TVMaze API Sync
            </h3>
            <p className="text-gray-600">
              Instant access to real-time show metadata, ratings, and premier dates straight from TVMaze.
            </p>
          </div>

          <div className="rounded-[16px] border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#4F39F6]/20">
            <div className="bg-[#F3F4F6] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-[#4F39F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#101727] mb-3 flex items-center gap-2">
              🔍 Lightning Search
            </h3>
            <p className="text-gray-600">
              Dynamic title search with zero latency. Find your favorite shows instantly with lightning-fast query results.
            </p>
          </div>

          <div className="rounded-[16px] border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#4F39F6]/20">
            <div className="bg-[#F3F4F6] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MonitorSmartphone className="w-6 h-6 text-[#4F39F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#101727] mb-3 flex items-center gap-2">
              📱 Fluid Multi-Device Design
            </h3>
            <p className="text-gray-600">
              Designed for pixel-perfect experiences across mobile, tablet, and desktop without compromising functionality.
            </p>
          </div>
        </div>

        {/* App Stats Row */}
        <StatCard />
      </div>
    </section>
  );
}
