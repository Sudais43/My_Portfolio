import type { Skill } from "@/types/skill";

const skills: Skill[] = [
  {
    name: "Mobile App Development",
    // todo: use proper thumbnail pics
    thumbnail: "/images/skills/mobile-development.jpg",
    description: `Mobile Development entails crafting high-performance, cross-platform applications for Android and iOS using Flutter and Dart. It encompasses robust architecture and reactive UI patterns to ensure a seamless and responsive user experience.`,
  },
  {
    name: "State Management",
    thumbnail: "/images/skills/ui-ux-design.jpg",
    description: `State Management focuses on maintaining predictable data flows and app responsiveness. This skill includes utilizing advanced architecture patterns such as BLoC, Cubit, Riverpod, and Provider to separate business logic from the UI.`,
  },
  {
    name: "Database & Backend Integration",
    thumbnail: "/images/skills/database-management.jpg",
    description: `Database Management and Backend Integration involve securely handling local storage and remote data. This skill covers Firebase, Hive CE, Isar, Dio, and RESTful APIs to ensure data integrity, real-time sync, and offline capabilities.`,
  },
  {
    name: "Software Architecture & Tools",
    thumbnail: "/images/skills/web-development.jpg",
    description: `Software Architecture and Tools encompass writing clean, maintainable code using Clean Architecture principles. This includes version control with Git and GitHub, debugging in VS Code and Android Studio, and API testing with Postman.`,
  },
];

export { skills };
