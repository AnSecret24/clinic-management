import { ArrowRight, BadgePercent } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, desc, price, unit="/lần", sale, img }) {
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

          <div className="mt-3 flex items-center gap-2">
            {sale ? (
              <>
                <span className="text-lg font-bold text-blue-700">{sale.toLocaleString()}đ</span>
                <span className="text-sm text-gray-400 line-through">{price.toLocaleString()}đ</span>
                <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  <BadgePercent size={14}/> Giảm
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-blue-700">{price.toLocaleString()}đ</span>
            )}
            <span className="text-sm text-gray-500">{unit}</span>
          </div>

          <a href="/dat-lich-kham"
             className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 group-hover:gap-1.5 transition">
            Đặt lịch ngay <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </div>
  );
}
