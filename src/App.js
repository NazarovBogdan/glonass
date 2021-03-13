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
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// Pages
import MainPage from './pages/MainPage/MainPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import EquipmentPage from './pages/EquipmentPage/EquipmentPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ItemPage from './pages/ItemPage/ItemPage'



const theme = {
    dark: {
        primary: '',
        secondly: ''
    },
    light: {
        primary: '',
        secondly: ''
    }
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
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
                    <Route path="/category">
                        <CategoryPage />
                    </Route>
                    <Route path="/item">
                        <ItemPage />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                    <Redirect path="/404">
                    </Redirect>
                </Switch>
                <UserForm />
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
}



export default App