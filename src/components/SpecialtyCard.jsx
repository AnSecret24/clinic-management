import { ArrowRight } from "lucide-react";

export default function SpecialtyCard({ icon: Icon, title, desc, img }) {
  return (
    <div className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-4">
        {img ? (
          <img src={img} alt={title} className="w-14 h-14 rounded-xl object-cover ring-2 ring-blue-100" />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center ring-2 ring-blue-100">
            <Icon size={26} />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-blue-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
          <button className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 group-hover:gap-1.5 transition">
            Xem chi tiết <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
