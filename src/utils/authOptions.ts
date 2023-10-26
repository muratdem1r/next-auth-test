import {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
interface LoginRequest{
    email: string,
    password: string
}
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            // auto login
            // credentials: {
            //     email: {label: 'Email', placeholder: 'admin@gmail.com'},
            //     password: {label: 'Password', placeholder: '************'},
            // },
            credentials: {}, // custom login
            authorize(credentials, req){
                const { email, password} = credentials as LoginRequest;

                if(email !== 'murat@gmail.com' || password !== '123'){
                    return null;
                }

                return { id: '1', name: 'Murat Demir', email: 'murat@gmail.com' }
            }
        })
    ],
    pages: {
        signIn: '/login' // custom login
    }
}
