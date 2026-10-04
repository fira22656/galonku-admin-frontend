import React, { useState } from 'react';
import { 
  Droplet, 
  Zap, 
  IdCard, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password
      });
      
      if (response.data && response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/dashboard'); // Change to your actual dashboard route
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal. Silakan periksa kembali email dan password Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      {/* Header */}
      <div className="absolute top-8 left-10 flex items-center gap-3 z-10">
        <div className="bg-[#1E3A8A] p-2 rounded-xl flex items-center justify-center shadow-sm">
          <Droplet className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-800 text-lg leading-tight">GalonKu</span>
          <span className="text-teal-600 font-bold text-[10px] tracking-wider leading-none mt-0.5">ADMIN<br/>PORTAL</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 w-full px-4 mt-8">
        
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[420px] p-8 pt-10">
          
          {/* Avatar */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-20 h-20 bg-[#F1F5F9] rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src="/admin-avatar.png" 
                  alt="Admin Profile" 
                  className="w-full h-full object-cover scale-[1.35] mt-1" 
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-green-700 rounded-full p-1 border-2 border-white z-10">
                <Zap className="w-3 h-3 text-white" fill="white" strokeWidth={2} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">GalonKu Admin</h2>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username/Email */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm px-1">
                <label className="font-bold text-slate-700 text-[13px]">Username / Email / ID Staf</label>
                <span className="text-teal-600 font-bold text-[11px]">Wajib</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <IdCard className="h-5 w-5 text-slate-400" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-[#F4F6FB] border border-transparent rounded-xl text-[14px] text-slate-700 font-medium placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  placeholder="admin@galonku.id"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-center text-sm px-1">
                <label className="font-bold text-slate-700 text-[13px]">Kata Sandi / Password</label>
                <button type="button" className="text-blue-600 font-bold text-[11px] hover:underline">Lupa Kata Sandi?</button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" strokeWidth={2} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-3 bg-[#F4F6FB] border border-transparent rounded-xl text-[14px] text-slate-700 font-medium placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" strokeWidth={2} /> : <Eye className="h-5 w-5" strokeWidth={2} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center pt-2 pb-1 px-1">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 bg-slate-100 border-gray-300 rounded focus:ring-blue-500/20 focus:ring-4 cursor-pointer"
                />
              </div>
              <label htmlFor="remember" className="ml-2.5 text-[13px] font-medium text-slate-600 cursor-pointer">
                Ingat saya di perangkat ini
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Memproses...
                </>
              ) : (
                <>
                  Masuk ke Dashboard Admin
                  <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>

          {/* Driver App Link */}
          <div className="mt-8 text-center text-[12px] text-slate-500 font-medium">
            Butuh akses kurir lapangan?{' '}
            <a href="#" className="text-teal-600 font-bold inline-flex items-center hover:underline ml-1">
              Aplikasi Driver <ExternalLink className="w-3.5 h-3.5 ml-0.5" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Version & Server */}
        <div className="mt-8 text-[11px] text-slate-400 font-semibold tracking-wide">
          GalonKu v4.12.0 (Build 2026.04) <span className="mx-2 text-slate-300">•</span> Server: jkt01-depo.internal
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-10 right-10 flex justify-between items-center text-[11px] text-slate-500 font-semibold z-10">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-teal-600" strokeWidth={2} />
          <span>Enkripsi Operasional End-to-End <span className="mx-1 text-slate-300">•</span> Wilayah Logistik Jabodetabek</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-700 transition-colors">Pusat Bantuan</a>
          <span className="text-slate-300">•</span>
          <a href="#" className="hover:text-slate-700 transition-colors">Privasi & Kebijakan Internal</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
