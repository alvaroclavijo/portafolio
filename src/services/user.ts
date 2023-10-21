import { users } from "@/temporalDBData/users"

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