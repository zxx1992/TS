
// 接口
// 命名空间
export namespace A {
    interface DBI<T> {
        add(info: T): boolean;
        update(info: T, id: number): boolean;
        delete(id: number): boolean;
        get(id: number): any[];
    }

    export class Mysql<T> implements DBI<T>{
        add(info: T): boolean {
            console.log(info, "mysql add")
            return true;
            // throw new Error("Method not implemented.");
        }
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            throw new Error("Method not implemented.");
        }
    }

    export class Mssql<T> implements DBI<T> {
        add(info: T): boolean {
            console.log(info, "Mssql add")
            return true;
            // throw new Error("Method not implemented.");
        }
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            let list = [
                { titel: "sssf" }
            ];
            return list;
        }

    }
}


export namespace B {
    interface Animal<T> {
        eat(info: T): boolean;
    }
    export class Dog<T> implements Animal<T> {
        eat(info:T):boolean {
            console.log(info,"animal dog")
            return true;
        }
    }
}