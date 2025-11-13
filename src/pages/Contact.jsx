import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    setOk(false); setErr(""); setLoading(true);
    const f = new FormData(e.currentTarget);
    const payload = Object.fromEntries(f.entries());

    try {
      // TODO: đổi URL API khi bạn có backend (ví dụ: /api/contact)
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(payload) });
      await new Promise(r => setTimeout(r, 600)); // demo giả lập
      setOk(true);
      e.currentTarget.reset();
    } catch (e) {
      setErr("Gửi thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header nhỏ */}
      <div className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500">Trang chủ / <span className="text-blue-700">Liên hệ</span></nav>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Liên hệ Tâm An Clinic</h1>
          <p className="text-gray-600">Chúng tôi sẵn sàng hỗ trợ bạn 24/7.</p>
        </div>
      </div>

      {/* Nội dung */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={submit} className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-6 space-y-4">
          <h3 className="text-xl font-semibold text-blue-800">Gửi yêu cầu tư vấn</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Họ và tên*</label>
              <input name="name" required
                     className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="text-sm text-gray-600">Số điện thoại*</label>
              <input name="phone" required
                     pattern="^[0-9+\s()-]{9,}$" title="Nhập số hợp lệ"
                     className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Email (tuỳ chọn)</label>
              <input name="email" type="email"
                     className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="text-sm text-gray-600">Chủ đề</label>
              <input name="subject"
                     className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Nội dung*</label>
            <textarea name="message" required rows={5}
                      className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <button disabled={loading}
                  className="w-full sm:w-auto rounded-xl bg-blue-600 text-white px-6 py-2.5 font-medium hover:bg-blue-700 disabled:opacity-60">
            {loading ? "Đang gửi..." : "Gửi yêu cầu"}
          </button>

          {ok && <p className="text-green-600 text-sm">✅ Đã nhận yêu cầu. Chúng tôi sẽ liên hệ sớm!</p>}
          {err && <p className="text-red-600 text-sm">{err}</p>}
        </form>

        {/* Thông tin liên hệ */}
        <aside className="space-y-4">
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h4 className="text-lg font-semibold text-blue-800">Thông tin</h4>
            <p className="mt-2 text-sm text-gray-600">
              Trung tâm chăm sóc sức khỏe tận tâm – hiện đại – hiệu quả.
            </p>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2"><Phone size={16}/> 0123 456 789</p>
              <p className="flex items-center gap-2"><Mail size={16}/> tamanclinic@gmail.com</p>
              <p className="flex items-center gap-2"><MapPin size={16}/> 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
              <p className="flex items-center gap-2"><Clock size={16}/> Thứ 2–CN: 08:00–20:00</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
            {/* Nhúng Google Maps – bạn thay q= theo địa chỉ thật nếu muốn */}
            <iframe
              title="map"
              width="100%" height="260" loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=123%20Nguy%E1%BB%85n%20V%C4%83n%20C%E1%BB%AB,%20Qu%E1%BA%ADn%205,%20TP.HCM&output=embed">
            </iframe>
          </div>
        </aside>
      </section>
    </div>
  );
}
