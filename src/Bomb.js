// your Bomb code here!
import React, { Component } from 'react';



export default class Bomb extends Component {
   state = {
       secondsLeft: this.props.initialCount
   }
    render() {

       let secondsLeft = this.state.secondsLeft

        let boom = secondsLeft == 0 ? "Boom!" : `${secondsLeft} seconds left before I go boom!`
        return (
            <div>
                <h3>{boom}</h3>
            </div>
        )
    }

    
}