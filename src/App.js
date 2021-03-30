// React
import React, { useState, Fragment } from 'react'
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
import IndustryPage from './pages/IndustryPage/IndustryPage'
import AdminPage from './pages/AdminPage/AdminPage'
import ItemPage from './pages/ItemPage/ItemPage'



function App() {
    const [category, setNewName] = useState()
    const [category2, setNewNameCat] = useState()

    function setName(categoryName, categoryName2) {
        setNewName(categoryName)
        setNewNameCat(categoryName2)
    }

    const [newCategoryItem, setNewCategoryItem] = useState()
    const [newCategoryItemName, setNewCategoryItemName] = useState()
    const [newCategoryItemDescription, setNewCategoryItemDescription] = useState()
    const [newCategoryItemCharacteristics, setNewCategoryItemCharacteristics] = useState()

    function setCategoryItemPar(
        categoryItem,
        categoryItemName,
        categoryItemDescription,
        categoryItemCharacteristics // [][]
    ) {
        setNewCategoryItem(categoryItem)
        setNewCategoryItemName(categoryItemName)
        setNewCategoryItemDescription(categoryItemDescription)
        setNewCategoryItemCharacteristics(categoryItemCharacteristics)
    }

    const itemPar = {
        category: newCategoryItem,
        name: newCategoryItemName,
        description: newCategoryItemDescription,
        characteristics: newCategoryItemCharacteristics
    }

    console.log('itempar\n', itemPar);

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                    <Route path="/">
                        {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
                        {/* <GlobalStyles /> */}
                        <Header />
                        <NavigationBar />
                        <Switch>
                            <Route exact path={`/category/${newCategoryItem}/${newCategoryItemName}`} >
                                <ItemPage itemPar={itemPar} />
                            </Route>
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
                                <CategoryPage setCategoryNameItem={setCategoryItemPar} category={category} heading={category2} />
                            </Route>
                            <Route path="/main">
                                <MainPage />
                            </Route>
                            <Redirect to="/main" />
                        </Switch>
                        <UserForm />
                        <Footer />
                        {/* </ThemeProvider> */}
                    </Route>
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}



export default App