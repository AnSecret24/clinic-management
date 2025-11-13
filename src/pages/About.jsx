import { Phone, Mail, MapPin, BadgeCheck, Calendar, ShieldCheck, Users } from "lucide-react";
import hospital from "../assets/hospital.jpg"; // ảnh minh hoạ (tuỳ bạn đổi)

function ContactCard() {
  return (
    <aside className="bg-white/90 backdrop-blur rounded-2xl border shadow-sm p-5">
      <h3 className="text-lg font-semibold text-blue-700">Liên hệ tư vấn</h3>
      <p className="text-sm text-gray-600 mt-1">Nhập thông tin để được đội ngũ hỗ trợ gọi lại.</p>

      <form className="mt-4 space-y-3">
        <input className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Họ và tên*" />
        <input className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Số điện thoại*" />
        <input className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Email (tuỳ chọn)" />
        <textarea className="w-full rounded-lg border px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nội dung tư vấn..." />
        <button type="button"
                className="w-full rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-700">
          Gửi yêu cầu
        </button>
      </form>

      <div className="mt-5 grid gap-2 text-sm text-gray-700">
        <p className="flex items-center gap-2"><Phone size={16}/> 0123 456 789</p>
        <p className="flex items-center gap-2"><Mail size={16}/> thaoanclinic@gmail.com</p>
        <p className="flex items-center gap-2"><MapPin size={16}/> 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
      </div>
    </aside>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Breadcrumb + title */}
      <div className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500">
            Trang chủ / <span className="text-blue-700">Giới thiệu</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">
            Chăm Sóc Sức Khỏe Toàn Diện Tại <span className="text-blue-600">Tâm An Clinic</span>
          </h1>
          <p className="text-gray-600 mt-1">Uy tín – Tận tâm – Hiện đại</p>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* Left content */}
        <article className="lg:col-span-2 space-y-6">
          <img src={hospital} alt="Tâm An Clinic" className="w-full rounded-2xl border shadow-sm" />

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-blue-800">Giới thiệu chung</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Tâm An Clinic là phòng khám tư nhân hướng tới dịch vụ y tế chất lượng cao,
              ứng dụng công nghệ để tối ưu trải nghiệm khám chữa bệnh cho bệnh nhân.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              <div className="flex items-start gap-3">
                <BadgeCheck className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Đội ngũ chuyên môn</h4>
                  <p className="text-sm text-gray-600">Bác sĩ và nhân viên có kinh nghiệm, phong cách phục vụ tận tình.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Quy trình chuẩn hoá</h4>
                  <p className="text-sm text-gray-600">Tiếp nhận – Khám – Kê đơn – Thanh toán – Lưu hồ sơ bảo mật.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Đặt lịch nhanh chóng</h4>
                  <p className="text-sm text-gray-600">Chọn bác sĩ/khung giờ, xác nhận lịch hẹn và nhắc lịch tự động.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Chăm sóc khách hàng</h4>
                  <p className="text-sm text-gray-600">Tư vấn miễn phí, hỗ trợ 24/7 qua điện thoại và email.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats / cam kết */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border shadow-sm p-5 text-center">
              <p className="text-3xl font-bold text-blue-700">+5</p>
              <p className="text-sm text-gray-600">Chuyên khoa</p>
            </div>
            <div className="bg-white rounded-2xl border shadow-sm p-5 text-center">
              <p className="text-3xl font-bold text-blue-700">+200</p>
              <p className="text-sm text-gray-600">Hồ sơ bệnh nhân</p>
            </div>
            <div className="bg-white rounded-2xl border shadow-sm p-5 text-center">
              <p className="text-3xl font-bold text-blue-700">+50</p>
              <p className="text-sm text-gray-600">Lịch khám/ngày</p>
            </div>
          </div>

          {/* Sứ mệnh & giá trị */}
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-blue-800">Sứ mệnh và Giá trị</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
              <li>Lấy bệnh nhân làm trung tâm – nâng cao trải nghiệm dịch vụ.</li>
              <li>Minh bạch – Bảo mật dữ liệu – Tuân thủ quy định y tế.</li>
              {/* <li>Ứng dụng CNTT để tối ưu vận hành và ra quyết định.</li> */}
            </ul>
          </div>
        </article>

        {/* Right contact form */}
        <div className="lg:col-span-1">
          <ContactCard />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Bạn cần tư vấn thêm?</h3>
              <p className="text-white/90">Liên hệ ngay để đặt lịch hoặc nhận tư vấn miễn phí.</p>
            </div>
            <a href="#"
               className="inline-block rounded-xl bg-white text-blue-700 px-5 py-2.5 font-medium hover:bg-blue-50">
              Đặt lịch khám
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
