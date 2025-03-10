import { RiReactjsLine, RiNodejsLine, RiJavaLine } from "react-icons/ri";
import {
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPhp,
  SiXampp,
  SiMysql,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

import { TbBrandTypescript } from "react-icons/tb";

type IconName =
  | "react"
  | "nextjs"
  | "nodejs"
  | "java"
  | "typescript"
  | "javascript"
  | "html5"
  | "css3"
  | "mongodb"
  | "tailwindcss"
  | "git"
  | "express"
  | "php"
  | "xampp"
  | "mysql"
  | "flutter"
  | "firebase";

const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case "react":
      return <RiReactjsLine />;
    case "nextjs":
      return <SiNextdotjs />;
    case "nodejs":
      return <RiNodejsLine />;
    case "java":
      return <RiJavaLine />;
    case "typescript":
      return <TbBrandTypescript />;
    case "javascript":
      return <SiJavascript />;
    case "html5":
      return <SiHtml5 />;
    case "css3":
      return <SiCss3 />;
    case "mongodb":
      return <SiMongodb />;
    case "tailwindcss":
      return <SiTailwindcss />;
    case "git":
      return <SiGit />;
    case "express":
      return <SiExpress />;
    case "php":
      return <SiPhp />;
    case "xampp":
      return <SiXampp />;
    case "mysql":
      return <SiMysql />;
    case "flutter":
      return <SiFlutter />;
    case "firebase":
      return <SiFirebase />;
    default:
      return null;
  }
};

export default getIcon;
