import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@MohamedTarek",
    icon: Icons.gitHub,
    link: "https://github.com/dragonwar101",
  },
  {
    name: "LinkedIn",
    username: "Mohamed Tarek",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/mohamed-tarek1997",
  },
  {
    name: "Twitter",
    username: "@MohamedTarek",
    icon: Icons.twitter,
    link: "https://x.com/Mohamed87072246",
  },
  {
    name: "Gmail",
    username: "m.tarekazab",
    icon: Icons.gmail,
    link: "mailto:m.tarekazab1997@gmail.com",
  },
];
