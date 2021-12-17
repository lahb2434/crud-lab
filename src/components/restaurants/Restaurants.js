import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  createRestaurants = (props) => 
    props.restaurants.map( restaurant => {
      return <Restaurant 
      key={restaurant.id} 
      restaurant={restaurant} 
      deleteRestaurant={props.deleteRestaurant}/> 
    }
  )
  
  render() {
    
    return(  
      <ul>
        {this.createRestaurants(this.props)}
      </ul>
    );
  }
};

export default Restaurants;