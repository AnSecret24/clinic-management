import { X, Star, Phone, Mail, CalendarDays, Stethoscope } from "lucide-react";

export default function DoctorModal({ open, onClose, doc }) {
  if (!open || !doc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="font-semibold text-blue-800">Thông tin bác sĩ</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={18} /></button>
        </div>

        <div className="p-6 grid md:grid-cols-3 gap-6">
          <img src={doc.img || "/doctor-placeholder.jpg"} alt={doc.name}
               className="md:col-span-1 w-40 h-40 mx-auto rounded-full object-cover ring-4 ring-blue-50" />
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold text-blue-800">{doc.name}</h4>
            <p className="text-gray-600">{doc.title}</p>

            <div className="mt-3 grid gap-2 text-sm text-gray-700">
              <p className="flex items-center gap-2"><Stethoscope size={16} className="text-blue-600" /> {doc.dept}</p>
              <p>• Kinh nghiệm: {doc.years}+ năm</p>
              <p>• Đánh giá: <span className="inline-flex items-center gap-1"><Star size={16} className="text-yellow-500 fill-yellow-500"/>{doc.rating.toFixed(1)}/5</span></p>
              <p>• Nơi làm việc: {doc.location}</p>
              <p>• Mô tả: {doc.desc || "Đang cập nhật..."}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/dat-lich-kham"
                 className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
                <CalendarDays size={16}/> Đặt lịch
              </a>
              <a href="tel:0123456789" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-gray-50">
                <Phone size={16}/> Gọi tư vấn
              </a>
              <a href="mailto:thaoanclinic@gmail.com" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-gray-50">
                <Mail size={16}/> Gửi email
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500">
            Lịch khám có thể thay đổi. Vui lòng liên hệ hotline để xác nhận khung giờ.
          </p>
        </div>
      </div>
    </div>
  );
}
