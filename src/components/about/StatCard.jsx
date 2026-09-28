import { Users, Star, Database } from 'lucide-react';

export default function StatCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
      <div className="bg-linear-to-br from-[#4F39F6] to-[#9514FA] rounded-[16px] p-6 text-white shadow-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
        <Users className="w-8 h-8 mb-3 opacity-90" />
        <div className="text-3xl font-extrabold mb-1">10k+</div>
        <div className="text-white/80 font-medium">Shows Tracked</div>
      </div>
      <div className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-md flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
        <Star className="w-8 h-8 mb-3 text-amber-500 fill-amber-500" />
        <div className="text-3xl font-extrabold text-[#101727] mb-1">4.8/5</div>
        <div className="text-gray-500 font-medium">User Rating</div>
      </div>
      <div className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-md flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
        <Database className="w-8 h-8 mb-3 text-[#4F39F6]" />
        <div className="text-3xl font-extrabold text-[#101727] mb-1">100%</div>
        <div className="text-gray-500 font-medium">Free API Data</div>
      </div>
    </div>
  );
}
