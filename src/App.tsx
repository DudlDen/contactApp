import React, {createContext} from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";
import UserStore from "./store/UserStore";
import RootApp from "./RootApp";


interface IContext{
    users: UserStore
}
export const Context = createContext<IContext| null>(null)


function AppComponent() {

    return(
        <Context.Provider value={{users: new UserStore()}}>
            <RootApp/>
        </Context.Provider>
    );
}

export const App = hot(AppComponent);


