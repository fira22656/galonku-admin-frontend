import { Link } from 'react-router-dom';
import { Truck, Phone, Lock, EyeOff } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans max-w-md mx-auto shadow-xl relative overflow-hidden">
      
      {/* Decorative Top Background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>

      <div className="flex-1 flex flex-col p-6 z-10">
        
        {/* Header Logo */}
        <div className="flex justify-center mb-8 mt-10">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-125 blur-md"></div>
            <div className="relative bg-white p-3 rounded-full shadow-sm border border-blue-50">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Truck className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">GalonKu</h1>
          <p className="text-slate-500 text-sm">Masuk ke akun Anda</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-8">
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Phone Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 ml-1">No. HP</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Masukkan No. HP" 
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="Masukkan Password" 
                  className="w-full pl-11 pr-11 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-slate-400 hover:text-slate-600">
                  <EyeOff className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors mt-6 shadow-[0_8px_15px_-5px_rgba(37,99,235,0.4)]"
            >
              MASUK
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="mt-auto text-center pb-4">
          <span className="text-slate-500 text-sm">Belum punya akun? </span>
          <Link to="/register" className="text-blue-600 font-semibold text-sm hover:underline">
            Daftar di sini
          </Link>
        </div>
      </div>
    </div>
  );
}
