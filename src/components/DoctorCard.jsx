import { Star, Stethoscope, GraduationCap, MapPin, ChevronRight } from "lucide-react";

export default function DoctorCard({ img, name, title, dept, years, rating, location, onOpen }) {
  return (
    <div className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <img
          src={img || "/doctor-placeholder.jpg"}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-800">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>

          <div className="mt-2 grid gap-1 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <Stethoscope size={16} className="text-blue-600" /> {dept}
            </p>
            <p className="flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-600" /> {years}+ năm kinh nghiệm
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" /> {location}
            </p>
            <p className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500 fill-yellow-500" /> {rating.toFixed(1)}/5
            </p>
          </div>

          <button
            onClick={onOpen}
            className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 group-hover:gap-1.5 transition"
          >
            Xem chi tiết <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
