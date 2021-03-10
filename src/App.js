// React
import React from 'react'
// RRD
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter
} from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer'
import UserForm from './components/UserForm/UserForm'
// Pages
import MainPage from './pages/MainPage/MainPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import EquipmentPage from './pages/EquipmentPage/EquipmentPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'



function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavigationBar />
            <Switch>
                <Route path="/equipment">
                    <EquipmentPage />
                </Route>
                <Route path="/contacts">
                    <ContactsPage />
                </Route>
                <Route path="/about">
                    <AboutUsPage />
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
                <Redirect path="/404">
                </Redirect>
            </Switch>
            <UserForm />
            <Footer />
        </BrowserRouter>
    );
}



export default App