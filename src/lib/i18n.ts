import * as es from "./data";
import * as en from "./data.en";
import { useLocale, type Locale } from "./i18n-store";

const dataByLocale = { es, en };

export function useLocalizedData() {
  const locale = useLocale();
  return dataByLocale[locale];
}

const uiStrings = {
  es: {
    nav: {
      experience: "Experiencia",
      leadership: "Liderazgo",
      skills: "Habilidades",
      projects: "Proyectos",
      certifications: "Certificaciones",
      education: "Educación",
    },
    downloadCv: "Descargar CV",
    experienceHeading: "Experiencia Laboral",
    leadershipHeading: "Liderazgo y Voluntariado",
    keyAchievements: "Logros Clave",
    skillsHeading: "Habilidades",
    programmingLanguages: "Lenguajes de Programación",
    frontendDevelopment: "Desarrollo Frontend",
    backendDevelopment: "Desarrollo Backend e IA",
    databaseAndStorage: "Bases de Datos",
    cloudAndDevOps: "Cloud & DevOps",
    toolsAndServices: "Herramientas y Ciencia de Datos",
    projectsHeading: "Proyectos",
    viewOnGithub: "Ver en GitHub",
    viewDemo: "Ver demo",
    certificationsHeading: "Certificaciones y Ponencias",
    educationHeading: "Educación",
    achievementsAndActivities: "Logros y Actividades",
    allRightsReserved: "Todos los derechos reservados.",
    madeWith: "Hecho con dedicación.",
  },
  en: {
    nav: {
      experience: "Experience",
      leadership: "Leadership",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      education: "Education",
    },
    downloadCv: "Download CV",
    experienceHeading: "Work Experience",
    leadershipHeading: "Leadership & Volunteering",
    keyAchievements: "Key Achievements",
    skillsHeading: "Skills",
    programmingLanguages: "Programming Languages",
    frontendDevelopment: "Frontend Development",
    backendDevelopment: "Backend & AI Development",
    databaseAndStorage: "Databases",
    cloudAndDevOps: "Cloud & DevOps",
    toolsAndServices: "Tools & Data Science",
    projectsHeading: "Projects",
    viewOnGithub: "View on GitHub",
    viewDemo: "View demo",
    certificationsHeading: "Certifications & Talks",
    educationHeading: "Education",
    achievementsAndActivities: "Achievements & Activities",
    allRightsReserved: "All rights reserved.",
    madeWith: "Made with dedication.",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function useUiStrings() {
  const locale = useLocale();
  return uiStrings[locale];
}
