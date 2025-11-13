import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  function submit(e) {
    e.preventDefault();
    alert("(UI-only) Đã bấm Tạo tài khoản!");
  }

  const Input = ({ icon: Icon, ...props }) => (
    <div className="flex items-center gap-2 rounded-lg border px-3">
      <Icon size={16} className="text-gray-400" />
      <input {...props} className="w-full py-2 outline-none" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-lg bg-white rounded-2xl border shadow-sm p-6 space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-800">Đăng ký tài khoản</h1>
          <p className="text-sm text-gray-600">Tạo tài khoản để đặt lịch nhanh hơn</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Họ tên*</label>
            <Input icon={User} name="full_name" required placeholder="Nguyễn Văn A" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Tên đăng nhập*</label>
            <Input icon={User} name="username" required placeholder="thaoan" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Số điện thoại</label>
            <Input icon={Phone} name="phone" placeholder="0123 456 789" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <Input icon={Mail} type="email" name="email" placeholder="you@email.com" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Mật khẩu*</label>
            <div className="flex items-center gap-2 rounded-lg border px-3">
              <Lock size={16} className="text-gray-400" />
              <input type={show1 ? "text" : "password"} name="password" required placeholder="••••••••" className="w-full py-2 outline-none" />
              <button type="button" onClick={() => setShow1(s => !s)} className="text-gray-500">
                {show1 ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Tối thiểu 6 ký tự.</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Xác nhận mật khẩu*</label>
            <div className="flex items-center gap-2 rounded-lg border px-3">
              <Lock size={16} className="text-gray-400" />
              <input type={show2 ? "text" : "password"} name="confirm" required placeholder="••••••••" className="w-full py-2 outline-none" />
              <button type="button" onClick={() => setShow2(s => !s)} className="text-gray-500">
                {show2 ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        <button className="w-full rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700">
          Tạo tài khoản
        </button>

        <p className="text-sm text-gray-600 text-center">
          Đã có tài khoản?{" "}
          <NavLink to="/dang-nhap" className="text-blue-700 hover:underline">Đăng nhập</NavLink>
        </p>
      </form>
    </div>
  );
}
