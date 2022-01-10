// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {
    constructor(props) {
        super(props)
        // Define the initial state:
        this.state = {
            // hasBeenClicked: false,
            // count: 0,
            toggled: false,
        };
    }
    
    // handleClick = () => {
        // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
        // let newCount = this.state.count + 1
        // Update our state here...
        // this.setState({
        //     hasBeenClicked: true,
        //     count: newCount,
        // },
        // // Add callback to access state when the change is triggered:
        // () => console.log(this.state.count)
        // )
        // console.log(this.state.hasBeenClicked);
    // }

    // handleClick = () => {
    //     this.setState(previousState => {
    //       return {
    //         count: previousState.count + 1
    //       }
    //     })
    // }

    handleClick = () => {
        this.setState((previousState) => {
            return {
                toggled: !previousState.toggled,
            };
        });
    };

    render() {
        return (
            <div>
                {/* What is state? */}
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                {/* Update state onclick */}
                {/* <button onClick={this.handleClick}>Click me!</button> */}
                <button onClick={this.handleClick}>
                    {this.state.toggled ? "ON" : "OFF"}
                </button>
            </div>
        );
    }
}

export default ClickityClick;
