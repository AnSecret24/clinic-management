import { Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";

const linkCls =
  "text-sm px-0 hover:text-blue-700 transition";
const activeCls = "text-blue-700 font-semibold";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-200 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Stethoscope size={20} />
          </div>
          <span className="font-bold text-blue-700">
            PHÒNG KHÁM TƯ NHÂN TÂM AN
          </span>
        </NavLink>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/gioi-thieu" className={({isActive}) => `${linkCls} ${isActive?activeCls:""}`}>
            Giới Thiệu
          </NavLink>
          <NavLink to="/chuyen-khoa" className={({isActive}) => `${linkCls} ${isActive?activeCls:""}`}>
            Chuyên Khoa
          </NavLink>
          <NavLink to="/bac-si" className={({isActive}) => `${linkCls} ${isActive?activeCls:""}`}>
            Chuyên Gia - Bác Sĩ
          </NavLink>
          <NavLink to="/dich-vu" className={({isActive}) => `${linkCls} ${isActive?activeCls:""}`}>
            Dịch Vụ
          </NavLink>
          <NavLink to="/dat-lich-kham" className={({isActive}) => `${linkCls} ${isActive?activeCls:""}`}>
            Đặt Lịch Khám Bệnh
          </NavLink>
          <NavLink to="/lien-he" className={({isActive}) => `${linkCls} ${isActive?activeCls:""}`}>
            Liên Hệ
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <NavLink to="/dang-nhap"
            className="px-3 py-2 text-sm rounded-lg border hover:bg-gray-50">
            Đăng nhập
          </NavLink>
          <NavLink to="/dang-ky"
            className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Đăng ký
          </NavLink>
        </div>
      </div>
    </header>
  );
}
