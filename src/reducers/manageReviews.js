import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageReviews(state = [], action) {
    switch(action.type) {
      case "ADD_REVIEW":
        return [...state, { text: action.text, id: cuid(), restaurantId: action.restaurantId }]
  
      case "DELETE_REVIEW":
        return state.filter(review => review.id !== action.id)
      
      case "DELETE_RESTAURANT":
        return state.filter(review => review.restaurantId !== action.id)

      default:
        return state
    }
}
