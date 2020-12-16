import {B} from "../modules/db";

class Dogclass {
    name: string | undefined;
}
var DogModel = new B.Dog<Dogclass>();
export {Dogclass,DogModel}