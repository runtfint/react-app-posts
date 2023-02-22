import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';

function AppRouter() {
    return (
        <Routes>
            <Route path='/about' element={ <About/> }></Route>
            <Route exact path='/posts' element={ <Posts/> }></Route>
            <Route exact path='/posts/:postId' element={ <PostIdPage/> }></Route>
            <Route path='/error' element={ <Error/> }></Route>
            <Route
                path="*"
                element={<Navigate to="/posts" replace />}
            />
        </Routes>
    );
}

export default AppRouter;