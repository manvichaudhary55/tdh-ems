import { TeamMember } from "./types";

export const TEAMS = <const>["tech", "core", "events", "research", "advisors"];

export const teamData: TeamMember[] = [
  {
    name: "Aditya Nandan",
    team: "tech",
    imgPath: "/team/aditya.jpg",
    social: {
      website: "https://adityanandan.vercel.app/",
      github: "https://github.com/iMADi-ARCH/",
      linkedin: "https://www.linkedin.com/in/aditya-nandan-thats-it",
      twitter: "https://twitter.com/iMADi69235681",
    },
  },
  {
    name: "Devaditya Singh",
    team: "tech",
    imgPath: "/team/dev.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/devaditya-singh-638990247",
      insta: "https://www.instagram.com/devadixtya",
    },
  },
  {
    name: "Person 3",
    team: "tech",
    imgPath: "/team/person.jpg",
    social: {},
  },
  {
    name: "Person 4",
    team: "core",
    imgPath: "/team/person.jpg",
    social: {},
  },
  {
    name: "Person 5",
    team: "events",
    imgPath: "/team/person.jpg",
    social: {},
  },
  {
    name: "Person 6",
    team: "research",
    imgPath: "/team/person.jpg",
    social: {},
  },
  {
    name: "Person 7",
    team: "advisors",
    imgPath: "/team/person.jpg",
    social: {},
  },
  {
    name: "Person 8",
    team: "core",
    imgPath: "/team/person.jpg",
    social: {},
  },
];