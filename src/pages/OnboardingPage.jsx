import { Link } from 'react-router-dom';
import { Truck, Lock, ArrowUpToLine, Zap, CheckCircle2 } from 'lucide-react';
import deliveryImage from '../assets/delivery_guy.png';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden font-sans max-w-md mx-auto shadow-xl">
      {/* Background Gradient */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-100 to-transparent"></div>
      
      <div className="flex-1 flex flex-col p-6 z-10">
        {/* Header Logo */}
        <div className="flex items-center gap-2 mb-8 mt-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-blue-900 tracking-tight">GalonKu</span>
        </div>

        {/* Illustration Section */}
        <div className="relative flex justify-center items-center mb-10 mt-4">
          <div className="absolute inset-0 bg-blue-50/50 rounded-full scale-150 blur-2xl"></div>
          
          <div className="relative z-10 w-64 h-64 rounded-full bg-white border border-blue-100 shadow-[0_20px_50px_-12px_rgba(37,99,235,0.1)] flex items-center justify-center p-6">
            <img 
              src={deliveryImage} 
              alt="Delivery" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-4 right-0 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
            <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="text-xs font-semibold text-slate-700">15-30 Menit</span>
          </div>

          <div className="absolute bottom-4 left-0 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5 z-20">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
            <span className="text-xs font-semibold text-slate-700">100% Higienis</span>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mb-8">
          <div className="w-6 h-1.5 bg-blue-600 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
            Air Galon Bersih Langsung Sampai Pintu
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed px-2">
            Layanan antar galon resmi, higienis, dan terjadwal langsung ke depan pintu kamar atau rumah Anda.
          </p>
        </div>

        {/* Features Row */}
        <div className="flex justify-between gap-3 mb-10">
          <div className="flex-1 bg-slate-100/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 border border-slate-100">
            <Truck className="w-5 h-5 text-blue-600" />
            <span className="text-[10px] font-semibold text-slate-700">Antar Cepat</span>
          </div>
          <div className="flex-1 bg-slate-100/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 border border-slate-100">
            <Lock className="w-5 h-5 text-blue-600" />
            <span className="text-[10px] font-semibold text-slate-700">Tutup Segel</span>
          </div>
          <div className="flex-1 bg-slate-100/80 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 border border-slate-100">
            <ArrowUpToLine className="w-5 h-5 text-blue-600" />
            <span className="text-[10px] font-semibold text-slate-700">Naik Lantai</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link 
            to="/register"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mb-4 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]"
          >
            Mulai Sekarang
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="text-center">
            <span className="text-slate-500 text-sm">Sudah punya akun? </span>
            <Link to="/login" className="text-blue-600 font-semibold text-sm hover:underline">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
