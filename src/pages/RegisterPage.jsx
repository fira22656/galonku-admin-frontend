import { Link } from 'react-router-dom';
import { Truck, Phone, Lock, EyeOff, User, MapPin } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans max-w-md mx-auto shadow-xl relative overflow-hidden">
      
      {/* Decorative Top Background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>

      <div className="flex-1 flex flex-col p-6 z-10 overflow-y-auto">
        
        {/* Header Logo */}
        <div className="flex justify-center mb-6 mt-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full scale-125 blur-md"></div>
            <div className="relative bg-white p-2.5 rounded-full shadow-sm border border-blue-50">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-blue-600 font-bold text-sm tracking-wide block mb-1">GalonKu</span>
          <h1 className="text-2xl font-bold text-slate-900 mb-1.5 tracking-tight">Registrasi</h1>
          <p className="text-slate-500 text-xs">Buat akun baru untuk mulai pesan</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-6">
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 ml-1">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Masukkan Nama Lengkap" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 ml-1">Nomor HP / WhatsApp</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Masukkan No. HP" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 ml-1">Kata Sandi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="Masukkan Password" 
                  className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer text-slate-400 hover:text-slate-600">
                  <EyeOff className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 ml-1">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="Masukkan Password Lagi" 
                  className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer text-slate-400 hover:text-slate-600">
                  <EyeOff className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Address Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-semibold text-slate-700">Alamat Pengiriman</label>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-blue-600 cursor-pointer hover:text-blue-700">
                  <MapPin className="h-3 w-3" />
                  <span>Pin Lokasi</span>
                </div>
              </div>
              <textarea 
                rows="3"
                placeholder="Masukkan Alamat Lengkap" 
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors mt-4 shadow-[0_8px_15px_-5px_rgba(37,99,235,0.4)]"
            >
              DAFTAR
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="mt-auto text-center pb-2">
          <span className="text-slate-500 text-xs">Sudah punya akun? </span>
          <Link to="/login" className="text-blue-600 font-semibold text-xs hover:underline">
            Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  );
}
