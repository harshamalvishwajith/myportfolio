import Image from "next/image";

export default function Skills() {
  const prLang = [
    {
      name: "Java",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "Python",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "C#",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: "C++",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
      name: "Kotlin",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "JavaScript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
  ];

  const frEnd = [
    {
      name: "Next.js",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "Tailwind",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
  ];

  const bkEnd = [
    {
      name: "Node.js",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: ".NET",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Express",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
  ];

  const db = [
    {
      name: "MongoDB",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MS SQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    },
    {
      name: "MySQL",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "Oracle",
      link: "https://oralytics.com/wp-content/uploads/2022/10/sql_icon-1.png",
    },
  ];

  const ide = [
    {
      name: "IntelliJ",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
      name: "VS Code",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "VisualStudio",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
    },
    {
      name: "Eclipse",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
    },
  ];

  const other = [
    {
      name: "git",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "PhotoShop",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    },
    {
      name: "Illustrator",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Figma",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
  ];

  return (
    <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
      <div className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60">
        <div className="font-light mb-3">Programming Languages</div>
        <div className="flex flex-wrap gap-4 justify-center items-center xl:justify-start">
          {prLang.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-2 w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 text-white"
            >
              <span className="text-xs font-medium mb-1">{item.name}</span>
              <Image
                src={item.link}
                className="w-10 h-10"
                alt={item.name}
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60">
        <div className="font-light mb-3">Front-End Frameworks</div>
        <div className="flex flex-wrap gap-4 justify-center items-center xl:justify-start">
          {frEnd.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-2 w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 text-white"
            >
              <span className="text-xs font-medium mb-1">{item.name}</span>
              <Image
                src={item.link}
                className="w-10 h-10"
                alt={item.name}
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60">
        <div className="font-light mb-3">Back-End Frameworks</div>
        <div className="flex flex-wrap gap-4 justify-center items-center xl:justify-start">
          {bkEnd.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-2 w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 text-white"
            >
              <span className="text-xs font-medium mb-1">{item.name}</span>
              <Image
                src={item.link}
                className="w-10 h-10"
                alt={item.name}
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60">
        <div className="font-light mb-3">Databases</div>
        <div className="flex flex-wrap gap-4 justify-center items-center xl:justify-start">
          {db.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-2 w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 text-white"
            >
              <span className="text-xs font-medium mb-1">{item.name}</span>
              <Image
                src={item.link}
                className="w-10 h-10"
                alt={item.name}
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60">
        <div className="font-light mb-3">IDEs</div>
        <div className="flex flex-wrap gap-4 justify-center items-center xl:justify-start">
          {ide.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-2 w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 text-white"
            >
              <span className="text-xs font-medium mb-1">{item.name}</span>
              <Image
                src={item.link}
                className="w-10 h-10"
                alt={item.name}
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-white/60">
        <div className="font-light mb-3">Others</div>
        <div className="flex flex-wrap gap-4 justify-center items-center xl:justify-start">
          {other.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-2 w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 text-white"
            >
              <span className="text-xs font-medium mb-1">{item.name}</span>
              <Image
                src={item.link}
                className="w-10 h-10"
                alt={item.name}
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
