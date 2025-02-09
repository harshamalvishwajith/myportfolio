import Image from "next/image";

export default function ExtraCurricular() {
  return (
    <>
      <div className="flex items-center py-2 space-x-4 rtl:space-x-reverse">
        <Image
          className="w-8 h-8 rounded-full"
          src="/sylvester-logo.png"
          alt="Sylvester's logo"
          width={40}
          height={40}
        />
        <p className="text-sm font-medium text-white">
          @ St. Sylvester&apos;s College, Kandy
        </p>
      </div>
      <ul className="max-w-xl divide-y divide-gray-700">
        <li className="px-3 sm: py-4">
          <div className="flex items-center text-base mb-2 gap-x-3 text-white/60">
            <div className="font-light mb-2 md:mb-0 text-white">Media Unit</div>
            <div>-</div>
            <div className="text-white">Secretary</div>
          </div>
          <ul className="max-w-md space-y-1 text-white/60 list-disc list-inside text-sm">
            <li>
              Organized an all-island media day competition and media day in the
              year 2021.
            </li>
          </ul>
        </li>
        <li className="px-3 sm: py-4">
          <div className="flex items-center text-base mb-2 gap-x-3 text-white/60">
            <div className="font-light mb-2 md:mb-0 text-white">
              ICT Society
            </div>
            <div>-</div>
            <div className="text-white">Assistant Secretary</div>
          </div>
          <ul className="max-w-md space-y-1 text-white/60 list-disc list-inside text-sm">
            <li>
              Organized an all-island ICT Day competition and ICT Day event in
              the year 2021.
            </li>
            <li>
              Live-streamed the St. Sylvester&apos;s College vs. Vidyartha
              College big match ODI.
            </li>
          </ul>
        </li>
        <li className="px-3 sm: py-4">
          <div className="flex items-center text-base mb-2 gap-x-3 text-white/60">
            <div className="font-light mb-2 md:mb-0 text-white">
              Association of Psychology
            </div>
            <div>-</div>
            <div className="text-white">Vice President</div>
          </div>
          <ul className="max-w-md space-y-1 text-white/60 list-disc list-inside text-sm">
            <li>Organized a Psychology Day event in the year 2019.</li>
          </ul>
        </li>
        <li className="px-3 sm: py-4">
          <div className="flex items-center text-base mb-2 gap-x-3 text-white/60">
            <div className="font-light mb-2 md:mb-0 text-white">
              Athletic Team
            </div>
            <div>-</div>
            <div className="text-white">Member</div>
          </div>
          <ul className="max-w-md space-y-1 text-white/60 list-disc list-inside text-sm">
            <li>
              Played a big part in organizing the college&apos;s annual sports
              meet.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
