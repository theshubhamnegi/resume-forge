import { ResumeJSON } from "@/types";
import { Github, Globe, Linkedin, LucideIcon, Mail, Phone, SquareArrowOutUpRight } from "lucide-react";
import React from "react";

const ResumeSection = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => {
  return (<div className="mt-5 mb-4 pb-4 " style={{ borderBottom: "1.5px solid #2e2c2c" }}>
    <h2
      className="text-lg font-bold tracking-wider uppercase my-2"
    >
      {title}
    </h2>
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  </div>)
}

const ResumeComponent = ({ resumeJson }: { resumeJson: ResumeJSON }) => {
  const iconMapper: Record<string, LucideIcon> = {
    "phone": Phone,
    "mail": Mail,
    "linkedin": Linkedin,
    "github": Github,
    "globe": Globe
  }

  return (
    <div className="pt-12 px-12" style={{
      backgroundColor: "#ffffff", color: "#2e2c2c"
     
    }}>

      <div className="text-center pb-3" style={{ borderBottom: "1px solid #2e2c2c" }}>
        <h1 className="text-[42px] font-bold">{resumeJson.name}</h1>

        <div className="text-sm mb-1 flex items-center justify-center flex-wrap gap-x-11 gap-y-2">
          {resumeJson.contacts.map(contact => {
            const Icon = contact.icon ? iconMapper[contact.icon.toLowerCase()] : null;
            return (
            <a
              key={contact.label}
              href={contact.link}
              className="inline-flex items-center gap-1 underline"
              style={{ color: "#2563eb" }}
            >
              {!!Icon && <Icon size={14} />}
              {contact.label}
            </a>
          )
          })}
        </div>


      </div>

      <ResumeSection title={"Overview"}>
        {resumeJson.overview}
      </ResumeSection>

      <ResumeSection title={"Skills"}>
        <div className="space-y-1">
          {resumeJson.skills.map((skill, index) => (
            <div key={index} className="text-sm">
              <span className="font-semibold inline-block w-32">{skill.category}:</span>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title={"Work Experience"} className="space-y-4">

        {resumeJson.experiences.map((exp, index) => (
          <div key={exp.company} className={`mb-6 ${index === resumeJson.experiences.length - 1 ? '' : 'pb-4'}`} style={index !== resumeJson.experiences.length - 1 ? { borderBottom: "1px solid #e5e7eb" } : {}}>
            <div className="text-sm mb-1">
              Company Name -{" "}
              <a
                href={exp.link}
                className="underline inline-flex items-center"
                style={{ color: "#2563eb" }}
              >
                {exp.company} ({exp.parentCompany})
              </a>
            </div>

            <div className="text-sm mb-1">
              Roles Held: {exp.roles}
            </div>

            <div className="text-sm mb-8">
              Duration: {exp.duration}
            </div>

            {exp.projects.map((project, index) => (
              <div key={index} className="mb-5">
                <div className="text-sm font-bold mb-1">
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

                <div className="text-sm mb-8 italic">
                  {project.role}  /  {project.duration}  /  {project.techStack}
                </div>

                {project.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}</div>
        ))}
      </ResumeSection>
      <ResumeSection title={"Education"}>
        {resumeJson.education.map(edu => (
          <div key={edu.college} className="mb-4">
            <p className="text-sm text-gray-700">
              {edu.college} | {edu.duration}
            </p>
            <p className="text-sm font-bold mt-1">
              {edu.course}
            </p>
          </div>
        ))}

      </ResumeSection>
    </div>

  );
};

export default ResumeComponent;