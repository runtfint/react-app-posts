import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';

function AppRouter(props) {
    return (
        <Routes>
            <Route path='/about' element={ <About/> }></Route>
            <Route path='/posts' element={ <Posts/> }></Route>
            <Route path='/error' element={ <Error/> }></Route>
            <Route
                path="*"
                element={<Navigate to="/error" replace />}
            />
        </Routes>
    );
}

export default AppRouter;