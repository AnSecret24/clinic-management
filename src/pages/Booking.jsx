// src/pages/Booking.jsx
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import { Calendar, Clock, User, Stethoscope, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

// --- dữ liệu demo ---
const SPECIALTIES = ["Khám tổng quát","Nội","Ngoại","Nhi","RHM","TMH","Mắt","Tim mạch","Thần kinh"];

const DOCTORS = [
  { id:1, name:"BS. Nguyễn Minh An", dept:"Răng hàm mặt", location:"Cơ sở Quận 5" },
  { id:2, name:"BS. Trần Thu Hà",   dept:"Khám tổng quát", location:"Cơ sở Quận 3" },
  { id:3, name:"BS. Phạm Quốc Dũng",dept:"Tim mạch",      location:"Cơ sở Quận 10" },
  { id:4, name:"BS. Lê Ngọc Anh",   dept:"Nhi",           location:"Cơ sở Quận 7" },
];

// DỊCH VỤ (lọc bằng includes theo dept)
const SERVICES = [
  { id:101, title:"Khám tổng quát cơ bản", dept:"Khám tổng quát", price: 499000, unit:"/lần" },
  { id:102, title:"Khám nội tổng quát",    dept:"Nội",            price: 800000, unit:"/lần" },
  { id:103, title:"Chụp X-quang xương",    dept:"Ngoại",          price: 300000, unit:"/lần" },
  { id:104, title:"Khám Nhi & tư vấn",     dept:"Nhi",            price: 250000, unit:"/lần" },
  { id:105, title:"Lấy cao răng",          dept:"Răng hàm mặt",   price: 299000, unit:"/lần" },
  { id:106, title:"Tẩy trắng răng",        dept:"Răng hàm mặt",   price: 1500000, unit:"/lần" },
  { id:107, title:"Khám tim mạch",         dept:"Tim mạch",       price: 450000, unit:"/lần" },
  { id:108, title:"Đo khúc xạ mắt",        dept:"Mắt",            price: 200000, unit:"/lần" },
  { id:109, title:"Khám tai mũi họng",     dept:"TMH",            price: 280000, unit:"/lần" },
  { id:110, title:"Chăm sóc vết thương",   dept:"Ngoại",          price: 150000, unit:"/lần" },
];

const SLOTS = ["08:00","08:30","09:00","09:30","10:00","10:30","13:30","14:00","14:30","15:00","15:30","16:00"];

export default function Booking() {
  const [sp] = useSearchParams();
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  // form state
  const [form, setForm] = useState({
    full_name: "", phone: "", email: "",
    branch: "Cơ sở Quận 5",
    dept: "", doctorId: "", serviceId: "",
    date: new Date().toISOString().slice(0,10),
    slot: "", note: ""
  });

  // nhận sẵn dept / doctorId / serviceId từ query: ?dept=RHM&doctorId=3&serviceId=105
  useEffect(() => {
    const dept = sp.get("dept");
    const doctorId = sp.get("doctorId");
    const serviceId = sp.get("serviceId");
    setForm(f => ({
      ...f,
      dept: dept || f.dept,
      doctorId: doctorId || f.doctorId,
      serviceId: serviceId || f.serviceId
    }));
  }, [sp]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const pickSlot = (s) => setForm({ ...form, slot: s });

  // lọc bác sĩ & dịch vụ theo chuyên khoa
  const doctorsByDept = useMemo(() => {
    if (!form.dept) return DOCTORS;
    return DOCTORS.filter(d => d.dept.toLowerCase().includes(form.dept.toLowerCase()));
  }, [form.dept]);

  const servicesByDept = useMemo(() => {
    if (!form.dept) return SERVICES;
    return SERVICES.filter(s => s.dept.toLowerCase().includes(form.dept.toLowerCase()));
  }, [form.dept]);

  const pickedService = useMemo(
    () => SERVICES.find(s => String(s.id) === String(form.serviceId)),
    [form.serviceId]
  );
  const pickedDoctor = useMemo(
    () => DOCTORS.find(d => String(d.id) === String(form.doctorId)),
    [form.doctorId]
  );

  async function submit(e) {
    e.preventDefault();
    if (!form.serviceId) return alert("Vui lòng chọn dịch vụ!");
    if (!form.slot) return alert("Vui lòng chọn khung giờ!");
    setLoading(true);
    await new Promise(r => setTimeout(r, 700)); // UI-only
    setLoading(false);
    setOk(true);
  }

  // màn hình thành công
  if (ok) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white border rounded-2xl shadow-sm p-8 text-center">
          <CheckCircle2 className="mx-auto text-green-600" size={48}/>
          <h1 className="text-2xl font-semibold text-blue-800 mt-3">Đặt lịch thành công!</h1>
          <p className="text-gray-600 mt-1">
            {pickedService ? <>Dịch vụ <b>{pickedService.title}</b></> : "Dịch vụ đã chọn"} vào <b>{form.date}</b> lúc <b>{form.slot}</b>. 
            Bộ phận CSKH sẽ liên hệ xác nhận sớm.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <NavLink to="/" className="rounded-xl border px-4 py-2 hover:bg-gray-50">Về trang chủ</NavLink>
            <NavLink to="/lien-he" className="rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Cần hỗ trợ</NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header nhỏ */}
      <div className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500">Trang chủ / <span className="text-blue-700">Đặt lịch khám bệnh</span></nav>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Đặt lịch khám bệnh</h1>
          <p className="text-gray-600">Chọn chuyên khoa, dịch vụ, bác sĩ, ngày và khung giờ phù hợp.</p>
        </div>
      </div>

      {/* Nội dung */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* Form đặt lịch */}
        <form onSubmit={submit} className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-6 space-y-5">
          <h3 className="text-xl font-semibold text-blue-800">Thông tin bệnh nhân</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Họ và tên*</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <User size={16} className="text-gray-400"/>
                <input name="full_name" required value={form.full_name} onChange={change} className="w-full py-2 outline-none" placeholder="Nguyễn Văn A"/>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Số điện thoại*</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <Phone size={16} className="text-gray-400"/>
                <input name="phone" required value={form.phone} onChange={change} className="w-full py-2 outline-none" placeholder="0123 456 789"/>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Email (tuỳ chọn)</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <Mail size={16} className="text-gray-400"/>
                <input name="email" type="email" value={form.email} onChange={change} className="w-full py-2 outline-none" placeholder="you@email.com"/>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Cơ sở</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <MapPin size={16} className="text-gray-400"/>
                <select name="branch" value={form.branch} onChange={change} className="w-full py-2 outline-none bg-transparent">
                  <option>Cơ sở Quận 5</option>
                  <option>Cơ sở Quận 3</option>
                  <option>Cơ sở Quận 7</option>
                  <option>Cơ sở Quận 10</option>
                </select>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-blue-800">Thông tin khám</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Chuyên khoa</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <Stethoscope size={16} className="text-gray-400"/>
                <select
                  name="dept"
                  value={form.dept}
                  onChange={(e) => {
                    const v = e.target.value;
                    // đổi chuyên khoa -> reset bác sĩ & dịch vụ để tránh lệch
                    setForm(f => ({ ...f, dept: v, doctorId: "", serviceId: "" }));
                  }}
                  className="w-full py-2 outline-none bg-transparent"
                >
                  <option value="">-- Chọn chuyên khoa --</option>
                  {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Bác sĩ</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <User size={16} className="text-gray-400"/>
                <select name="doctorId" value={form.doctorId} onChange={change} className="w-full py-2 outline-none bg-transparent">
                  <option value="">-- Chọn bác sĩ --</option>
                  {doctorsByDept.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.dept})</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* NEW: chọn dịch vụ */}
          <div>
            <label className="text-sm text-gray-600">Dịch vụ*</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
              <Stethoscope size={16} className="text-gray-400"/>
              <select
                name="serviceId"
                value={form.serviceId}
                onChange={change}
                className="w-full py-2 outline-none bg-transparent"
                required
              >
                <option value="">-- Chọn dịch vụ --</option>
                {servicesByDept.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title} {s.price ? `- ${s.price.toLocaleString()}đ` : ""}
                  </option>
                ))}
              </select>
            </div>
            {pickedService && (
              <p className="text-sm text-blue-700 mt-2">
                Giá dự kiến: <b>{pickedService.price.toLocaleString()}đ</b> {pickedService.unit || ""}
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Ngày khám</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3">
                <Calendar size={16} className="text-gray-400"/>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={change}
                  min={new Date().toISOString().slice(0,10)}
                  className="w-full py-2 outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Khung giờ</label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                {SLOTS.map((s) => (
                  <button type="button" key={s}
                          onClick={() => pickSlot(s)}
                          className={`flex items-center justify-center gap-1 rounded-lg border py-2 ${form.slot===s ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-50"}`}>
                    <Clock size={16}/> {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Lý do khám / Triệu chứng</label>
            <textarea name="note" value={form.note} onChange={change}
                      className="mt-1 w-full rounded-lg border px-3 py-2 h-24 outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          {/* Tóm tắt nhanh */}
          <div className="rounded-xl border bg-blue-50 text-blue-900 p-4 text-sm">
            <p><b>Tóm tắt:</b> {form.full_name || "(Chưa nhập họ tên)"} • {form.phone || "(Chưa có SĐT)"}</p>
            <p>
              {form.dept ? `Chuyên khoa: ${form.dept}` : "Chưa chọn chuyên khoa"}
              {pickedDoctor ? ` • Bác sĩ: ${pickedDoctor.name}` : ""}
              {pickedService ? ` • Dịch vụ: ${pickedService.title} (${pickedService.price.toLocaleString()}đ)` : ""}
            </p>
            <p>{form.date} • {form.slot || "Chưa chọn giờ"} • {form.branch}</p>
          </div>

          <button disabled={loading}
                  className="w-full sm:w-auto rounded-xl bg-blue-600 text-white px-6 py-2.5 font-medium hover:bg-blue-700 disabled:opacity-60">
            {loading ? "Đang đặt lịch..." : "Xác nhận đặt lịch"}
          </button>
        </form>

        {/* Thông tin hỗ trợ */}
        <aside className="space-y-4">
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h4 className="text-lg font-semibold text-blue-800">Hỗ trợ đặt lịch</h4>
            <p className="text-sm text-gray-600 mt-1">Hotline và email tiếp nhận 24/7.</p>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2"><Phone size={16}/> 0123 456 789</li>
              <li className="flex items-center gap-2"><Mail size={16}/> tamanclinic@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
            <iframe
              title="map"
              width="100%" height="260" loading="lazy" className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=123%20Nguy%E1%BB%85n%20Văn%20Cừ,%20Quận%205,%20TP.HCM&output=embed">
            </iframe>
          </div>
        </aside>
      </section>
    </div>
  );
}
