// React
import React, { useState } from 'react'
// RRD
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter,
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
import IndustryPage from './pages/IndustryPage/IndustryPage'
import AdminPage from './pages/AdminPage/AdminPage'



function App() {
    const [category, setNewName] = useState()
    const [category2, setNewNameCat] = useState()

    function setName(categoryName, categoryName2) {
        setNewName(categoryName)
        setNewNameCat(categoryName2)

    }

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route path="/admin">
                        <Route path="/admin">
                            <AdminPage />
                        </Route>
                    </Route>
                    <Route path="/">
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
                            <Route path="/industry">
                                <IndustryPage />
                            </Route>
                            <Route path="/category">
                                <CategoryPage category={category} heading={category2} />
                            </Route>
                            <Route path="/equipment/category/item">
                                <ItemPage />
                            </Route>
                            <Route path="/main">
                                <MainPage />
                            </Route>
                            <Redirect to="/main" />
                        </Switch>
                        <UserForm />
                        <Footer />
                    </Route>
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}



export default App