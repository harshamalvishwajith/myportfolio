import { MdWork } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export default function Languages() {
  return (
    <div className="max-w-xl text-base text-white/60">
      <div className="flex items-center gap-x-3 mb-4">
        <div className="text-lg text-blue-300">
          <MdWork />
        </div>
        <p className="text-white">English</p>
        <p>-</p>
        <p>Working Proficiency</p>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="text-lg text-blue-300">
          <FaHome />
        </div>
        <p className="text-white">Sinhala</p>
        <p>-</p>
        <p>Native Language</p>
      </div>
    </div>
  );
}
