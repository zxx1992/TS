import {A} from "../modules/db"

class UserClass {
    username: string | undefined;
    password: string | undefined;
}
var UserModel = new A.Mssql<UserClass>();

export {UserClass, UserModel}