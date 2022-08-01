import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostPage from "../pages/PostPage/PostPage"


export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="feed" element={<FeedPage/>}/>
            <Route path="cadastro"  element={<SignUpPage/>}/>
            <Route path="post" element={<PostPage/>}/>

                      
        </Routes>  
        </BrowserRouter>
    )
}