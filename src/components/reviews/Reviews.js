import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  createReviews = (props) => 
    props.reviews.map( review => {
      if(review.restaurantId === props.restaurantId){
        return <Review 
        key={review.id} 
        review={review} 
        deleteReview={props.deleteReview}/> 
      }
    }
  )
  
  render() {
    return(  
      <ul>
        {this.createReviews(this.props)}
      </ul>
    );
  }
};

export default Reviews;