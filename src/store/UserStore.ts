import {makeAutoObservable} from "mobx";
interface IUser {
    id:number,
    name:string,
    phone:string
}
export default class UserStore {
    _users:Array<IUser> = []

    constructor() {
        makeAutoObservable(this)
    }


    setUser(users:[]) {
        this._users = users
    }

    get Users() {
        return this._users
    }



}
