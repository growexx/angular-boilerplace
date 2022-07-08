export interface createUser {
    userName: string,
    companyName: string,
    userPhone: string,
    userCompanyAddress: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    postalCode:string,
    country: string
}
export type CreateUserType = createUser