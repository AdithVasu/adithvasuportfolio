export interface ContactItem {
  name: string;
  href: string;
  type: "linkedin" | "github" | "email";
}

export const contactLinks: ContactItem[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/adithya-vasudevan-008a312b3/",
    type: "linkedin"
  },
  {
    name: "GitHub",
    href: "https://github.com/AdithVasu",
    type: "github"
  },
  {
    name: "Email",
    href: "mailto:a.vasudevan@wustl.edu",
    type: "email"
  }
];