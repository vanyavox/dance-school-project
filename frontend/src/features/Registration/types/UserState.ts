export interface Response {
   message?: string,
   user?: User,
   status?: string

}

export interface User {
   id: string
   name: string
   surname: string
   age: number
   email: string
   phone: string
   role: string
   image: string
   authChecked: boolean
}
export interface State {
   id: string,
   email: string,
   name: string,
   surname: string,
   age: number,
   phone: string,
   role: string,
   image: string,
   emailError?: string,
   loginError?: string,
   passwordError?: string,
   authChecked: boolean
}

export interface UserRegistration {
   name: string
   email: string
   password: string
   passwordRepit: string
}
