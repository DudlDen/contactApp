import React from 'react';
import AppRouter from "./component/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";

const RootApp = observer(() => {
    return (
        <BrowserRouter >
            <AppRouter/>
        </BrowserRouter>
    );
});

export default RootApp;
