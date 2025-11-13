import React from 'react';
import banner from "../assets/banner.jpg";
import hospital from "../assets/hospital.jpg";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text & Promo */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 leading-tight mb-4">
            Chăm sóc sức khỏe <br /> Toàn diện cùng <span className="text-blue-500">Tâm An Clinic</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Đặt lịch khám nhanh, tư vấn miễn phí và ưu đãi khám tổng quát.  
            Sức khỏe của bạn – Sứ mệnh của chúng tôi.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Gói khám tổng quát chỉ từ <b>499K</b></li>
            <li>• Niềng răng – Implant – Thẩm mỹ – Khám nha khoa</li>
            <li>• Tư vấn miễn phí 24/7</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Đặt lịch ngay
          </button>
        </div>

        {/* Ảnh Banner */}
        <div className="relative">
          
          <img
            src={hospital}
            alt="Hình bệnh viện"
            className="absolute -bottom-8 right-0 w-64 lg:w-80 rounded-xl shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
