import React from 'react';


class Roulette extends React.Component {
    state = {
      chamber: null,
      spinningTheChamber: false,
    };
  
    static defaultProps = {
      bulletInChamber: 8
    };
  
    handleClick = () => {
      console.log('clicked')
      this.setState({
         spinningTheChamber: true,
      })
      const timeout = setTimeout(() => {
        const random = Math.ceil(Math.random() * 8);
        this.setState({
            chamber: random,
            spinningTheChamber: false,
        })
      }, 2000)
      console.log(this.state.chamber);
      }

      renderP(){
          const { spinningTheChamber, chamber } = this.state;
          const { bulletInChamber } = this.props;
          if( spinningTheChamber === true ){
              return 'spinning the chamber and pulling the trigger! ...'
          } else if ( chamber === bulletInChamber){
              return 'BANG!!!!'
          } else {
              return "you're safe!"
          }

      }

      componentWillUnmount(){
        clearTimeout(this.timeout)
      }
  
    render(){
      return (
        <div>
          <p>{this.renderP()}</p>
          <button onClick={this.handleClick}>Pull the trigger!</button> 
        </div>
      )
    }
  }
  

export default Roulette;