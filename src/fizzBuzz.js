import React from "react";

class FizzBuzz extends React.Component{
    constructor() {
        super();
        this.state = {
          count: 1,
          fizzBuzz: ''
        }     
      }

      componentDidMount() {
        this.intervalID = setInterval(
            () => {
                this.setState({
                    count: this.state.count + 1
                });                
                this.fizzBuzz()
            },
            1000
          );
      }

      componentWillUnmount() {
        clearInterval(this.intervalID);
      }   

    fizzBuzz() {
        const {count} = this.state;
        if (count % 15 === 0) {
          this.setState({fizzBuzz: 'FizzBuzz'});
        } else if (count % 5 === 0) {
          this.setState({fizzBuzz: 'Buzz'});
        } else if (count % 3 === 0) {
          this.setState({fizzBuzz: 'Fizz'});
        } else {
          this.setState({fizzBuzz: ''});
        }
      }    
     

      render() {
        return(
        <div className="container">
          <h2>{this.state.fizzBuzz || this.state.count}</h2>       
        </div>
      )
    }
}
export default FizzBuzz;