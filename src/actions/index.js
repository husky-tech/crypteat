import axios from 'axios'
export const READ_SHOPS = 'READ_SHOPS'
export const CREATE_SHOP = 'CREATE_SHOP'
// export const DELETE_EVENTS = 'DELETE_EVENTS'
// export const UPDATE_EVENTS = 'UPDATE_EVENTS'
export const READ_SHOP = 'READ_SHOP'
export const UPDATE_SHOP = 'UPDATE_SHOP'
export const DELETE_SHOP = 'DELETE_SHOP'

const ROOT_URL = 'http://13.59.198.43:3000'

export const readShops = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/shop`)
    //console.log("axios:"+response.data[0].name)
    dispatch({ type: READ_SHOPS, response })
}

export const readShop = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/shop/${id}`)
    //console.log("axios:"+response.data[0].id)
    dispatch({ type: READ_SHOP, response })
}

export const postShop = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/shop`, values)
    dispatch({ type: CREATE_SHOP, response })
}

export const putShop = (values, id) => async dispatch => {
    //console.log("こんろぐ" + JSON.stringify(values))
    const response = await axios.put(`${ROOT_URL}/shop/${id}`, values)
    dispatch({ type: UPDATE_SHOP, response })
}

export const deleteShop = (id, password) => async dispatch => {
    //var json = {};
    //json.password = password
    //console.log("こんろぐ" + JSON.stringify(json))

    //bodyの受け渡しができない。どうせ消えるデータなのでパスワード保護しない方向で
    await axios.delete(`${ROOT_URL}/shop/${id}/${password}`)
    dispatch({ type: 'DELETE_SHOP', id })
}


// export const putEvent = values => async dispatch => {
//     const response = await axios.delete(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`,values)
//     dispatch( { type: UPDATE_EVENTS, response})
// }

// export const deleteEvent = id => async dispatch => {
//     await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
//     dispatch( { type: DELETE_EVENTS, id})
// }
