import _ from 'lodash'
import { READ_SHOPS, READ_SHOP,CREATE_SHOP,UPDATE_SHOP,DELETE_SHOP } from '../actions'

export default (shops = {}, action) => {

    switch (action.type) {
        case READ_SHOPS:
            return _.mapKeys(action.response.data, 'id')
        case CREATE_SHOP:
            return _.mapKeys(action.response.data, 'id')
        // case DELETE_EVENTS:
        //     delete events[action.id]//メモリから削除
        //     return { ...events }
         case READ_SHOP:
             var data = action.response.data
             data = {...data[0]}
             //console.log('reduser')
             //console.log(data)
             return { ...data }
             //return { [data.id]: data }
             // case UPDATE_EVENTS:
        //     return _.mapKeys(action.response.data, 'id')
          case UPDATE_SHOP:
              const data02 = action.response.data
              return { ...shops, [data.id]: data02 }
          case DELETE_SHOP:
              delete shops[action.id]
              return {...shops}
        default:
            return shops
    }
}
