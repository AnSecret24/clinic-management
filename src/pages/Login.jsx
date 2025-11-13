import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [show, setShow] = useState(false);

  function submit(e) {
    e.preventDefault();
    // UI-only: không gọi API
    alert("(UI-only) Đã bấm Đăng nhập!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white rounded-2xl border shadow-sm p-6 space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-800">Đăng nhập</h1>
          <p className="text-sm text-gray-600">Chào mừng bạn quay lại Tâm An Clinic</p>
        </div>

        <div>
          <label className="text-sm text-gray-600">Tên đăng nhập / Email</label>
          <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
            <Mail size={16} className="text-gray-400" />
            <input
              name="username"
              required
              className="w-full py-2 outline-none"
              placeholder="thaoan hoặc you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Mật khẩu</label>
          <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
            <Lock size={16} className="text-gray-400" />
            <input
              type={show ? "text" : "password"}
              name="password"
              required
              className="w-full py-2 outline-none"
              placeholder="••••••••"
            />
            <button type="button" onClick={() => setShow(s => !s)} className="text-gray-500">
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button className="w-full rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700">
          Đăng nhập
        </button>

        <p className="text-sm text-gray-600 text-center">
          Chưa có tài khoản?{" "}
          <NavLink to="/dang-ky" className="text-blue-700 hover:underline">Đăng ký</NavLink>
        </p>
      </form>
    </div>
  );
}
