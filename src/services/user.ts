import { users } from "@/temporalDBData/users"
import { Project, Skill, User } from "@/types";

export const getUser = (userId:string):Promise<User> => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === userId) as User;
    if(user){
      resolve(user);
    }
    reject({errorCode:404, message:'No user with that id'})
  })
}

export const getSkills = (userId:string):Promise<Skill[]> => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === userId) as User;
    if(user){
      resolve(user.skills);
    }
    reject({errorCode:404, message:'No user with that id'})
  })
}

export const getProjects = (userId: string):Promise<Project[]> => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === userId) as User;
    if(user){
      resolve(user.projects);
    }
    reject({errorCode:404, message:'No user with that id'})
  })
}