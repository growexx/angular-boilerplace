export interface createUser {
    image:string,
    firstName: string,
    lastName: string,
    phone: string,
    name: string,
    address:{
        address: string,
        city: string,
        state:string,
        postalCode:string,
        country:string,
    }
}
export type CreateUserType = createUser

