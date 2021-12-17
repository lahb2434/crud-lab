import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    
    
    const {restaurant} = this.props
    
    return (
        <div>
          <text>{restaurant.name}</text>
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </div>
      
    );
  }
};

export default Restaurant;
