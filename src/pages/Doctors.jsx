import { useMemo, useState } from "react";
import { Search, Filter, SortAsc, SortDesc } from "lucide-react";
import DoctorCard from "../components/DoctorCard";
import DoctorModal from "../components/DoctorModal";
import bs1 from "../assets/bs1.jpg";
import bs2 from "../assets/bs2.jpg";
import bs3 from "../assets/bs3.jpg";
import bs4 from "../assets/bs4.jpg";
import bs5 from "../assets/bs5.jpg";
import bs from "../assets/bs.jpg";

const TAGS = ["Khám tổng quát","Nội","Ngoại","Nhi","RHM","TMH","Mắt","Tim mạch","Thần kinh"];

const DOCTORS = [
  { id:1, name:"BS. Nguyễn Minh An", title:"Chuyên gia Răng Hàm Mặt", dept:"Răng hàm mặt", years:8, rating:4.7, location:"Cơ sở Quận 5", img:bs, desc:"Niềng răng, Implant, phục hình thẩm mỹ." },
  { id:2, name:"BS. Trần Thu Hà",   title:"Nội khoa tổng quát",      dept:"Khám tổng quát", years:6, rating:4.6, location:"Cơ sở Quận 3", img:bs3, desc:"Khám sàng lọc, tư vấn sức khỏe." },
  { id:3, name:"BS. Phạm Quốc Dũng",title:"Tim mạch",                dept:"Tim mạch", years:10, rating:4.8, location:"Cơ sở Quận 10", img:bs2, desc:"Chẩn đoán và theo dõi tăng huyết áp." },
  { id:4, name:"BS. Lê Ngọc Anh",   title:"Nhi khoa",                dept:"Nhi", years:5, rating:4.5, location:"Cơ sở Quận 7", img:bs1},
  { id:5, name:"BS. Mai Nhật Tân",  title:"Ngoại tổng quát",         dept:"Ngoại", years:9, rating:4.6, location:"Cơ sở Quận 5", img:bs4 },
  { id:6, name:"BS. Hoàng Gia Bảo", title:"Thần kinh",               dept:"Thần kinh", years:7, rating:4.4, location:"Cơ sở Quận 5", img:bs5 },
];

export default function Doctors() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState([]);
  const [sortBy, setSortBy] = useState("rating"); // rating | years
  const [asc, setAsc] = useState(false);
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(null);

  const list = useMemo(() => {
    const kw = q.trim().toLowerCase();
    let arr = DOCTORS.filter((d) => {
      const matchKW = !kw || d.name.toLowerCase().includes(kw) || d.title.toLowerCase().includes(kw) || d.dept.toLowerCase().includes(kw);
      const matchTag = active.length === 0 || active.some(t => d.dept.toLowerCase().includes(t.toLowerCase()));
      return matchKW && matchTag;
    });

    arr.sort((a,b) => {
      const v = (sortBy === "rating" ? (a.rating ?? 0) - (b.rating ?? 0) : (a.years ?? 0) - (b.years ?? 0));
      return asc ? v : -v;
    });
    return arr;
  }, [q, active, sortBy, asc]);

  function toggleTag(tag) {
    setActive((list) => list.includes(tag) ? list.filter(t => t !== tag) : [...list, tag]);
  }
  function reset() { setQ(""); setActive([]); }

  function openModal(doc) { setPicked(doc); setOpen(true); }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header nhỏ */}
      <div className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500">Trang chủ / <span className="text-blue-700">Chuyên Gia – Bác Sĩ</span></nav>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Đội ngũ bác sĩ tại Tâm An Clinic</h1>
          <p className="text-gray-600">Tìm bác sĩ theo chuyên khoa, đánh giá hoặc kinh nghiệm.</p>
        </div>
      </div>

      {/* Tìm kiếm + Lọc + Sắp xếp */}
      <section className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
            <Search size={18} className="text-gray-400" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Tìm tên bác sĩ, chuyên khoa..."
                   className="w-full outline-none"/>
          </div>

          <div className="flex items-center gap-2">
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}
                    className="rounded-xl border bg-white px-3 py-2">
              <option value="rating">Sắp xếp: Đánh giá</option>
              <option value="years">Sắp xếp: Kinh nghiệm</option>
            </select>
            <button onClick={()=>setAsc(a=>!a)} className="rounded-xl border bg-white px-3 py-2 hover:bg-gray-50">
              {asc ? <SortAsc size={18}/> : <SortDesc size={18}/> }
            </button>
            <button onClick={reset} className="rounded-xl border bg-white px-3 py-2 hover:bg-gray-50">
              Xóa lọc
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Filter size={16}/> Bộ lọc:
          <div className="flex flex-wrap gap-2">
            {TAGS.map(t => (
              <button key={t}
                      onClick={()=>toggleTag(t)}
                      className={`px-3 py-1 rounded-full border ${active.includes(t) ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-50"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Danh sách bác sĩ */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        {list.length === 0 ? (
          <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">
            Không tìm thấy bác sĩ phù hợp.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <DoctorCard key={d.id} {...d} onOpen={()=>openModal(d)} />
            ))}
          </div>
        )}
      </section>

      <DoctorModal open={open} onClose={()=>setOpen(false)} doc={picked} />
    </div>
  );
}
