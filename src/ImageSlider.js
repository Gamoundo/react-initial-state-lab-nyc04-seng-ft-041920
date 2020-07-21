// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
    state = {
        currentSlideIndex: 0
    }
    
    
    render() {
       let currentSlide = this.state.currentSlideIndex
        return (
            <div>
                <h3>I am on slide {currentSlide}</h3>
            </div>
        )
    }
}
