import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const onLeftButton = () => {
    if(index === 0){
        setIndex(people.length -1);
        return
    }

    setIndex(index -1);

  }

  const onRightButton = () => {
    if(index === people.length -1){
        setIndex(0);
        return
    }

    setIndex(index +1);

  }

  const onRandomButton = () =>{

    let randomIndex = Math.floor(Math.random()* (people.length));
    
    while(randomIndex === index ){
      randomIndex= Math.floor(Math.random()* (people.length));
    }
    console.log(randomIndex);
    setIndex(randomIndex);
  }

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span clasName="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button onClick={onLeftButton} className="prev-btn">
        <FaChevronLeft/>
      </button>
      <button onClick={onRightButton} className="next-btn">
        <FaChevronRight/>
      </button>
    </div>
    <button onClick={onRandomButton} className="random-btn">
        Surprise me
      </button>
  </article>
};

export default Review;
