import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import MyLoader from './UI/loader/MyLoader';

function AppRouter() {

    const {isAuth, isLoading} = useContext(AuthContext)
    
    if (isLoading){
        return <MyLoader />
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route) => 
                    <Route
                        key={route.path} // можно index, как ниже
                        path={route.path}
                        element={ route.component }
                        exact={route.exact}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/posts" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) => 
                    <Route
                        key={index}
                        path={route.path}
                        element={ route.component }
                        exact={route.exact}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>            
    )
}

export default AppRouter;