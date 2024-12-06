import { Project } from "./Project";
import { Skill } from "./Skill";

export interface User {
  id:string;
  name:string;
  lastName:string;
  role:string;
  description:string;
  skills:Skill[];
  projects:Project[];
}