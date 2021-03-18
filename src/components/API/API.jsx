import * as axios from 'axios';



const instanse = axios.create({
    baseURL: "http://glonass.orangedm.agency/backend"
})


export const setItemsCategory = (params) => {
    return instanse({
        method: 'post',
        url: 'setItemsCategory.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const addItems = (params) => {
    return instanse({
        method: 'post',
        url: 'addItem.php',
        data: params
    }).then(response => {
        return response.data
    })
}