import {
  FaHtml5,
  FaReact,
  FaJava,
  FaCss3,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiKotlin,
  SiC,
  SiCplusplus,
  SiIntellijidea,
  SiEclipseide,
  SiMysql,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

import { TbSql, TbBrandVscode } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-12 items-center xl:items-start">
      <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">Web Development</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">
          <div className="relative group text-3xl text-white">
            <SiNextdotjs />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Next.js
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiNodedotjs />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Node.js
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiExpress />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Express
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <FaReact />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              React
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <FaHtml5 />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              HTML5
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <FaCss3 />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              CSS3
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">Programing</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">
          <div className="relative group text-3xl text-white">
            <FaPython />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Python
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <FaJava />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Java
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiC />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              C
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiCplusplus />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              C++
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiKotlin />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Kotlin
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">Database</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">
          <div className="relative group text-3xl text-white">
            <SiMongodb />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              MongoDB
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiMysql />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              MySQL
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <TbSql />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              SQL
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">UI/UX Design</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">
          <div className="relative group text-3xl text-white">
            <FaFigma />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Figma
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiAdobephotoshop />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Adobe Photoshop
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">IDEs</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">
          <div className="relative group text-3xl text-white">
            <SiIntellijidea />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              IntelliJ IDE
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <TbBrandVscode />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Visual-Studio Code
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiEclipseide />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Eclipse IDE
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
        <div className="font-light mb-2 md:mb-0">Graphics</div>
        <div className="hidden md:flex">-</div>
        <div className="flex gap-x-4">
          <div className="relative group text-3xl text-white">
            <SiAdobeillustrator />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Adobe Illustrator
            </span>
          </div>
          <div className="relative group text-3xl text-white">
            <SiAdobephotoshop />
            <span className="z-50 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-1 text-xs text-black bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Adobe Photoshop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
