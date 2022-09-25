import React from 'react';
import {Navigate, Route,Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Main from "../pages/Main";


const AppRouter = observer(() => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>} />
            <Route path={'*'} element={<Navigate to={'/'}/>} />
        </Routes>
    );
});

export default AppRouter;
