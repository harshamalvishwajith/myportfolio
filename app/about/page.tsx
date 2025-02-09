import Skills from "@/app/ui/skills";
import Education from "@/app/ui/education";
import SoftSkills from "@/app/ui/softSkills";
import ExtraCurricular from "@/app/ui/extraCurricular";
import Languages from "@/app/ui/languages";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 xl:p-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="flex flex-col items-center xl:items-start rounded-lg">
          <div className="text-2xl font-bold text-blue-300">Hard Skills</div>
          <Skills />
        </div>
        <div className="flex flex-col items-center xl:items-start rounded-lg">
          <div className="text-2xl font-bold text-blue-300 mb-3">Education</div>
          <Education />
        </div>
        <div className="flex flex-col items-center xl:items-start rounded-lg">
          <div className="text-2xl font-bold text-blue-300 mb-5">
            Soft Skills
          </div>
          <SoftSkills />
        </div>
        <div className="flex flex-col items-center xl:items-start rounded-lg">
          <div className="text-2xl font-bold text-blue-300 mb-4">
            Extra Curricular Activities
          </div>
          <ExtraCurricular />
        </div>
        <div className="flex flex-col items-center xl:items-start rounded-lg">
          <div className="text-2xl font-bold text-blue-300 mb-5">Languages</div>
          <Languages />
        </div>
      </div>
    </div>
  );
}
