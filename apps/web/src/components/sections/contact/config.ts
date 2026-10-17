import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "sk.khan96000@gmail.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/Sudais43",
      Icon: SiGithub,
    },
    // {
    //   name: "Youtube",
    //   href: "https://youtube.com/",
    //   Icon: SiYoutube,
    // },
    // {
    //   name: "X",
    //   href: "https://x.com/",
    //   Icon: SiX,
    // },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/msudais143",
      Icon: SiLinkedin,
    },
  ],
};

export { contact };
