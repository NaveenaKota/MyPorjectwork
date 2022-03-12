import { reactive } from "vue";
import router from "../router";
import * as users from "./user";


const session= reactive({
    user: null as users.User | null,
})

export async function Login(handle:string, password:string) {
    const user = users.list.find(u => u.handle === handle );

    if (!user){
        throw {message : "User not found"};
    }
    if (user.password !== password){
        throw {message: "Incorrect Password"};
    }
    console.log("user",user);
    console.log("success");
    session.user = user;
    router.push('/');
    
}

export async function Signup(fName:string, lName:string, handle:string, 
    password:string, email:string) {
    users.list.unshift({ 
        firstName: fName,
        lastName: lName,
        handle: handle,
        password: password,
        email: email,
        pic: 'https://randomuser.me/api/portraits/men/9.jpg',
        id: 19,
        tasks:[]
      });

    const user = users.list.find(u => u.handle == handle );

    if (!user){
        throw {message : "User not found"};
    }
    console.log("user",user);
    console.log("Signup success!");
    session.user = user;
    router.push('/');
    
}

export function Logout() {
    session.user = null;
}
export default session;