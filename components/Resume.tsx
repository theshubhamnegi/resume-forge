import { SampleResumeData } from "@/sampleResumeData";
import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";

const ResumeSection = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => {
  return (<div className="mt-5 mb-4 pb-4 " style={{ borderBottom: "1.5px solid #2e2c2c" }}>
    <h2
      className="text-lg font-bold tracking-wider uppercase my-2"
    >
      {title}
    </h2>
    <div className={`text-xs ${className}`}>
      {children}
    </div>
  </div>)
}

const ResumeComponent = () => {
  return (
    <div className="pt-12 px-12" style={{ backgroundColor: "#ffffff", color: "#2e2c2c" }}>

      <div className="text-center pb-3" style={{ borderBottom: "1px solid #2e2c2c" }}>
        <h1 className="text-[42px] font-bold">{SampleResumeData.name}</h1>

        <div className="text-sm mb-1 flex items-center justify-center flex-wrap gap-x-11 gap-y-2">
          {SampleResumeData.contacts.map(contact => (
            <a
              key={contact.label}
              href={contact.link}
              className="inline-flex items-center gap-1 underline"
              style={{ color: "#2563eb" }}
            >
              <contact.icon size={16} />
              {contact.label}
            </a>
          ))}
        </div>


      </div>

      <ResumeSection title={"Overview"}>
        {SampleResumeData.overview}
      </ResumeSection>

      <ResumeSection title={"Skills"}>
        <div className="space-y-1">
          {SampleResumeData.skills.map((skill, index) => (
            <div key={index} className="text-xs">
              <span className="font-semibold inline-block w-32">{skill.category}:</span>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title={"Work Experience"} className="space-y-4">

        {SampleResumeData.experiences.map((exp, index) => (
          <div key={exp.company} className={`mb-6 ${index === SampleResumeData.experiences.length - 1 ? '' : 'pb-4'}`} style={index !== SampleResumeData.experiences.length - 1 ? { borderBottom: "1px solid #e5e7eb" } : {}}>
            <div className="text-xs mb-1">
              Company Name -{" "}
              <a
                href={exp.link}
                className="underline inline-flex items-center"
                style={{ color: "#2563eb" }}
              >
                {exp.company} ({exp.parentCompany})
              </a>
            </div>

            <div className="text-xs mb-1">
              Roles Held: {exp.roles}
            </div>

            <div className="text-xs mb-8">
              Duration: {exp.duration}
            </div>

            {exp.projects.map((project, index) => (
              <div key={index} className="mb-5">
                <div className="text-xs font-bold mb-1">
                  {project.link ? (
                    <a
                      href={project.link ?? "#"}
                      className="inline-flex items-center gap-1 underline"
                      style={{ color: "#2563eb" }}
                    >
                      {project.name}
                      <SquareArrowOutUpRight size={12} />
                    </a>
                  ) : (
                    project.name
                  )}
                </div>

                <div className="text-xs mb-8" style={{ color: "#374151" }}>
                  {project.role}  /  {project.duration}  /  {project.techStack}
                </div>

                {project.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-xs leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}</div>
        ))}
      </ResumeSection>
    </div>

  );
};

export default ResumeComponent;