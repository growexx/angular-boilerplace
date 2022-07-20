export interface createUser {
    image: string,
    firstName: string,
    lastName: string,
    phone: string,
    companyName: string,
    email:string,
    address: {
        address: string,
        city: string,
        state: string,
        postalCode: string,
        country: string,
    }
}
export type CreateUserType = createUser

export interface userDetailsModal {
    image: string,
    firstName: string,
    lastName: string,
    phone: string,
    companyName: string,
    email:string,
    address: {
        address: string,
        city: string,
        state: string,
        postalCode: string,
        country: string,
    }
}

export type userDetailsType = userDetailsModal;