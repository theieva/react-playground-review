import React from 'react';

// A component that changes its display according to buttons that update state. 
// Uses event handlers and state.
class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = { who: 'World' }
    }

handleWorldClick = () => {
    this.setState({
        who: 'World'
    }) 
}

handleFriendClick = () => {
    this.setState({
        who: 'Friend'
    })
}

handleReactClick = () => {
    this.setState({
        who: 'React'
    })
}

    render() {
        return (
            <div>
            <p>Hello, {this.state.who}!</p>
            <button onClick={this.handleWorldClick}>World</button>
            <button onClick={this.handleFriendClick}>Friend</button>
            <button onClick={this.handleReactClick}>React</button>
            </div>
        )
    }

}

export default HelloWorld;