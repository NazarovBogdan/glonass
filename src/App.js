// React
import React, { useState } from 'react'
// RRD
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter,
    useParams
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



function App() {

    const [category, setNewName] = useState()

    function setName(categoryName) {
        setNewName(categoryName)
    }

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Header />
                <NavigationBar />
                <Switch>
                    <Route path="/equipment">
                        <EquipmentPage categoryName={setName} />
                    </Route>
                    <Route path="/contacts">
                        <ContactsPage />
                    </Route>
                    <Route path="/about">
                        <AboutUsPage />
                    </Route>
                    <Route path="/category">
                        <CategoryPage category={category} />
                    </Route>
                    <Route path="/equipment/category/item">
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