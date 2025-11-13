import { useMemo, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import {
    Stethoscope, HeartPulse, Bone, Baby, Brain, Eye, Ear, Syringe, Bandage,
    Search, Filter, SortAsc, SortDesc
} from "lucide-react";

// Nếu gói lucide-react của bạn không có "Tooth", hãy thay bằng Stethoscope
const CATS = ["Khám tổng quát", "Nội", "Ngoại", "Nhi", "RHM", "TMH", "Mắt", "Tim mạch", "Thần kinh"];

const SERVICES = [
    { id: 1, title: "Khám tổng quát cơ bản", desc: "Khám lâm sàng, tư vấn sức khoẻ.", price: 499000, unit: "/lần", icon: Stethoscope, cats: ["Khám tổng quát"] },
    { id: 2, title: "Khám nội tổng quát", desc: "Kiểm tra gan, thận, tiêu hoá, hô hấp…", price: 800000, icon: Stethoscope, cats: ["Nội"] },
    { id: 3, title: "Chụp X-quang xương khớp", desc: "Đánh giá chấn thương, thoái hoá.", price: 300000, icon: Bone, cats: ["Ngoại"] },
    { id: 4, title: "Khám Nhi & tư vấn tiêm", desc: "Theo dõi phát triển, tư vấn dinh dưỡng.", price: 250000, icon: Baby, cats: ["Nhi"] },
    { id: 5, title: "Lấy cao răng", desc: "Làm sạch vôi răng, đánh bóng.", price: 350000, sale: 299000, icon: Stethoscope, cats: ["RHM"] },
    { id: 6, title: "Tẩy trắng răng", desc: "Công nghệ an toàn, nhanh chóng.", price: 1500000, icon: Stethoscope, cats: ["RHM"] },
    { id: 7, title: "Khám tim mạch", desc: "Đo ECG, tư vấn tăng huyết áp.", price: 450000, icon: HeartPulse, cats: ["Tim mạch", "Nội"] },
    { id: 8, title: "Đo khúc xạ mắt", desc: "Tật khúc xạ, cấp đơn kính.", price: 200000, icon: Eye, cats: ["Mắt"] },
    { id: 9, title: "Khám tai mũi họng", desc: "Viêm xoang, viêm họng, dị ứng.", price: 280000, icon: Ear, cats: ["TMH"] },
    { id: 10, title: "Chăm sóc vết thương", desc: "Sát khuẩn, thay băng, cắt chỉ.", price: 150000, icon: Bandage, cats: ["Ngoại"] },
    { id: 11, title: "Tiêm chủng", desc: "Vaccine định kỳ, theo dõi sau tiêm.", price: 0, unit: "/mũi (giá theo vaccine)", icon: Syringe, cats: ["Nhi"] },
    { id: 12, title: "Khám thần kinh", desc: "Đau đầu, mất ngủ, đau dây thần kinh.", price: 500000, icon: Brain, cats: ["Thần kinh", "Nội"] },
];

export default function Services() {
    const [q, setQ] = useState("");
    const [active, setActive] = useState([]);
    const [sortBy, setSortBy] = useState("price"); // price | title
    const [asc, setAsc] = useState(true);

    const list = useMemo(() => {
        const kw = q.trim().toLowerCase();
        let arr = SERVICES.filter(s => {
            const matchKW = !kw || s.title.toLowerCase().includes(kw) || s.desc.toLowerCase().includes(kw);
            const matchCat = active.length === 0 || active.every(t => s.cats.includes(t));
            return matchKW && matchCat;
        });

        arr.sort((a, b) => {
            if (sortBy === "title") {
                const v = a.title.localeCompare(b.title);
                return asc ? v : -v;
            }
            const pa = a.sale ?? a.price;
            const pb = b.sale ?? b.price;
            const v = (pa ?? 0) - (pb ?? 0);
            return asc ? v : -v;
        });

        return arr;
    }, [q, active, sortBy, asc]);

    function toggle(t) {
        setActive(list => list.includes(t) ? list.filter(x => x !== t) : [...list, t]);
    }
    function reset() { setQ(""); setActive([]); }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header nhỏ */}
            <div className="border-b bg-white/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <nav className="text-xs text-gray-500">Trang chủ / <span className="text-blue-700">Dịch vụ</span></nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Dịch vụ tại Tâm An Clinic</h1>
                    <p className="text-gray-600">Chọn dịch vụ phù hợp – minh bạch chi phí, hỗ trợ đặt lịch nhanh.</p>
                </div>
            </div>

            {/* Tìm kiếm + Lọc + Sắp xếp */}
            <section className="max-w-6xl mx-auto px-4 py-6 space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
                        <Search size={18} className="text-gray-400" />
                        <input className="w-full outline-none" placeholder="Tìm dịch vụ, ví dụ: tẩy trắng, tim mạch…"
                            value={q} onChange={(e) => setQ(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-2">
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-xl border bg-white px-3 py-2">
                            <option value="price">Sắp xếp: Giá</option>
                            <option value="title">Sắp xếp: Tên dịch vụ</option>
                        </select>
                        <button onClick={() => setAsc(a => !a)} className="rounded-xl border bg-white px-3 py-2 hover:bg-gray-50">
                            {asc ? <SortAsc size={18} /> : <SortDesc size={18} />}
                        </button>
                        <button onClick={reset} className="rounded-xl border bg-white px-3 py-2 hover:bg-gray-50">Xóa lọc</button>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Filter size={16} /> Danh mục:
                    <div className="flex flex-wrap gap-2">
                        {CATS.map(t => (
                            <button key={t} onClick={() => toggle(t)}
                                className={`px-3 py-1 rounded-full border ${active.includes(t) ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-50"}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lưới dịch vụ */}
            <section className="max-w-6xl mx-auto px-4 pb-12">
                {list.length === 0 ? (
                    <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">
                        Không tìm thấy dịch vụ phù hợp.
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {list.map(s => (
                            <ServiceCard key={s.id} {...s} />
                        ))}
                    </div>
                )}
            </section>

            {/* CTA */}
            <section className="pb-14">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-semibold">Cần tư vấn chọn dịch vụ?</h3>
                            <p className="text-white/90">Liên hệ để được tư vấn miễn phí và báo giá chi tiết.</p>
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
