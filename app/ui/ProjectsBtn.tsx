// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icon
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[155px] h-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-40"
      >
        <Image
          src={`${basePath}/rounded-text.png`}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[111px] max-h-[118px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
