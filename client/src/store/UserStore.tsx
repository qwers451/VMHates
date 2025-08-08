import { makeAutoObservable } from "mobx";

export interface IUser {
    id: number;
    name: string;
}

export default class UserStore {
    private _isAuth: boolean;
    private _user: IUser | null;
    private _users: IUser[]

    constructor() {
        this._isAuth = false;
        this._user = null;
        this._users = [];

        makeAutoObservable(this);
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get user(): IUser | null {
        return this._user;
    }

    get users(): IUser[] {
        return this._users;
    }

    setIsAuth(value: boolean) {
        this._isAuth = value;
    }

    setUser(user: IUser | null) {
        this._user = user;
    }

    setUsers(users: IUser[]) {
        this._users = users;
    }
}