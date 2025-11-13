import { useMemo, useState } from "react";
import SpecialtyCard from "../components/SpecialtyCard";
import {
  Stethoscope, HeartPulse, Bone, Baby, Brain, Eye, Ear, Syringe, Bandage, Search, Filter,
} from "lucide-react";

const ALL_TAGS = ["Khám tổng quát","Nội","Ngoại","Nhi","RHM","TMH","Mắt","Tim mạch","Thần kinh"];

const DATA = [
  { title: "Khám tổng quát", desc: "Sàng lọc sức khỏe toàn diện, tư vấn theo độ tuổi.", icon: Stethoscope, tags: ["Khám tổng quát"] },
  { title: "Tim mạch", desc: "Khám – chẩn đoán – theo dõi tăng huyết áp, rối loạn nhịp.", icon: HeartPulse, tags: ["Nội","Tim mạch"] },
  { title: "Cơ xương khớp", desc: "Đau vai gáy, thoái hóa, chấn thương vận động.", icon: Bone, tags: ["Ngoại"] },
  { title: "Nhi khoa", desc: "Khám trẻ em, tiêm chủng, theo dõi phát triển.", icon: Baby, tags: ["Nhi"] },
  { title: "Răng hàm mặt", desc: "Niềng răng, implant, tẩy trắng, điều trị tủy.", icon: Stethoscope, tags: ["RHM"] },
  { title: "Thần kinh", desc: "Đau đầu, mất ngủ, đau dây thần kinh, động kinh.", icon: Brain, tags: ["Nội","Thần kinh"] },
  { title: "Mắt", desc: "Đo khúc xạ, viêm kết mạc, khô mắt, tật khúc xạ.", icon: Eye, tags: ["Mắt"] },
  { title: "Tai mũi họng", desc: "Viêm xoang, viêm họng, ù tai, dị ứng.", icon: Ear, tags: ["TMH"] },
  { title: "Tiêm chủng", desc: "Vaccine định kỳ, tư vấn trước và sau tiêm.", icon: Syringe, tags: ["Nhi"] },
  { title: "Chăm sóc vết thương", desc: "Thay băng, cắt chỉ, xử lý vết thương nhỏ.", icon: Bandage, tags: ["Ngoại"] },
];

export default function Specialties() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState([]);

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return DATA.filter((d) => {
      const matchKW = !kw || d.title.toLowerCase().includes(kw) || d.desc.toLowerCase().includes(kw);
      const matchTag = active.length === 0 || active.every((t) => d.tags.includes(t));
      return matchKW && matchTag;
    });
  }, [q, active]);

  function toggleTag(tag) {
    setActive((list) =>
      list.includes(tag) ? list.filter((t) => t !== tag) : [...list, tag]
    );
  }

  function reset() {
    setQ("");
    setActive([]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header nhỏ */}
      <div className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500">Trang chủ / <span className="text-blue-700">Chuyên khoa</span></nav>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Chuyên khoa tại Tâm An Clinic</h1>
          <p className="text-gray-600">Tìm nhanh chuyên khoa và đặt lịch phù hợp nhu cầu của bạn.</p>
        </div>
      </div>

      {/* Bộ lọc + tìm kiếm */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
            <Search size={18} className="text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm chuyên khoa, triệu chứng, dịch vụ..."
              className="w-full outline-none"
            />
          </div>
          <button onClick={reset} className="rounded-xl border bg-white px-4 py-2 hover:bg-gray-50">
            Xóa lọc
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <Filter size={16} />
          Bộ lọc:
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`px-3 py-1 rounded-full border ${active.includes(t) ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-50"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Danh sách chuyên khoa */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">
            Không tìm thấy chuyên khoa phù hợp. Thử từ khóa khác nhé!
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <SpecialtyCard key={d.title} icon={d.icon} title={d.title} desc={d.desc} />
            ))}
          </div>
        )}
      </section>

      {/* CTA đặt lịch nhanh */}
      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Bạn cần tư vấn chọn chuyên khoa?</h3>
              <p className="text-white/90">Gửi thông tin để được tư vấn miễn phí trong 24h.</p>
            </div>
            <a href="/lien-he" className="inline-block rounded-xl bg-white text-blue-700 px-5 py-2.5 font-medium hover:bg-blue-50">
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
