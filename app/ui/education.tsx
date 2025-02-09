import Image from "next/image";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

export default function Education() {
  return (
    <ul className="max-w-xl divide-y divide-gray-700">
      <li className="px-3 sm:pb-4">
        <div className="flex items-center py-2 space-x-4 rtl:space-x-reverse">
          <div className="shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src="/sliit-web-logo.png"
              alt="SLIIT logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">
              BSc (Hons) in Information Technology Specialising in Software
              Engineering
            </p>
            <p className="text-sm text-white/60">
              Sri Lanka Institute of Information Technology
            </p>
          </div>
        </div>
        <div className="flex items-center text-sm mb-2 font-light gap-x-3 text-white/60">
          <MdOutlineCalendarMonth />
          <div className="inline-flex">Oct 2022</div>
          <div>-</div>
          <div>present</div>
        </div>
        <div className="flex items-center text-sm mb-2 gap-x-3 text-white/60">
          <div className="font-light mb-2 md:mb-0"> Cumulative GPA</div>
          <div>-</div>
          <div className="text-white text-base">3.2</div>
        </div>
        <a
          href="/ResultSheet.pdf"
          className="flex items-center text-sm gap-x-3 text-blue-300 group"
        >
          <div>📄</div>
          <div className="underline">Result Sheet</div>
          <HiArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
        </a>
      </li>
      <li className="px-3 sm:pb-4">
        <div className="flex items-center py-2 space-x-4 rtl:space-x-reverse">
          <div className="shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src="/sliit-web-logo.png"
              alt="SLIIT logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">
              Higher National Diploma in Information Technology
            </p>
            <p className="text-sm text-white/60">
              Sri Lanka Institute of Information Technology
            </p>
          </div>
        </div>
        <div className="flex items-center text-sm mb-2 font-light gap-x-3 text-white/60">
          <MdOutlineCalendarMonth />
          <div className="inline-flex">Oct 2022</div>
          <div>-</div>
          <div>Jun 2024</div>
        </div>
        <a
          href="/HigherDiploma.pdf"
          className="flex items-center text-sm gap-x-3 text-blue-300 group"
        >
          <div>🎖️</div>
          <div className="underline">Certificate</div>
          <HiArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
        </a>
      </li>
      <li className="px-3 sm:pb-4">
        <div className="flex items-center py-2 space-x-4 rtl:space-x-reverse">
          <div className="shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src="/sylvester-logo.png"
              alt="Sylvester's logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">
              G.C.E (Advanced Level) examination
            </p>
            <p className="text-sm text-white/60">
              St. Sylvester&apos;s College, Kandy
            </p>
          </div>
        </div>
        <div className="flex items-center text-sm mb-2 font-light gap-x-3 text-white/60">
          <MdOutlineCalendarMonth />
          <div className="inline-flex">2022(2021)</div>
        </div>
        <div className="flex items-center text-sm mb-2 gap-x-3 text-white/60">
          <div className="font-light mb-2 md:mb-0">Field</div>
          <div>-</div>
          <div className="text-white">Physical Science</div>
        </div>
        <p className="text-base text-white">🏅 Passed with 1C and 2S&apos;s.</p>
      </li>
      <li className="px-3 sm:pb-4">
        <div className="flex items-center py-2 space-x-4 rtl:space-x-reverse">
          <div className="shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src="/sylvester-logo.png"
              alt="Sylvester's logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">
              G.C.E (Ordinary Level) examination
            </p>
            <p className="text-sm text-white/60">
              St. Sylvester&apos;s College, Kandy
            </p>
          </div>
        </div>
        <div className="flex items-center text-sm mb-2 font-light gap-x-3 text-white/60">
          <MdOutlineCalendarMonth />
          <div className="inline-flex">2018</div>
        </div>
        <p className="text-base text-white">🏅 Passed with 9A&apos;s.</p>
      </li>
    </ul>
  );
}
