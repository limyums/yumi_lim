"use client";
import {
  Briefcase,
  Contact,
  FileText,
  FolderGit2,
  Link,
  Rss,
  User,
} from "lucide-react";
import "./Header.scss";
import { usePathname } from "next/navigation";

const BASE_CLASS = "header";

const NAV_ITEMS = [
  { name: "About", path: "/", icon: <User size={25} /> },
  { name: "Resume", path: "/resume", icon: <FileText size={25} /> },
  { name: "Projects", path: "/project", icon: <FolderGit2 size={25} /> },
  {
    name: "Blogs",
    path: "/blogs",
    icon: <Rss size={25} />,
  },
];
export default function Header() {
  const currentRouter = usePathname();
  return (
    <div className={BASE_CLASS}>
      <ul className={`${BASE_CLASS}_links`}>
        {NAV_ITEMS.map(({ name, path, icon }, index) => (
          <li key={`${name}-${index}`}>
            <a
              className={`${BASE_CLASS}_links_link ${
                currentRouter === path ? "current" : ""
              }`}
              href={path}
            >
              {icon}
              <div className="title">{name}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
