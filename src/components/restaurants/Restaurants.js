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
      <h3>
        {this.createRestaurants(this.props)}
      </h3>
    );
  }
};

export default Restaurants;