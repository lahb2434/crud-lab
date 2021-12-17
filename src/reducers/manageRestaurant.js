import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = [], action) {
    switch(action.type) {
      case "ADD_RESTAURANT":
        return [...state, {name: action.restaurant, id: cuid()}]
        // return state.concat( {name: action.restaurant, id: cuid()} )
  
      case "DELETE_RESTAURANT":
        return state.filter(restaurant => restaurant.id !== action.id)

      default:
        return state
    }
}
