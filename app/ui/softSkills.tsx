import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const softSkills = [
  "Creative Thinking",
  "Project Management",
  "Time Management",
  "Critical Thinking",
  "Resilience",
  "Responsibility & Honesty",
  "Self-Management",
  "Fast Learning",
  "Team Player",
];

const SoftSkills: React.FC = () => {
  return (
    <ul className="text-left text-white grid md:grid-cols-2 max-w-xl">
      {softSkills.map((skill, index) => (
        <li
          key={index}
          className="flex items-center space-x-3 rtl:space-x-reverse mb-4 xl:mb-10"
        >
          <div className="text-green-500">
            <IoMdCheckmarkCircleOutline />
          </div>
          <div>{skill}</div>
        </li>
      ))}
    </ul>
  );
};

export default SoftSkills;
