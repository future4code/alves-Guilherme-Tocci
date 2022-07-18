import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from '../Pages/AdminHomePage.js';
import ApplicationFormPage from '../Pages/ApplicationFormPage.js';
import CreateTripPage from '../Pages/CreateTripPage.js';
import HomePage from "../Pages/HomePage.js";
import ListTripsPage from '../Pages/ListTripsPage.js';
import LoginPage from '../Pages/LoginPage.js';
import TripDetailsPage from '../Pages/TripDetailsPage.js';
import React from 'react';




export const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>

        <Route index element={<HomePage/>} />
        <Route path="list" element={<ListTripsPage/>} />
        <Route path="application" element={<ApplicationFormPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="admin" element={<AdminHomePage/>} />
        <Route path="trip" element={<TripDetailsPage/>} />
        <Route path="create" element={<CreateTripPage/>} />

        </Routes>

        </BrowserRouter>
    )
}
export default Router