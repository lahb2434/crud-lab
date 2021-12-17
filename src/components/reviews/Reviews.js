import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  createReviews = (props) => 
    props.reviews.map( review => {
      if(review.restaurantId === props.restaurantId){
        return <Review 
        key={review.id} 
        review={review} 
        restaurantId={props.restaurantId }
        deleteReview={props.deleteReview}/> 
      }
    }
  )
  
  render() {
    debugger;
    return(  
      <ul>
        {this.createReviews(this.props)}
      </ul>
    );
  }
};

export default Reviews;