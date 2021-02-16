import { UserType } from "./user-type.enum";

export class User {
    firstName: string = '';
    lastName: string = ''
    email: string = ''
    password: string = ''
    birthDate: Date = new Date();
    userType: UserType = UserType.Customer

    constructor(){
        // super();
      }
}