// links
import Link from "next/link";

// icons
import { RiLinkedinLine, RiGithubLine, RiWhatsappLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"mailto:harshamalvishwajith@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaRegEnvelope />
      </Link>
      <Link
        href={"mhttps://wa.me/94766583229"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://github.com/it22219916"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/harshamal-vishwajith"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
